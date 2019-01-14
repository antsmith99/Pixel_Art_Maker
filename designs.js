// Select size input
const submitButton = document.getElementById('sizePicker');
// Select color input
const colorSelector = document.getElementById('colorPicker');
// create a constant for the canvas that the grid is built on
const canvas = document.getElementById('pixelCanvas');
// set the default color to black
var fillColor = '#000000';

function makeGrid() {
  /* the makeGrid function clears the existing canvas and then inserts an empty grid container.  Then, rows and columns of boxes are added to the container to build the specified grid.*/
  var columns = 'grid-template-columns: ';//start of CSS style text for columns
  var height = submitButton.inputHeight.value;// variable height is defined from the form input
  var width = submitButton.inputWidth.value;// variable width is defined from the form input
  canvas.innerHTML = "" // reset the canvas to blank
  canvas.insertAdjacentHTML('beforeend','<div class="grid-container">');//this is blank container
  const grid = document.getElementsByClassName('grid-container');//constant defined for the grid
  for (var r = 1; r<= width; r++){
    columns += ' auto';
    }//for loop to append the CSS style 'auto'field for the grid container
  grid[0].setAttribute('style',columns);//sets the CSS style attribute, text built from the for loop
  for (var c = 1; c <= (width*height); c++){
    canvas.lastElementChild.insertAdjacentHTML('beforeend','<div class="grid-item" id="' + c + '"></div>');//another for loop to insert the HTML for the rows, with numbered id's
      }
  }
// These listeners trigger the grid build, color selection, and box fill
submitButton.addEventListener("submit",function (){makeGrid()},false)
colorSelector.addEventListener("change",function (assignColor){fillColor = colorSelector.value},false);
canvas.addEventListener('click',function(e){e.path[0].style.backgroundColor = fillColor},false)