// Tür Dönüşümleri - Type Conversion


let a = 5
let b = "10"
let c = Number(b) // string olan b yi number yapıyo
let d = Number("20") //stringi number yapıyo

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)

console.log(a+b+d)
console.log(a+c+d)



let e = 5
let f = parseInt("6") //stringi integer yapıyo

console.log(e+f)


let g = parseFloat("9") //stringi float yapıyo
console.log(typeof g)


let h = "10"
console.log(typeof h)

let i = String(20)
console.log(typeof i)
console.log(h+i)


/* sayı olmayan bi şeyi (harf falan) number
yapmaya kalkarsan hata alırsın */

// diziler de stringe döndürülebilir ama number olmaz.
