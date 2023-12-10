const form = document.querySelector('form')

//if we access height and weight here then we will get their empty values beacuse hum submit event se pehle hi values access krn chah rhe hai

form.addEventListener('submit', function(e){
    e.preventDefault();     // preventing the default action of submitting the values for a sometime

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `please give a valid height`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `please give a valid weight`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)

        //showing the result
        results.innerHTML = `<span>${bmi}</span>`
    }
    


})