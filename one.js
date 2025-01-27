let currentdisplay = "";

// Append value to display
function appendToDisplay(value) {
  currentdisplay += value;
  document.querySelector("#display").value = currentdisplay;
}

// Clear the display
function clearAll() {
  currentdisplay = "";
  document.querySelector("#display").value = currentdisplay;
}

// Delete the last character
function deleteLast() {
  currentdisplay = currentdisplay.slice(0, -1);
  document.querySelector("#display").value = currentdisplay;
}

// Calculate the result
function calculate() {
  try {
    currentdisplay = eval(currentdisplay);
    document.querySelector("#display").value = currentdisplay;
  } catch {
    document.querySelector("#display").value = "Error";
  }
}

// Calculate square root
function calculateSquareRoot() {
  try {
    currentdisplay = Math.sqrt(eval(currentdisplay));
    document.querySelector("#display").value = currentdisplay;
  } catch {
    document.querySelector("#display").value = "Error";
  }
}

// Calculate square
function calculateSquare() {
  try {
    currentdisplay = Math.pow(eval(currentdisplay), 2);
    document.querySelector("#display").value = currentdisplay;
  } catch {
    document.querySelector("#display").value = "Error";
  }
}
