let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountain3 = document.getElementById('mountains3')
let mountain4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let myname = document.querySelector('.myname')


window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value * 4 +'px'
    mountain3.style.top = value * 1.5  +'px'
    mountain4.style.top = value * 1.2  +'px'
    river.style.top = value +'px'
    boat6.style.top = value +'px'
    boat6.style.left = value * 3 +'px'
    myname.style.fontSize = value +'px'
    if(scrollY > 80){
        myname.style.fontSize = 80 +'px'
    }
    if(scrollY >= 90){
        document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'}
        else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'
        }
    }

