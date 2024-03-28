//* EVENTLER

// html kodlarındaki 60. satıra bak. onclick kullanarak bi icraat var.


function changeTitle1() {
    document.querySelectorAll('.card-title')[1].textContent="Güribey"
}


//!------------------------------------------------
// const clearButton = document.querySelector("todoClearButton")

// clearButton.addEventListener("click",changeTitle)

// function changeTitle(e) {
//     document.querySelectorAll('.card-title')[1].textContent="Tekrar Tekrar Tekrar ve Tekrar Değişti"
    
// }
//!------------------------------------------------


// sayfa yüklendiğinde çalıştırılsın
document.addEventListener("DOMContentLoaded", run)

function run() {
    console.log("sayfa yüklendi")
}

// aynısının windowlu ve loadlı olanı
window.addEventListener("load", run)

function run() {
    console.log("üstündesin")
}
function run1() {
    console.log("dışındasın")
}
function run2() {
    console.log("özel olarak üstündesin")
}
function run3() {
    console.log("dışına çıktın")
}


const cardBody = document.querySelectorAll(".card-body")[1]

const cardTitle = document.querySelectorAll("card-title")[1]



cardBody.addEventListener("mouseover",run)
cardBody.addEventListener("mouseout",run1)

cardBody.addEventListener("mouseenter",run2)
cardBody.addEventListener("mouseleave",run3)