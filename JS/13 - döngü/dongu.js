// DÖNGÜLER. FOR DÖNGÜSÜ


// 1den 10a kadar yazdırma
for (let j = 1; j <= 10; j++) {

    console.log(j)
}


console.log("--------------") //konsol karışmasın diye
// 1den 10a kadar çift sayıları yazdırma
for (let i = 0; i <= 10; i = i + 2) {

    console.log(i)
}


console.log("--------------")
// 1den 10a kadar tek sayılar
for (let i1 = 1; i1 <= 10; i1 = i1 + 2) {

    console.log(i1)
}


console.log("--------------")
// farklı kelimleri sıra sıra yazdırma
for (let i2 = 0; i2 <= 10; i2++) {
    if (i2 % 2 == 1) {
        console.log("Güray")
    } else {
        console.log("Güri")
    }
}



console.log("--------------")
//50'den 1'e kadar gidip toplamlarını bulma

let toplam = 0
for (i3 = 50; i3 >= 1; i3--) {
    toplam += i3 // toplam = toplam + i
    console.log(i3)
    console.log("toplam: ", toplam) //döngüde olursa toplamı her adımda görürsün
}
console.log("toplam: ", toplam)





// WHILE DÖNGÜSÜ


console.log("--------------")
let sayac = 1

while (sayac <= 10) {
    console.log(sayac)
    sayac++
}




// 0dan 10a kadar çiftleri ve tekleri yazdırma
console.log("--------------")

let sayac1 = 0

while (sayac1 <= 10) {
    if (sayac1 % 2 == 0) { // buradaki 0'ı 1 yaparsan tekleri yazar
        console.log(sayac1)
        sayac1++
    } else {
        sayac1++
    }
}





// while true döngüsü
console.log("--------------")

let sayac2 = 0
while (true) {
    console.log(sayac2)
    if (sayac2 == 14) {
        break
    }
    sayac2++
}




// DO WHILE DÖNGÜSÜ
// koşulu sağlamıyosa bile 1 kere çalışır

console.log("--------------")

let sayac3 = 0

do {
    console.log(sayac3)
    sayac3++
} while (sayac3 <= 10);





console.log("--------------")

let sayac4 = 0
let toplam1 = 0

do {
    if (sayac4%2==0) {
        toplam1+= sayac4
    }
    sayac4++
} while (sayac4 <= 30);
console.log("toplam:", toplam1)





// ----------------------------- //

// BREAK VE CONTINUE
console.log("--------------")

let sayac5 = 0

while (sayac5 <= 10) {

    sayac5++

    if (sayac5>10) { //11'i yazdırmasın diye
        break
    }

    if (sayac5==8) { // 8'i atlaması için continue 
        continue
    }
    console.log(sayac5)    
}

/* continue kendisiyle döngünün bitişinin arasındaki kısmı 1 kere
çalıştırmadan devam etttirir. atlatır. */






// Çarpım tablosu
console.log("--------------")

for (let a1 = 1 ; a1 <= 10 ; a1++) {
    for(let b1 = 1 ; b1<= 10 ; b1++){

        console.log(a1+"x"+b1+ "=" +(a1*b1))
    }
console.log("--------------")
}






// Asal sayı bulma
console.log("--------------")

let deger = Number(prompt("sayiyi gir:"))
let kontrol = true

for (let i6 = 2; i6 < Math.floor(deger/2); i6++) {
    if (deger%i6==0) {
        kontrol = false
        break        
    }
}
if (kontrol) {
    console.log("sayi asal");
    
}else{
    console.log("asal degil");
}



// Faktöriyel bulma

let num = Number(prompt("sayı gir:"))
let carpim = 1

for(let i7 = 1 ; i7 <= num ; i7++){
    carpim = carpim*i7
}
console.log(carpim);



// Armstrong sayısı

console.log("-----------");

// x = sayı    y = toplam   z = rakam

let x = prompt("sayı gir: ")
let y = 0

for(let i8= 0 ; i8<x.length ; i8++){

    let z = x.charAt(i8)
    y += z*z*z
}

if (x==y) {
    console.log("bu sayı bir armstrong sayısıdır");
} else{
    console.log("değildir.");
}