const clock = document.querySelector('#clock')

//setinterval fxn humein ek code ko ek particular interval ke baad run krke deta h, here 1000ms
setInterval(function(){
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString()

}, 1000)