// SET
// bu kardeşimiz de bir dizidir
// mapten farkı tek değer tutuyo olması yani key value şeklinde değil

const set = new Set()

// add metoduyla değer ekliyoruz

set.add(true)
set.add(3.14)
set.add("Güray")
set.add(7)
set.add({username:"Güray",nickname:"Güri"})
set.add([1,2,3,4,5])

console.log(set.size);

// tekrarlanan elemanları saymaz. aynı değer 1 kere tanımlanabilir

set.add("Güray")
set.add("Güray")
set.add("Güray")
set.add("Güray")
set.add("Güray")
set.add("Güray")

console.log(set.size); //size aynı çünkü tekrarlananı saymıyo

set.delete(7)
console.log(set.size);

// değer tipliler elete ile silinir ama referans tipliler mapteki gibi öyle dümdüz silinmez

console.log(set.has(3.14)); // var mı yok mu


for(let value of set){
    console.log(value);
}


const values = Array.from(set)

values.forEach((value)=>{
    console.log(value);
})


// arraydan set oluşturmak

let array2 = [1,"güray",2,"güri",3,true]

const newSet = new Set(array2)
console.log(newSet);