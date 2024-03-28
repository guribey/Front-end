//* session storage
// tarayıcı kapandığında silinir.
//setItem() kullanıyosun

sessionStorage.setItem("144","Güray")
sessionStorage.setItem("1","GüraY")
sessionStorage.setItem("14","Güri")


//temizleme
sessionStorage.removeItem("14")
// sessionStorage.clear()

let value = sessionStorage.setItem("001","Güribey")
console.log(typeof value); // type string oluyo




// Session Storage Array Yazdırma

let isim = ["Güray","Güri","Grüibey","GüraY"]

sessionStorage.setItem("isimler", isim)

let value2 = sessionStorage.getItem("names")
console.log(value2);
console.log(typeof value2); // array verdik string aldık





//bu da array gibi verip array gibi alma. JSON.parse
let isim3 = ["Güray","Güri","Grüibey","GüraY"]

sessionStorage.setItem("isim3", JSON.stringify(isim3)) //bu string tipinde değil array tipinde storagee gitmesini sağlıyo

let value3 = JSON.parse(sessionStorage.getItem("isim3"))
console.log(value3);


value3.forEach(function name(a){
    console.log(a); 
})



