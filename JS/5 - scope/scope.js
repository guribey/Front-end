// VAR - LET CONST


/*
    SCOPE (KAPSAM)

    >> Global Scope : a - heryerden erişilebilir. hangi parantezin içine yazarsan yaz.
    >> Function Scope : b - bulunduğu parantezin içnide kullanılabilir.
    >> Block Scope : if while for içindeyse block scopetur.
*/


var DegiskenIsmi = 14;

console.log(DegiskenIsmi);

var a = 14 // Global Scope




function fonk1(){
    var b = 4

    console.log(b) 
} // b değişkeni sadece bu parantez içinde tanımlı

fonk1()


/*
    var : function scope olduğu için fazla ram kullanıyo
    let/const : block scope özelliği var

    var : aynı değişkeni üst üste tanımlayabilirsin
    let : let ile 1 değişkene 1 kere değer verilir
    const: tanımlanan değişkenin içi değiştirilemez. sabittir.

    var : her yerde tanımlanır
    let const : parantez içinde

    var: variable
    let: 
    const: constant
*/





