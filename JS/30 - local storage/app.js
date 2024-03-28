//* LOCAL STORAGE
// tarayıcı kapandığında silinmez

//kullanımı session storage ile aynı

localStorage.setItem("144","Güray")
localStorage.setItem("1","GüraY")
localStorage.setItem("14","Güri")
localStorage.setItem("14497","Güribey")


let value = localStorage.getItem("144")
console.log(value);


localStorage.removeItem("144")//değer silme
// localStorage.clear() 
// hepsini siliyo


let isim = ["Güray","Güri","Grüibey","GüraY"]

localStorage.setItem("isimler",JSON.stringify(isim))

let value2 = JSON.parse(localStorage.getItem("isimler"))

console.log(value2);

value2.forEach(function yaz(a) {
    console.log(a);
})