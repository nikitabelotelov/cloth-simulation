import { initShaderProgram, getProgramInfo } from "./shaders.js";
import { drawScene } from "./drawSquare.js";
import { initBuffers } from "./initBuffers.js";
import { generateClothModel } from "./model.js";
import { vsSource, fsSource } from "./shaderSource.js";

const SIM_DELTA_TIME = 0.001;
const SEGMENT_NUMBER = 20;

function main() {
  let simCalls = 0;
  let deltaTime = 0;
  let prevTimeRender = 0;
  let squareRotation = 0.0;
  let movement = true;
  const centerPointZ =
    Math.floor(((SEGMENT_NUMBER + 1) * (SEGMENT_NUMBER + 1)) / 2) * 3 + 2;

  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");
  const gravity = [0, 0, -100.8];
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo = getProgramInfo(gl, shaderProgram);
  const model = generateClothModel(SEGMENT_NUMBER, -1, 1, gravity, 1);
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
    deltaTime = (now - prevTimeRender);
    prevTimeRender = now;
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

    setTimeout(() => render(new Date().getTime()), 32);
  }

  function runSim(deltaTime) {
    simCalls++;
    if (movement) {
      model.points[centerPointZ] = Math.sin(simCalls / 800) / 2;
    }
    model.step(deltaTime);
  }

  function runSimSeveralSteps(count) {
    for (let i = 0; i < count; i++) {
      runSim(SIM_DELTA_TIME);
    }
  }

  setTimeout(() => {
    prevTimeRender = new Date().getTime() * 0.001;
    render(new Date().getTime());
  }, 10);

  setInterval(() => {
    runSimSeveralSteps(15)
  }, 1);
}

export { main };
