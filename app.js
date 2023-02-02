let container = document.querySelector('#container')

for(i = 0; i < 256; i ++){
    let div = document.createElement('div');
    div.className = 'grid-item';
    div.textContent = ''

    container.appendChild(div)
}


    