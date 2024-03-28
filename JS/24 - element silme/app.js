//* ELEMENT SİLME

const todoList = document.querySelector(".list-group")
const todos = document.querySelectorAll(".list-group-item")

console.log(todos);

todos[0].remove() //* Todo 1 gitti 
todos[1].remove() //* Todo 2 gitti

todos[todos.length-1].remove() //* sonuncu Todo gitti

//-------------- 2. yol ----------------
// anneden gelerek silme removeChild

todoList.removeChild(todos[2]) //* Todo 3 gitti
//* todoList.removeChild(todoList.lastElementChild) // farkı bi yol daha 