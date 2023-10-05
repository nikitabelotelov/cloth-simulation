import { initShaderProgram, getProgramInfo } from "./shaders.js";
import { drawScene } from "./drawSquare.js";
import { initBuffers } from "./initBuffers.js";
import { generateClothModel } from "./model.js";

const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

const fsSource = `
  varying lowp vec4 vColor;

  void main(void) {
    gl_FragColor = vColor;
  }
`;

function main() {
  let deltaTime = 0;
  let then = 0;
  let squareRotation = 0.0;
  let movement = true;
  const sectorNumber = 16;
  const centerPointZ =
    Math.floor(((sectorNumber + 1) * (sectorNumber + 1)) / 2) * 3 + 2;

  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");
  const gravity = [0, 0, -9.8];
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo = getProgramInfo(gl, shaderProgram);
  const model = generateClothModel(sectorNumber, -1, 1, gravity, 1);
  const modelTriangles = { points: model.points, indices: model.triangles };
  const modelLines = {
    points: model.points,
    indices: model.lines,
    colors: model.colors,
  };

  document.querySelector("#gravity").addEventListener("change", (e) => {
    model.gravityVector = e.target.checked ? gravity : [0, 0, 0];
  });

  document.querySelector("#movement").addEventListener("change", (e) => {
    movement = e.target.checked;
  });

  function render(now) {
    now *= 0.001; // convert to seconds
    deltaTime = (now - then);
    then = now;
    // model.points[0]
    if (movement) {
      model.points[centerPointZ] = Math.sin(now * 3) / 10;
    }
    model.step(deltaTime);
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // Draw triangles
    let buffers = initBuffers(gl, modelTriangles, gl.TRIANGLES);
    drawScene(
      gl,
      programInfo,
      buffers,
      squareRotation,
      modelTriangles,
      gl.TRIANGLES
    );
    // Draw lines
    buffers = initBuffers(gl, modelLines, gl.LINES);
    drawScene(gl, programInfo, buffers, squareRotation, modelLines, gl.LINES);
    squareRotation += deltaTime * 10;

    setTimeout(() => render(new Date().getTime()), 10);
  }

  setTimeout(() => {
    then = new Date().getTime() * 0.001;
    render(new Date().getTime());
  }, 10);
}

export { main };
