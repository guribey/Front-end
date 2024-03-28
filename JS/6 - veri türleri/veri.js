/* 

veri tipleri

string : harf text. tırnak içinde. 2 string toplanırsa birleşir.
number : sayı
boolean : true false 
null  :  boş. sonradan doldurabilir veri yaratıyo.
undefined : değişken oluşturulmuş ama tanımlanmamış veri
object : birçok içerik barındırır.
function : 

*/

let isim = "Güray" //string
console.log(typeof isim)


let sayi = 1 //number
console.log(typeof sayi)


console.log(10>1) //boolean. true false.


let a = null  // null
a = 1
console.log(a)


let b //undefined
console.log(b)


let sporcu = {  //object. virgüle dikkat.
    isim : "Güray",
    kilo : "65",
    branş : "atletizm"
}
console.log(sporcu)


let dizi = [1,2,3,4,5,6]    //object
console.log(dizi)


let func = function(){ //function
    console.log("Güray")
}
func()

console.log(typeof func)
