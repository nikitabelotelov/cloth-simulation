/**
 * Gets the simulation parameters from the UI.
 * @param {Object} parameters - The default simulation parameters.
 * @returns {Object} The updated simulation parameters.
 */
function getParametersFromUI(parameters) {
  const sizeInput = document.getElementById("size-input");
  const lengthCoefficientInput = document.getElementById(
    "length-coefficient-input"
  );
  const pointWeightInput = document.getElementById("point-weight-input");
  const connectionCoefInput = document.getElementById("connection-coef-input");
  const dampingInput = document.getElementById("damping-input");

  parameters.size = parseInt(sizeInput.value);
  parameters.lengthCoefficient = parseFloat(lengthCoefficientInput.value);
  parameters.pointWeight = parseFloat(pointWeightInput.value);
  parameters.connectionCoef = parseFloat(connectionCoefInput.value);
  parameters.damping = parseFloat(dampingInput.value);

  return parameters;
}

export { getParametersFromUI };
