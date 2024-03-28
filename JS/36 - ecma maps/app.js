// MAPS

// key value mantığıyla değer atanır.
// map bir array türüdür.

const map1 = new Map()

map1.set(1,"Güray") // istediğin türde değer verebilirsin string number boolean fark etmez.
map1.set(true,5) // boolean ve number
map1.set([1,2,3],{firstName: "Güray", lastName: "Kesici"}) // array ve class


const map2 = new Map()

map2.set(06,"Ankara") // set ile mape değer atayarak dolduruyoruz
map2.set(35,"İzmir")
map2.set(38,"Kayseri")
map2.set(01,"Adana")
map2.set(16,"Bursa") 


console.log(map2.get(6));
console.log(map2.get(35)); // get getirmeye yarar

value = map2.delete(16) // key silmeye yarar

console.log(map2.size);
console.log(map2.has(1)); // bu key var mı yok mu return boolean


// for of kullanarak map üzerinde dönülebilir
for(let [key,value] of map2){ //farkındaysan burada bir destructing var
    console.log(key,value);
}


// array tipine çevirip key değerlerini yazdıralım

const keys = Array.from(map2.keys())
console.log(keys);

keys.forEach((key)=>{
console.log(key,map2.get(key))}) // bu keye denk gelen valueyu da getir 


for(let key of map2.keys()){
    console.log(key);
}

for(let value of map2.values()){
    console.log(value);
}


console.log("--------------")
// mapi arraye çevirip değerleri yazıdıroyuruz
const dizi = Array.from(map2)
dizi.forEach((value)=>{
    console.log(value[0]);
})

dizi.forEach((value)=>{
    console.log(value[1]);
})



// arrayi mape çevirme
const newMap = new Map(dizi)
console.log(newMap);

// tekrar arrayi mape çevirme
const dizi2 = Array.from(newMap)
console.log(dizi2);



console.log("^^^^^^^^^^^^^^");

/* 
map içinden referans tipli bi keyi öyle dan diye çağıramazsın.
referans tipli değişkeni değer tipli değişkene atayarak keyden değer tipliyle örneğin bir array çağırabilirsin
bir örnekle inceleyelim
*/


const map3 = new Map()

map3.set(06,"Ankara")
map3.set(01,"Adana")
map3.set(16,"Bursa") 
map3.set([1,2,3],"Dizi key")

console.log(map3.get([1,2,3])); // referans tipinde tanımlanan bir keyi böyle çağıramazsın. konsolda undefined yazıyo

// referans tipli key değer tipindeki değişkene atanılarak çağırılır.
// aşağıdaki örnekteki gibi tanımlama yapılarak çağırılabilir.

let keyy = [1,2,3]
map3.set(keyy,"Dizi key")

console.log(map3.get(keyy)); //şu an bunun değerini konsola getirdi. Dizi key

