const hourEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondeEl = document.getElementById('seconds')
const counter = document.getElementById('counter')
let totalsecond = 489

function countdown (){
    totalsecond -= 1;
    const hours = Math.floor(totalsecond / 3600 ) % 24
    const minutes = Math.floor(totalsecond / 60) % 60
    const second = Math.floor(totalsecond % 60)
    hourEl.innerHTML = time(hours);
    minsEl.innerHTML = time(minutes);
    secondeEl.innerHTML = time(second); 
}
function time(time){
    if(time < 10){
        return `0${time}`
    }else{
        return time
    }
}

setInterval(countdown, 1000)
setInterval(() => {
    if (parseInt(counter.innerText) <= 777) {
        counter.innerText = parseInt(counter.innerText) + Math.floor((Math.random() * 5) + 1)
    }
}, 3500)