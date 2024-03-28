// FONSİYONLAR (METOTLAR)
// parantez aç kapat varsa fonksiyondur


function yazdir(){
    console.log("Güray")
}

yazdir()


function yazdir2() {
    console.log(99+999+9999);
}

yazdir2()
yazdir2()




// PARAMETRELİ


function yazdir3(isim,soyisim) {
    console.log(isim + " " + soyisim);
}

yazdir3("Güray","Kesici")
yazdir3("Lionel","Messi")




cube(3) // fonksiyonun altında ya da üstünde olması önemli değil
cube(5)


function cube(sayi) {
    console.log(sayi*sayi*sayi);
}

//-------------------------------

let yas = Number(prompt("yaş gir: "))


function kontrol(yas){
    if(yas>=18){
        console.log("ehliyet alırsın");
    }else{
        console.log("alamazsın");
    }
}

kontrol(yas)





// RETURN
// Değer döndüren ve döndürmeyen

// aynı isimli parametereler farklı fonksiyonların içinde kullanılabilir
// return bir parametreyi fonksiyonun doşona çıkarmak veya taşımak için kullanılır
// bir fonksiyonu bitiren anahtar kelime return.
// void : geriye değer döndermeyen demektir.
//* return'ün döndermiş olduğu değer fonksiyonun çağrıldığı yere bırakır
//* yani mealen parametrenin taşıdığı değeri fonksiyon nerede kullanıldıysa oraya yollar


let donenDeger = cube(2)
kareAl(donenDeger)

function kareAl(sayi) {
    let sonuc = sayi*sayi
    console.log(sonuc);
}

function cube(sayi) {

    let sonuc = sayi*sayi*sayi // buradan çıkan "sonuc"u donenDeger'e return ile gönderdik 
    return sonuc
    console.log("güray"); // returndan sonra yazılan hiçbir şey çalıştırılmaz
}



function yazdir4() {
    console.log("GüraY");
}

yazdir4()//geriye değer döndürmeyen fonksiyon. zaten void diyo.
