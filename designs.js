const colorPicker = document.getElementById('colorPicker');// Allow the user to choose color
const rowsNumber = document.getElementById('inputHeight');// Allows the user to add a chosen value inside the input box to add rows 
const cellsNumber = document.getElementById('inputWidth');// Allows the user to add a chosen value inside the 2nd input box to add columns
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

form.addEventListener('submit', function(e) {
  pixelCanvas.innerHTML = '';
  e.preventDefault();// Prevents the grid to be deleted after it is create
  makeGrid();
})

pixelCanvas.addEventListener('click',function(e) {
    if (e.target.nodeName === 'TD'){
    e.target.style.backgroundColor = colorPicker.value;// Lets the chosen color on a click event to be added to the grid
  }
})


function makeGrid() {  // Creates the grid upon clicking the button 'Submit'

      for (let i = 0; i < rowsNumber.value; i++) { // This loop creates a row of cells
        const row = pixelCanvas.insertRow(0);

        for (let j = 0; j < cellsNumber.value; j++) {// This loop adds a cell after every row

          row.insertCell(0);
        }
     }
     }
    