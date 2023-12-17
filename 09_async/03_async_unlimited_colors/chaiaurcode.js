// generating a random color

//rgb(0, 0, 0)

const changeBG =  function(){
    let rand1 = parseInt((Math.random() * 255))
    let rand2 = parseInt((Math.random() * 255))
    let rand3 = parseInt((Math.random() * 255))

    const Color = `rgb(${rand1},${rand2},${rand3})`
    document.body.style.backgroundColor = Color
}


let intervalID;

document.querySelector('#start').addEventListener('click', function(){
    intervalID = setInterval(changeBG, 1000)
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalID)
    intervalID = null
})
