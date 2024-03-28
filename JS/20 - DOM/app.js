// DOM - Document Object Model


console.log(window);


console.log(window.location.port);

console.log(window.location.host);

console.log(window.location.href);

console.log(window.location.pathname);

console.log(window.location.hostname);


console.log(document.characterSet);

console.log(document.title);

console.log(document.timeline);

console.log(document.links);



//* ----- ---- SELECTORS ------------


console.log(document.getElementById("todoAddButton"));

const button = document.getElementById("todoAddButton")
console.log(button.id);


console.log(button.className);
console.log(button.getAttribute("id"));
console.log(button.getAttribute("class"));
console.log(button.classList);
console.log(button.classList[3]);

console.log(button.textContent);
console.log(button.innerHTML);

button.textContent="<b>Todo ekleyin</b>" // siteden butona bak
// button.innerHTML="<b>Todo ekleyin</b>"



console.log("------------------");

//classa göre

const todoList = document.getElementsByClassName("card")
console.log(todoList);


//etiket ismine göre


console.log("-------------------------");


const forms = Array.from(document.getElementsByTagName("form"))

forms.forEach(function(form){
    console.log(form);
})
console.log(forms);



console.log(document.getElementsByTagName("class"));

console.log("----------");
const li = document.getElementsByTagName("li")
console.log(li);



// getElementById - getElementByClassName - getElementByTagName

// querySelector - querySelectorAll

//* querySelector ile seçerken id için # kullanılır class için . kullanılır etiket seçersen

const clearButton = document.querySelector("#clearButton")
console.log(clearButton); 

console.log(document.querySelector(".list-group"));

console.log("////////");

console.log(document.querySelector(".list-group-item"));
console.log(document.querySelectorAll(".list-group-item"));
console.log(document.querySelectorAll(".list-group-item")[0]);
console.log(document.querySelectorAll(".list-group-item(odd)"));
console.log(document.querySelectorAll(".list-group-item(even)"));



console.log(document.querySelector("ul"));