import { initShaderProgram, getProgramInfo } from "./shaders.js";
import { drawScene } from "./drawSquare.js";
import { initBuffers } from "./initBuffers.js";
import { generateClothModel } from "./model.js";
import { vsSource, fsSource } from "./shaderSource.js";
import { getParametersFromUI } from "./ui.js";

const SIM_DELTA_TIME = 0.001;
const GRAVITY = [0, 0, -100.8];
let stopSim = null;

let modelParameters = {
  size: 20,
  min_coord: -1,
  max_coord: 1,
  gravityVector: GRAVITY,
  lengthCoefficient: 1,
  pointWeight: 0.00005,
  connectionCoef: 30,
  damping: 0.001,
};

let simCalls = 0;
function runSim(model, deltaTime, movement) {
  const centerPointZ =
    ((model.size + 1) * Math.floor((model.size + 2) / 2) +
      Math.floor((model.size + 1) / 2)) *
      3 +
    2;
  simCalls++;
  if (movement) {
    model.points[centerPointZ] = Math.sin(simCalls / 1000) / 2.5;
  }
  model.step(deltaTime);
}

function runSimSeveralSteps(model, count, movement) {
  for (let i = 0; i < count; i++) {
    runSim(model, SIM_DELTA_TIME, movement);
  }
}

function main() {
  let prevTimeRender = 0;
  let squareRotation = 0.0;
  let movement = true;
  let renderTimeoutId = null;

  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");
  const gravity = [0, 0, -100.8];
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo = getProgramInfo(gl, shaderProgram);
  const model = generateClothModel(modelParameters);
  const modelTriangles = { points: model.points, indices: model.triangles };
  const modelLines = {
    points: model.points,
    indices: model.lines,
    colors: model.colors,
  };

  function gravityHandler(e) {
    model.gravityVector = e.target.checked ? gravity : [0, 0, 0];
  }

  function movementHandler(e) {
    movement = e.target.checked;
  }

  document.querySelector("#gravity").addEventListener("change", gravityHandler);
  document
    .querySelector("#movement")
    .addEventListener("change", movementHandler);

  function render(now) {
    now *= 0.001; // convert to seconds
    const deltaTime = now - prevTimeRender;
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

    renderTimeoutId = setTimeout(() => render(new Date().getTime()), 32);
  }

  renderTimeoutId = setTimeout(function renderIntervalCallback() {
    prevTimeRender = new Date().getTime() * 0.001;
    render(new Date().getTime());
  }, 10);

  const intervalId = setInterval(function modelStepIntervalCallback() {
    runSimSeveralSteps(model, 30, movement);
  }, 5);

  stopSim = function () {
    renderTimeoutId && clearTimeout(renderTimeoutId);
    intervalId && clearInterval(intervalId);
    document
      .querySelector("#gravity")
      .removeEventListener("change", gravityHandler);
    document
      .querySelector("#movement")
      .removeEventListener("change", movementHandler);
  };
}

document.querySelector("#run-button").addEventListener("click", () => {
  stopSim?.();
  document.querySelector("#gravity").checked = true;
  document.querySelector("#movement").checked = true;
  modelParameters = getParametersFromUI(modelParameters);
  main();
});
