//* ELEMENTLERDE GEZİNME

const todo = document.querySelector(".list-group-item")

const todoList = document.querySelector(".list-group")

const todoCard = document.getElementsByClassName("card")



//! anneden çocuklara


let value

// indexlere göre getirtme
value = todoList.children
value = todoList.children[0]
value = todoList.children[3]
value = todoList.children[todo.children.length-1]

//indexin adınu değiştirme
value = todoList.children[3].textContent = "Değişti"



//araye çevirip üstlerinde gezme
value = Array.from(todoList.children)
value.forEach(function(todo){console.log(todo.textContent);})

console.log(value);
console.log("---------------");


//! çocuktan anneye


let value2

value2 = todo.parentElement.parentElement.parentElement // annesinin annesi
value2 = value2.parentElement.parentElement.parentElement.parentElement // html'e kadar annesine gittik.


console.log(value2);
console.log("---------------");


//! kardeşler arasında gezme

let value3

value3 = todo.nextElementSibling.nextElementSibling.nextElementSibling
// öncekini seçmek istiyosan previous yaparak yapıyosun


console.log(value3);
console.log("------------");





//* örnek: rowdan başlayıp todo başlığını değişmeye gitme


const row = document.querySelector(".row")

value4 = row.children[0].children[3].children[0].textContent="isim değiştirildi ımyeh"


console.log(value4);
console.log("--------------");



//* örnek2 : 3. todonun adını rengini cartını curtunu değitşrime

const container = document.querySelector(".container")

value5 = container.children[0].children[0].children[3].children[2].children[2]

value5.textContent = "Görev Başarılı"
value5.style.color = "navy"
value5.style.backgroundColor = "yellow"
value5.style.



console.log(value5);


