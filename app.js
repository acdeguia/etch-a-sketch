let container = document.querySelector('#container')
let numberOfSquare = 0;

let size = document.querySelector('#size')
const grid = document.getElementById('container')

function defaultGrid() {
    for(i = 0; i < 256; i ++){
        let div = document.createElement('div');
        div.className = 'grid-item';
        div.textContent = ''
        container.appendChild(div)
    }
}

function newGrid() {
    numOfSquares = prompt('number of squares per side: ')

    if(numOfSquares > 100) {
        alert('Number of square per side should be less than 100')
    }else{
        for(i = 0; i < numOfSquares * numOfSquares; i ++){

            let div = document.createElement('div');
            div.className = 'grid-item';
            div.textContent = ''
            container.appendChild(div)
        }
        document.getElementById("container").style.gridTemplateColumns = "repeat(" + numOfSquares + ", 1fr)";
    }
}

function clearGrid() {
    grid.innerHTML = ''
}

size.addEventListener('click', () => {
    clearGrid()
    newGrid()
})

defaultGrid()