function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/**
 * Generates a cloth model with the given size.
 * @param {*} size
 * @param {*} min_coord
 * @param {*} max_coord
 * @param {*} gravityVector
 * @param {*} lengthCoefficient
 * @returns
 */
function generateClothModel({
  size = 0,
  min_coord = -1,
  max_coord = 1,
  gravityVector = [0, 0, 0],
  lengthCoefficient = 1,
  pointWeight = 0.00005,
  connectionCoef = 50,
  damping = 0.001,
}) {
  const points = [];

  const shift = (max_coord - min_coord) / size;
  for (let i = 0; i < size + 1; i++) {
    for (let j = 0; j < size + 1; j++) {
      points.push(
        clamp(min_coord + j * shift, min_coord, max_coord),
        clamp(max_coord - i * shift, min_coord, max_coord),
        0
      );
    }
  }
  const triangles = generateClothTrianglesIndices(size);
  const lines = generateClothLineIndices(size);
  const normalLengths = getNormalLengths(lines, points, lengthCoefficient);
  const connections = getConnectionsMap(lines, normalLengths);
  const pinned = {};
  const colors = [];
  calcualateColors(colors, lines, normalLengths, points);
  pinned[0] = true;
  pinned[size] = true;
  pinned[(size + 1) * (size + 1) - size - 1] = true;
  pinned[(size + 1) * (size + 1) - 1] = true;

  return {
    size,
    gravityVector,
    normalLengths,
    points,
    triangles,
    lines,
    connections,
    pinned,
    colors,
    pointWeight,
    connectionCoef,
    damping,
    prevPoints: points.slice(),
    calculateForces() {
      const gravityVector = this.gravityVector;
      const forces = [];
      for (let i = 0; i < points.length; i += 3) {
        const pointIndex = i / 3;
        const x = points[i];
        const y = points[i + 1];
        const z = points[i + 2];
        for (let j = 0; j < this.connections[pointIndex].length; j++) {
          const connection = this.connections[pointIndex][j];
          const x2 = points[connection.idx * 3];
          const y2 = points[connection.idx * 3 + 1];
          const z2 = points[connection.idx * 3 + 2];
          const dx = x2 - x;
          const dy = y2 - y;
          const dz = z2 - z;
          const [nx, ny, nz] = normalizeVector(dx, dy, dz);
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const force = dist - connection.normalLength;
          if (!forces[pointIndex]) {
            forces[pointIndex] = [0, 0, 0];
          }
          forces[pointIndex][0] +=
            nx * force * this.connectionCoef + gravityVector[0] * this.pointWeight;
          forces[pointIndex][1] +=
            ny * force * this.connectionCoef + gravityVector[1] * this.pointWeight;
          forces[pointIndex][2] +=
            nz * force * this.connectionCoef + gravityVector[2] * this.pointWeight;
        }
      }
      return forces;
    },
    step: function step(deltaTime) {
      // calculates verlet integration for each point
      const dt = deltaTime;
      const forces = this.calculateForces();
      const copyPointsBeforeChange = this.points.slice();

      // iterate over each point
      // for each point, calculate the new position
      for (let i = 0; i < points.length; i += 3) {
        const pointIndex = i / 3;
        if (this.pinned[pointIndex]) {
          continue;
        }
        const x = points[i];
        const y = points[i + 1];
        const z = points[i + 2];
        const oldX = this.prevPoints[i];
        const oldY = this.prevPoints[i + 1];
        const oldZ = this.prevPoints[i + 2];
        const force = forces[pointIndex];
        const newX = x + (1 - this.damping) * (x - oldX) + force[0] * dt * dt;
        const newY = y + (1 - this.damping) * (y - oldY) + force[1] * dt * dt;
        const newZ = z + (1 - this.damping) * (z - oldZ) + force[2] * dt * dt;
        points[i] = newX;
        points[i + 1] = newY;
        points[i + 2] = newZ;
      }
      this.prevPoints = copyPointsBeforeChange;
      calcualateColors(
        this.colors,
        this.lines,
        this.normalLengths,
        this.points
      );
    },
  };
}

function normalizeVector(x, y, z) {
  const length = Math.sqrt(x * x + y * y + z * z);
  return [x / length, y / length, z / length];
}

function calcualateColors(colors, lines, normalLengths, points) {
  for (let i = 0; i < lines.length; i += 2) {
    const point1 = lines[i];
    const point2 = lines[i + 1];
    const x = points[point1 * 3] - points[point2 * 3];
    const y = points[point1 * 3 + 1] - points[point2 * 3 + 1];
    const z = points[point1 * 3 + 2] - points[point2 * 3 + 2];
    const length = Math.sqrt(x * x + y * y + z * z);
    const red = clamp((length / normalLengths[i / 2] - 1) * 10, 0, 1);
    // colors.push(red, 0, 0, 1);
    colors[(i / 2) * 4] = red;
    colors[(i / 2) * 4 + 1] = 0;
    colors[(i / 2) * 4 + 2] = 0;
    colors[(i / 2) * 4 + 3] = 1;
  }
  return colors;
}

function getConnectionsMap(lines, normalLengths) {
  const connections = {};
  for (let i = 0; i < lines.length; i += 2) {
    const point1 = lines[i];
    const point2 = lines[i + 1];
    if (!connections[point1]) {
      connections[point1] = [];
    }
    if (!connections[point2]) {
      connections[point2] = [];
    }
    connections[point1].push({
      idx: point2,
      normalLength: normalLengths[i / 2],
    });
    connections[point2].push({
      idx: point1,
      normalLength: normalLengths[i / 2],
    });
  }
  return connections;
}

function generateClothTrianglesIndices(size) {
  const indices = [];
  // Iterate over each square in the plane
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Calculate the indices of the four corners of the square
      const a = j + i * (size + 1);
      const b = j + 1 + i * (size + 1);
      const c = j + (i + 1) * (size + 1);
      const d = j + 1 + (i + 1) * (size + 1);

      // Add the two triangles that make up the square
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  return indices;
}

function generateClothLineIndices(size) {
  const indices = [];

  // Iterate over each square in the plane
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      // Calculate the indices of the four corners of the square
      const a = j + i * (size + 1);
      const b = j + 1 + i * (size + 1);
      const c = j + (i + 1) * (size + 1);
      const d = j + 1 + (i + 1) * (size + 1);

      // Add the lines that make up the square of triangles
      indices.push(a, b);
      indices.push(b, c);
      indices.push(c, a);

      if (i === size - 1) {
        indices.push(c, d);
      }
      if (j === size - 1) {
        indices.push(b, d);
      }
    }
  }

  return indices;
}

function getNormalLengths(lines, points, lengthCoefficient) {
  const lengths = [];
  for (let i = 0; i < lines.length; i += 2) {
    const point1 = lines[i];
    const point2 = lines[i + 1];
    const x = points[point1 * 3] - points[point2 * 3];
    const y = points[point1 * 3 + 1] - points[point2 * 3 + 1];
    const z = points[point1 * 3 + 2] - points[point2 * 3 + 2];
    const length = Math.sqrt(x * x + y * y + z * z);
    lengths.push(length * lengthCoefficient);
  }
  return lengths;
}

export { generateClothModel };
