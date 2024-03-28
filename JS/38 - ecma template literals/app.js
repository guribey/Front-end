//* TEMPLATE LITERALS
// stringleri basit şekilde birleştirmek için kullanacağımız bir yöntem


function write(firstName,lastName) {
    console.log("firstname: " + firstName + " " + "lastName: " + lastName);
}

write("Güray","Kesici")

//şimdi bunu daha kısayoldan yapalım


function easyWrite(isim,soyisim) {
    console.log(`İsim: ${isim} Soyisim: ${soyisim}`);
}
// değişkenler dolar işaretinden sonra süslü parantez içine yazılıyor
easyWrite("Güray","Kesici")

// görüldüğü gibi template literals ile gayet basit arka arkaya ne istersen yazıp sıralıyosun.


console.log(`template literals boşluğa da duyarlı enterla aşağı inmeye de
görüyo musun
taba basınca bırakılan boşluğa da duyarlı
          hemen
          hemen
          her   şeye
          duyarlı`);
          