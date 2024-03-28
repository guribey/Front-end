//* SPREAD Operatörü. Yaymak anlamına gelir
// diziyi dilimliyor.

let numbers = [10,20,30,40]

function add(a,b,c,d) {
    console.log(a+b+c+d);
}

//amele işi
add(numbers[0],numbers[1],numbers[2],numbers[3])

// ecma ımyeh
add(...numbers)




const diller1 = ["Java","C#"]
const diller2 = ["Php","Python" , diller1[0],diller1[1]]
// eski yöntemle dizileri birleştirme

console.log(diller2);


//ecma ile
const diller3 = [...diller1,...diller2]

console.log(diller3);





//---------------
//farklı bir kullanım şekli

const numbers2 = [1,2,3,4,5,6,7,8,9]

let [a,b, ...kalanSayilar] = numbers2

console.log(a,b,kalanSayilar);


//----------------
// diziyi diziye atama

const array1 = ["Güray","Güri","Güribey","GüraY"]
let array2 = []

//amele işi
array2[0] = array1[0]
array2[1] = array1[1]
array2[2] = array1[2]
array2[3] = array1[3]

console.log(array2);


// ecma ımyeh
let array3 = [...array1]
console.log(array3);
