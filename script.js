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
