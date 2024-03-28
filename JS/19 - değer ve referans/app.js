// DEĞER TİPİ VE REFERAMS TİPİ

// değer tipi: string number boolean symbol
// referans tipi: object function array

// ram belleğin stack bölümünde referans tipler heap bölümündeyse değer tipler tutulur

// birbiriyle bağlantısı olan parametreler (mesela obje gibi) referans tiplidir. bağlantısı olmayanlar değer tiplidir.

let dizi1 = [1,2,3]
let dizi2 = [1,2,3]

if (dizi1==dizi2){
    console.log("eşittir");
}else{
    console.log("eşit değildir");
}

// eşit değil demesinin sebebi ram bellekte farklı yerlerde tutuluyor olması
// bu yüzden referans tiplilerde işler değer bazlı değil referans bazlı ilerliyo

