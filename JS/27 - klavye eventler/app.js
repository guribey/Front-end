//* KLAVYE EVENTLERİ


document.addEventListener("keypress",run) //bastığında. "keyup" çektiğinde

function run(e) {
    console.log(e.type);    
    console.log(e.key); //hangi tuşa bastığını yazdırır
    console.log(e.keyCode); // kodu

}

// document.addEventListener("keydown",run1)
// function run1(e1) {
//     console.log(e1.keyCode);
//     e1.preventDefault()
    
// }

// "keydown hepsinde çalışıyo özel karaktere gerek duymadan"



const cardTitle = document.querySelectorAll(".card-title")[0]
const input = document.querySelector("#todoName")

input.addEventListener("keypress",run2)

function run2(e2) {
    cardTitle.textContent= e2.target.value
}


