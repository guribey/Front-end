//* STATIC ANAHATARI
// statiklere sınıf ismi üzerinden erişilir
// statik olmayanlara nesne üzerinden erişilir

class Matematik{

    topla(a,b){
        console.log(a+b);
    }
    cikar(a,b){
        console.log(a-b);
    }
    static carp(a,b){ //! statik olarak tanımlama
        console.log(a*b);
    }
    static bol(a,b){ //! statik olarak tanımlama
        console.log(a/b);
    }
}



const matematik = new Matematik()
matematik.topla(10,5)

Matematik.bol(10,5)






































