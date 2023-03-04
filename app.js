const container = document.querySelector('#container');
let numberOfSquare = 0;

const size = document.querySelector('#size');
const grid = document.getElementById('container');

const slider = document.getElementById('gridRange');
const output = document.getElementById('grid-size');
output.innerHTML = `${slider.value} x ${slider.value}`;

let mouseHold = false;
const parent = document.getElementById('container');
const square = parent.getElementsByClassName('grid-item');

slider.oninput = function () {
  output.innerHTML = this.value;
};


function mouseDown() {
  for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
    square[i].addEventListener('mousedown', (e) => {
      mouseHold = true;

      if (mouseHold) {
        mouseMove();
      }
    });
  }
}


// funtion for the default grid on load

function defaultGrid() {
  numberOfSquare = 256;
  for (let i = 0; i < numberOfSquare; i++) {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = '';
    container.appendChild(div);
  }
  mouseDown();
}

// funtion for changing the number of squares per side
function newGrid() {
  const numOfSquares = slider.value;

  if (numOfSquares > 100) {
    alert('Number of square per side should be less than 100');
  } else {
    for (let i = 0; i < numOfSquares * numOfSquares; i++) {
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.textContent = '';
      container.appendChild(div);
      document.getElementById('container').style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    }
    mouseDown();
  }
}

// function so the existing grid would be cleared when the button is clicked

function clearGrid() {
  grid.innerHTML = '';
}

// an event listener for the button
size.addEventListener('click', () => {
  clearGrid();
  newGrid();
});

function mouseMove() {
  for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
    square[i].addEventListener('mousemove', function (e) {
      this.className += ' active';
    });
  }
}

// function to highlight clicked box


// function active() {
//   for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
//     square[i].className += ' active';
//   }
// }

// function mouseUp() {
//   for (let i = 0; i < numberOfSquare * numberOfSquare; i++) {
//     square[i].addEventListener('mouseup', (e) => {
//       square[i].removeEventListener('mousedown', mouseDown);
//     });
//   }
// }

defaultGrid();
