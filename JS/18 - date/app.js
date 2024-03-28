//* DATE METOTLARI

//dateler objedir

let tarih = new Date() // tarih oluşturuyo


console.log(tarih); // şu anki tarihi yazdırır


// get kendinden sonraki şeyi getiriyo mesela saati günü falan
console.log(tarih.getDate());
console.log(tarih.getHours());
console.log(tarih.getFullYear());
console.log(tarih.getMilliseconds());
console.log(tarih.getMonth()+1); // ocak ayı 0. ay olarak görünür +1 yaparsan yerine oturur.
console.log(tarih.toLocaleString());


// set yeni değer vermke için kullanılır.

console.log(tarih);
tarih.setDate(1) // günü değiştirdi 1 yaptı.
console.log(tarih); 


console.log(tarih.getHours()+2);


let dogumGünüm = new Date(1997,03,14,10,30,10)


console.log(dogumGünüm);