// Destructing
// Dizi elemanlarını  ksıayoldan değişkenlere atamaya yarıyor


let langs = ["C#", "C++", "JavaScript", "Python"]
let lang1, lang2, lang3, lang4


lang1 = langs[0]
lang2 = langs[1]
lang3 = langs[2]
lang4 = langs[3]

console.log(lang1, lang2, lang3, lang4);


// şimdi bu ameleleğin kolay yolunu ecmasript ile yapalım

let diller = ["C#", "C++", "JavaScript", "Python"]
let dil1, dil2, dil3, dil4 = diller

console.log(dil1, dil2, dil3, dil4);





const hesapla = (a, b) => {
    const toplam = a + b
    const cikar = a - b
    const carp = a * b
    const bol = a / b

    const dizi = [toplam, cikar, carp, bol]
    return dizi
}

console.log(hesapla(144,97));

let [k,l,n,m] = hesapla(114,113)

console.log(k,l,m,n);



//* bir örnek daha yapalım bakalım

const person = {
    firstName: "Güray" ,
    lastName: "Kesici" ,
    salary: 999999999 , 
    age: 26 
}

let isim, soyisim, maas, yas

isim = person.firstName
soyisim = person.lastName
maas = person.salary
yas = person.yas

console.log(isim,soyisim,maas,yas);


//şimdi bunu destructing ile kısa yolsan yapalım

const person1 = {
    firstName1: "Güray1" ,
    lastName1: "Kesici1" ,
    salary1: 9999999991 , 
    age1: 261 
}

let {isim1, soyisim1, maas1, yas1} = person1

console.log(isim1,soyisim1,maas1,yas1);



