//* for in & for of döngüleri

let names = ["Güray","Messi","Suarez","Neymar","Güri"]

names.forEach(function(name){
    console.log(name);
})

names.forEach((nam)=>{
    console.log(nam);
})

names.forEach(na=>console.log(na))

//bu üç örnek de aynı işe yarıyo.

//şimdi for in döngüsüne geçelim
// for in döngüsü dizideki elemanların index numarasını verir

for(let isim in names){
    console.log(isim , names[isim]); // ilk değişken index numarasını yazdırıyo ikincisi içeriği
}

for(let isimm of names){
    console.log(isimm, names.indexOf(isimm)); //ilk değişken indexin içeriğini ikincisi index numarasını yazdırıyo
}