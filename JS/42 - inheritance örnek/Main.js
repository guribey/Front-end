
let mesaj = 
`
Migros'a hoşgeldiniz
Money kartınız var mı?
1-Var
2-Yok
`


const urunler = [
    {
        urunIsmi : "Süt",
        fiyat : 30
    },
    {
        urunIsmi : "Kola",
        fiyat : 50
    },
    {
        urunIsmi : "Su",
        fiyat : 10
    }
]


// true veya false
let sonuc = confirm(mesaj)
let odenecekTutar

if (sonuc) {
    //money kart varsa
    let isim = prompt("İsim: ")
    let soyisim = prompt("Soyisim: ")

    const musteri = new Musteri(isim,soyisim,sonuc,urunler)
    odenecekTutar = musteri.hesapla()

    alert(
        `Müşteri Bilgileri : ${isim} ${soyisim}
        Ödenecek tutar: ${odenecekTutar}`
    )
}else{
    const musteri = new Musteri(null,null,sonuc,urunler)
    odenecekTutar = musteri.hesapla()
    alert(`Ödenecek tutar: ${odenecekTutar}`)
}