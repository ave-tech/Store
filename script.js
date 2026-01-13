const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");

function card1() {
    item1.style.display = "block";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card2() {
    item1.style.display = "none";
    item2.style.display = "block";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card3() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "block";
    item4.style.display = "none";
    item5.style.display = "none";
}
function card4() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "block";
    item5.style.display = "none";
}
function card5() {
    item1.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    item4.style.display = "none";
    item5.style.display = "block";
}

const cd = document.getElementById("cd");
const bb = document.getElementById("bb");
const pw = document.getElementById("pw");

function cpw() {
    cd.style.display = "none";
    bb.style.display = "none";
    pw.style.display = "block";
}
function cbb() {
    cd.style.display = "none";
    bb.style.display = "block";
    pw.style.display = "none";
}
function ccd() {
    cd.style.display = "block";
    bb.style.display = "none";
    pw.style.display = "none";
}

function order() {
    document.getElementById("wf").style.display = "block";
    document.getElementById("clo").style.display = "block";
}
function ttp() {
    document.getElementById("wf").style.display = "none";
    document.getElementById("clo").style.display = "none";
}
