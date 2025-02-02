const button = document.getElementById('generate-btn')

function generate() {
    
    const body = document.querySelector('body');    
    const colorhexcontainer = document.getElementById('color-hex')

    colorhexcontainer.innerHTML = ''

    let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    
    let hexnumber = document.createElement('h2')
    hexnumber.innerText = "BG Color : " + randomColor
        
    colorhexcontainer.appendChild(hexnumber);
    body.style.backgroundColor = randomColor
}

button.addEventListener('click', generate)