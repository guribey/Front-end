

let metin = "kötür kader kemer takmış boynuma çilelerden kaçamadım"

let harf = prompt("harf gir: ")

function bul(harf) {
    let toplam = 0
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i)== harf) {
            toplam+=1
        }
        
    }
    return toplam
}

let sonuc = bul(harf)
console.log(sonuc);