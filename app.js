let container = document.querySelector('#container')
let numberOfSquare = 0;

let size = document.querySelector('#size')
const grid = document.getElementById('container')

//funtion for the default grid on load

function defaultGrid() {
    numberOfSquare = 256;
    for(let i = 0; i < numberOfSquare; i ++){
        let div = document.createElement('div');
        div.className = 'grid-item';
        div.textContent = ''
        container.appendChild(div)
    }
    active()
}

//funtion for changing the number of squares per side
function newGrid() {
    numOfSquares = prompt('number of squares per side: ')

    if(numOfSquares > 100) {
        alert('Number of square per side should be less than 100')
    }else{
        for(let i = 0; i < numOfSquares * numOfSquares; i ++){
            let div = document.createElement('div');
            div.className = 'grid-item';
            div.textContent = ''
            container.appendChild(div)
            document.getElementById("container").style.gridTemplateColumns = "repeat(" + numOfSquares + ", 1fr)";
        }
        active()
    }
}

//function so the existing grid would be cleared when the button is clicked

function clearGrid() {
    grid.innerHTML = ''
}

// an event listener for the button 
size.addEventListener('click', () => {
    clearGrid()
    newGrid()
})

// function to highlight clicked box

let parent = document.getElementById('container')
let square = parent.getElementsByClassName('grid-item')

function active(){
    
    for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
        square[i].addEventListener('mousedown', function(e) {
            this.className += " active";  

            square[i].onmousemove = function(e) {
                mouseMove()
            }
        });
        square[i].addEventListener('mouseup', function(e){
            square[i].onmousemove = null
        })
    }

}

function mouseMove() {

    for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
        square[i].addEventListener('mousemove', function(e){
            this.className += " active"; 
        })
    }
}

// function active(){
    // let parent = document.getElementById('container')
    // let square = parent.getElementsByClassName('grid-item')

//     for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
//         square[i].onmousedown = function(e) {
            
//             if(square[i].onmousedown){
//                 mouseMove()    
//             }
//         }
//     }
// }


// function mouseMove() {
//     let parent = document.getElementById('container')
//     let square = parent.getElementsByClassName('grid-item')

//     for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
//         square[i].addEventListener('mousemove', function(e){
//             this.className += " active"; 
//         })
//     }
//     mouseUp()
// }

// function mouseUp() {
//     let parent = document.getElementById('container')
//     let square = parent.getElementsByClassName('grid-item')

//     for(let i = 0; i < numberOfSquare*numberOfSquare; i++){
//         square[i].addEventListener('mouseup', function(e){
//             this.className += "rainbow"
//         })
//     }
// }


defaultGrid()