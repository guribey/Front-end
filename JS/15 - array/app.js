// arama uygulaması

let urun1 = {
    isim: "dell 7577",
    fiyat: 15000,
    islemci: "i5"
}
let urun2 = {
    isim: "dell 7577",
    fiyat: 16500,
    islemci: "i7"
}
let urun3 = {
    isim: "monster",
    fiyat: 19200,
    islemci: "i7"
}
let urun4 = {
    isim: "macbook",
    fiyat: 32000,
    islemci: "M3 air"
}
let urun5 = {
    isim: "dell 7555",
    fiyat: 14000,
    islemci: "i5"
}
let urun6 = {
    isim: "lenovo ideapad",
    fiyat: 9000,
    islemci: "i5"
}


let urunler = [urun1, urun2, urun3, urun4, urun5, urun6]

let filtreliUrunler = []

let bulunacakUrun = prompt("Aradığın ürünü yaz: ")



function arananUrun(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(bulunacakUrun.toUpperCase(),0)){
            filtreliUrunler.push(urun)
        }
    })
}

function urunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("--------------");
        console.log(urun.isim + " , fiyat: " + urun.fiyat + " , islemci: " + urun.islemci);
        console.log("--------------");
    })
}

arananUrun(urunler)
urunleriYazdir(filtreliUrunler)