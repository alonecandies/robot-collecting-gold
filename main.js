const fs = require("fs");

// Function to read and split the input file
function readDataFromInputFile(inputFileName) {
  let data = fs.readFileSync(inputFileName, "utf-8", (err, data) => {
    if (err) {
      writeDataToOutputFile("output.txt", err, err);
      return;
    }
    return data;
  });
  return data.split("\n");
}

// Function to write the output to the output file
function writeDataToOutputFile(outputFileName, data, error) {
  if (error) {
    fs.writeFileSync(outputFileName, error.toString());
  } else fs.writeFileSync(outputFileName, data.toString());
}

let input = readDataFromInputFile("input.txt");

// Split input to variables
let [height, width] = input[0].split(" ").map(Number);
let matrix = input
  .slice(1, input.length - 2)
  .map((row) => row.split(" ").map(Number));
let [X, Y] = input[input.length - 2].split(" ").map(Number);
let command = input[input.length - 1].split("");

// Initialize total gold collected by robot and error message
let totalGoldCollected = 0;
let errorMessage = "";
if (matrix.length < height || matrix[0].length < width) {
  errorMessage = "Invalid 2D world";
} else if (X >= height || Y >= width || X < 0 || Y < 0) {
  errorMessage = "Invalid original position";
} else {
  totalGoldCollected = matrix[X][Y];
  matrix[X][Y] = 0;
}

// Loop through the commands and make robot actions
while (command.length > 0) {
  let currentCommand = command.shift();
  if (errorMessage) {
    break;
  }
  switch (currentCommand) {
    case "U":
      X--;
      break;
    case "D":
      X++;
      break;
    case "L":
      Y--;
      break;
    case "R":
      Y++;
      break;
    default:
      errorMessage = `"${currentCommand}" is invalid command!`;
      break;
  }
  if (X >= height || Y >= width || X < 0 || Y < 0) {
    totalGoldCollected = 0;
    break;
  }
  totalGoldCollected += matrix[X][Y];
  matrix[X][Y] = 0;
}

writeDataToOutputFile("output.txt", totalGoldCollected, errorMessage);
