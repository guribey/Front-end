//* ELEMENT OLUŞTURMA


// google butonu

const listGroup = document.querySelector(".list-group")
console.log(listGroup);


const link = document.createElement("a")

link.id = "goBlogWebSite"
link.className = "btn btn-success btn-md mt-1"
link.href = "http://www.google.com.tr"
link.target="_blank"
link.innerHTML=" Click for Google "


listGroup.appendChild(link)

console.log(link);

// youtube butonu

const button = document.createElement("a")
const cardBody = document.querySelectorAll(".card-body")[1]

button.id = "button"
button.className = "btn btn-danger btn-sm mt-3"
button.href = "http://www.youtube.com"
button.target = "_blank"
button.innerHTML = "<b>YouTube</b>"

cardBody.appendChild(button)

console.log(cardBody);
console.log(button);



// Liste satırı getirme

const todo = document.createElement("li")
todo.className = "list-group-item d-flex justify-content-between"
todo.innerHTML = "Todo 5"

const todoLink = document.createElement("a")
todoLink.href = "#"
todoLink.className = "delete-item"


const i = document.createElement("i")
i.className = "fa fa-remove"


todoLink.appendChild(i)
todo.appendChild(todoLink)


const todoList = document.querySelector(".list-group")
todoList.appendChild(todo)



//* ELEMENT SİLME

