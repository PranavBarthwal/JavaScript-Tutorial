const button = document.querySelectorAll('.button') 
const body = document.querySelector('body')

button.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'grey'){            // e.target.id gives the id of the button that has been clicked which we have given as color names
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){           
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){           
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'yellow'){           
            body.style.backgroundColor = e.target.id
        }

    })

})