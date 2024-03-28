// ECMA SCRIPT ARROW FUNCTION


const yazdir = (param)=>{
    console.log("güray",param);
}

yazdir("kesici")


const yazdir2 = ()=> console.log("güray");

yazdir2()


const yazdir3 = (firstName,lastName)=>{
    console.log("Merhaba",firstName,lastName);
}

yazdir3("Güray","Kesici")

//yazdır3 ve 4 aynı. yazdır4 tek satırda kullanım


const yazdir4 = (firstName,lastName)=> console.log("Merhaba",firstName,lastName);


yazdir4("Güray","Kesici")




// tek parametre olduğunda parantez gerekmez. tek satırı varsa kıvırcık parantez gerekmez.
const yazdir5 = param2 => console.log("merhaba",param2);

yazdir5("güri")





const kupAl = x => x*x*x

console.log("değer",kupAl(2));


// kupAl ve kupAl2 aynı. tek bir işlem yaptığı için return ve kıvırcık parantez silinebiliyo.


const kupAl2 = (x2) => {
    return x2*x2*x2
}

console.log("değer",kupAl2(2));






// bu şekilde eventlerle de kullanılabilir.
document.addEventListener("click",()=>{
    console.log("güray");
})

