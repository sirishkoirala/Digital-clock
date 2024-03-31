// 12 hours format comming soon...

// for seconds
setInterval(letsec, 1000);
function letsec() {
    const a1 = new Date()
    const s1 = a1.getSeconds()
    document.getElementById("sec").innerHTML = s1;
}

// for minutes
setInterval(letmin, 0);
function letmin() {
    const a2 = new Date()
    const s2 = a2.getMinutes()
    document.getElementById("min").innerHTML = s2;
}

// for Hours
setInterval(lethour,0);
function lethour() {
    const a3 = new Date()
    const s3 = a3.getHours()
    document.getElementById("hour").innerHTML = s3;
}








