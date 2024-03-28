class Base {
    indirimOranı = 25

    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim
        this.soyisim = soyisim
        this.kartVarmi = kartVarmi
        this.urunler = urunler
    }

    hesapla() {
        let odenecekTutar = 0
        if (this.urunleriKontrolEt(this.urunler)) {
            //Sepetim dolu
            if (this.kartVarmi) {
                //money kart varsa
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat*(100-this.indirimOranı) / 100)
                });
            } else {
                //money kart yoksa
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat
                })
            }
        } else {
            alert("Sepetiniz boş olamaz")
        }
        return odenecekTutar
    }

    urunleriKontrolEt(urunler) {
        if(urunler !=null && urunler.legnth > 0){
            return true
        }
        return false
    }
}

