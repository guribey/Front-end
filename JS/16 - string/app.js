//* STRING METOTLARI

let text = "from die for you to Heartless"

let poet = "to be or not to be"

let space = "ONE DAY        OR          DAY  ONE"


// charAt

let karakter = text.charAt(20)
console.log(karakter);


let birlesim = text.concat(" ", poet)
console.log(birlesim);


let number = text.indexOf("H")
console.log(number);


let upper = text.toUpperCase() // lover case olanı da küçük harfe çeviriyor
console.log(upper);


console.log(space.trim()); // boşlukları temizliyo


console.log(text.slice(20,29));


console.log(text.substring(5,17));


console.log(text.replace("Heartless","yerine sevemem"));


console.log(text.split(" "));


console.log(text.startsWith("f"));
console.log(text.endsWith("s"));