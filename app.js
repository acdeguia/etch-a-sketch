// let container = document.querySelector('#container')
 

// for(i = 0; i < 257; i ++){
//     let div = document.createElement('div');
//     div.setAttribute('id','grid-item')
//     div.textContent = ''
//     container.appendChild(div)
// }

let container = document.querySelector('#container')


let size = document.querySelector('#size')

function clearInput(){
      if (numOfSquares.value !="") {
         numOfSquares.value = "";
      }
}

size.addEventListener('click', () => {

   

    numOfSquares = prompt('number of squares per side: ')
    
    for(i = 0; i < numOfSquares * numOfSquares; i ++){
        let div = document.createElement('div');
        div.className = 'grid-item';
        div.textContent = ''
    
        container.appendChild(div)
    }
    document.getElementById("container").style.gridTemplateColumns = "repeat(" + numOfSquares + ", 1fr)";

    clearInput();
})

