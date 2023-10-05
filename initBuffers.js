function initBuffers(gl, model, type) {
  const positionBuffer = initPositionBuffer(gl, model);

  const colorBuffer = initColorBuffer(gl, model, type);

  const indexBuffer = initIndexBuffer(gl, model);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}

function initPositionBuffer(gl, model) {
  // Create a buffer for the square's positions.
  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = model.points;

  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.DYNAMIC_DRAW);

  return positionBuffer;
}

function initColorBuffer(gl, model, type) {
  var colors = [];

  if (type === gl.LINES) {
    for (var j = 0; j < model.colors.length; j += 4) {
      colors.push(
        model.colors[j],
        model.colors[j + 1],
        model.colors[j + 2],
        model.colors[j + 3]
      );
    }
  }

  if (type === gl.TRIANGLES) {
    for (var j = 0; j < model.indices.length; j++) {
      colors = colors.concat([1.0, 1.0, 1.0, 1.0]);
    }
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.DYNAMIC_DRAW);

  return colorBuffer;
}

function initIndexBuffer(gl, model) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  const indices = model.indices;

  // Now send the element array to GL

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return indexBuffer;
}

export { initBuffers };
