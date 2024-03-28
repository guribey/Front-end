// DİZİ - ARRAY

// JavaScript'te aynı dizi içerisinde farklı türde değişkenler tanımlanabilir.


/* JavaScriptte metot kullanımı için array metotları
ya da dizinin metotları falan yazıp aratıp bakılablir. bu kar çok metodu
yazmaya da ezberlemeye de gerek yok. mesela pop shift reverse length filan.*/






let sayilar = [1,2,3,4,5,6,7,8,9,0]

console.log(sayilar); // Dizinin içindeki elemanlar konsolun solunda bulunan kulakçığa basıp görüntülenebilir
console.log(sayilar[1]); //saymaya 0. indexten başlar 1 değil
// 1. indexi yazdır diyince konsola 2 yazdırır.

let oylesine = ["schumacher",1,true,"ferrari",123,"123"]
console.log(oylesine[0],oylesine[1],oylesine[2],oylesine[3],oylesine[4],oylesine[5],oylesine[6]);
//bulunmayan bir indexi yazdırmaya çalışırsan undefined der.

let rakam = [0,1,2,3,4,5,6,7,8,9]

rakam[10]=99 //10. indexi değiştirip 99 yapıyor

console.log(rakam[10]);

// böyle tek tek uğraşmaktansa array uzunluğı -1 yapıp tek tek saymadan da değiştirlebilir.
rakam[rakam.length-2] = 88
console.log(rakam[9]);


let ornek1 = ["Güray","Kesici"]
let ornek2 = new Array("Güray", "Kesici")
// ornek1 ve ornek2 aynı şeyler. iki türlü de dizi danımlanabilir.
console.log(ornek1 + " = " + ornek2);




// FOREACH Döngüsü

let isimler = ["Güray","Güra","Gür","Güri","Gü","G"]

isimler.forEach(function(index) {
    console.log(index);
})


// bu foreach döngüsüyle aşağıdaki for ve while döngüsü aynı şeyi yapıyo

for(let i = 0 ; i<isimler.length ; i++){
    console.log(isimler[i]);
}



let sayac = 0
 
while (sayac<isimler.length) {
        console.log(isimler[sayac]);
        sayac++
}



/// METOTLAR

let arabalar = ["ferrari","mclaren","lambo","toyota","maserati"]
console.log(arabalar);

arabalar.push("aston martin")
console.log(arabalar);

// dizi.push yapmak dizinin sonuna eleman ekliyo. diğer örnekler de bu tarz

let diziUzunluk = arabalar.length
console.log(diziUzunluk);

arabalar.unshift("alfa romeo")
console.log(arabalar);


let silinenEleman = arabalar.pop()
console.log(arabalar);
console.log(silinenEleman);



let silinenEleman2 = arabalar.shift()
console.log(arabalar);
console.log(silinenEleman2);



arabalar.splice(2,2,"supra")
console.log(arabalar);



let stringArabalar = arabalar.toString()
console.log(stringArabalar);



let stringArabalarJoin = arabalar.join("'.'.'")
console.log(stringArabalarJoin);



let telefon = ["samsung","apple"]
let birlesim = arabalar.concat(telefon) //dizileri birleştiriyo
console.log(birlesim);



let bolunenDizi = arabalar.slice(2,4)
console.log(bolunenDizi);



arabalar.reverse()
console.log(arabalar);




//stringi diziye çevirme
let kisiler = "messi,ronaldo,neymar,mbappe,suarez"
console.log(kisiler);
let kisilerDizi = kisiler.split(",")
console.log(kisilerDizi);



// dizinin içinde aradığın elemanın olup olmadığını söylüyo
let icermek = arabalar.includes("ferrari")
console.log(icermek);