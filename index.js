let t = document.getElementById("t")
setInterval(function () {
    let now = new Date()
    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hour = now.getHours()
    console.log(hour, min, sec)
    if(hour<10){
        hour = "0" + hour
    }
    if(min<10){
        min = "0" + min
    }
    if(sec<10){
        sec = "0" + sec
    }
    t.innerHTML = hour + ":" + min + ":" + sec
}, 100)