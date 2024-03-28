//  DIALOG KUTULARI   //


//   ALERT    --    PROMPT     --     CONFIRM


// alert("Noldu şaşırdın mı?")  // yorum satırından çıkararak dene
// pop up veriyo.

//window içinde tanımlanan özellikler başına window yazmadan da kullanılabilir.

let isim = prompt("Adını yaz ama kalbime:")
let soyisim = prompt("Soyadın:")

// kullanıcılardan alınan değerler her zaman string döner.

console.log("isim: " + isim)
console.log("soyisim: " + soyisim)



//confirm boolean bir cevap veriyo.
let sonuc = confirm("mesela silmek istediğine emin misin?")
console.log(sonuc)


