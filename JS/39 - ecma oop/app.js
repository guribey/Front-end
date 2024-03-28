//* OBJECT ORIANTED PROGRAMING
// nesneye yönelik programlama


class Insan{    // sınıf

    /*
        1-Özellikler
        2-Yapıcı Metot
        3-Function
    */


    constructor(isim,soyisim,yas,burc){  //yapıcı metot
        this.isim = isim
        this.soyisim = soyisim
        this.yas = yas
        this.burc = burc
    }


    //fonksiyon
    bilgileriGoster(){
        console.log(`İsim: ${this.isim} Soyisim: ${this.soyisim} Yaş: ${this.yas} Burç: ${this.burc}`);
    }


}


//Nesne oluşturma
const insan1 = new Insan("Güray","Kesici",26,"Koç")
const insan2 = new Insan("Güri","bey",20,"Aries")
const insan3 = new Insan("Tommy","Vercetti","29","Aslan")
const insan4 = new Insan("Edward","Elric","15","Koç")

insan1.bilgileriGoster()
insan2.bilgileriGoster()
insan3.bilgileriGoster()
insan4.bilgileriGoster()