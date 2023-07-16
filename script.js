
// block of code that generates the random color in a hexcode format and returns it
const randomColorGenerator = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalID // delcaration of intervalID in a global scope
// function that starts the color change via a setInterval method
const startChangingColor = function() {
    if(!intervalID){ // if intervalID is set to null then this will not be executed
        intervalID = setInterval(changeColor, 1000)
    }
    
    // function which sets the style of the body by assigning its background-color the random hexCodes
    function changeColor() {
        document.body.style.backgroundColor = randomColorGenerator();
    }
}

// function to stop the change of colors
const stopChangingColor = function() {
    clearInterval(intervalID)
    intervalID = null // is set to null so that the function is not overriden due to multiple clicks on the start button
}

const resetBackgroundColor = function() {
    document.body.style.backgroundColor = '#FFFFFF';
    clearInterval(intervalID)
    intervalID = null
}

document.getElementById('start').addEventListener('click', startChangingColor) // starts changing the color

document.getElementById('stop').addEventListener('click', stopChangingColor) // stops the changing of colors

document.getElementById('reset').addEventListener('click', resetBackgroundColor) // stops the changing of colors