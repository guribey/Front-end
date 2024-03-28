//* input eventler

const todo =  document.querySelector("#todoName")

console.log(todo);

todo.addEventListener("focus",run)
todo.addEventListener("blur",run)
todo.addEventListener("copy",run)
todo.addEventListener("paste",run)
todo.addEventListener("cut",run)
todo.addEventListener("select",run)

function run(e) {
    console.log(e.type);
    
}

/*

focus : inputun içine girince
blur : inputun içinden çıktığında
copy : inputtaki bir değeri kopyalarsan
paste : inputa bir değer yapıştırırken
cut : inputtan bi değeri keserken
select : inputta bir değeri seçersen



*/