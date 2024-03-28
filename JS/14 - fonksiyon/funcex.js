// fonksiyon (metot örnekleri)


// 1- harf sayısı bulma uygulaması


let metin = "kötü kader kemer takmış boynuma çilelerden kaçamadım"

let harf = prompt("istediğin harfi gir: ")

function bul(harf) {
    let toplam = 0
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i) === harf) {
            toplam++
        }    
        
    }
    return toplam    
}

let sonuc = bul(harf)

console.log(sonuc + " kere var.");



// -----------------------------
// Mükemmel sayı örneği



function isPerfectNumber(num){
    let sum = 0
    for(let i = 1 ; i <= num/2 ; i++){
        if (num%i==0) {
            sum+=i
        }
    }


    if (sum == num) {
        console.log("bu sayi mukemmel sayi");
    }
    else{
        console.log("değil");
    }
}

isPerfectNumber(496)






// decimal to binary app

function convertDecimalToBinary(number) {
    let binary = ""
    while (true) {
        binary+=(number%2).toString()
        number=Math.floor(number/2)
        if (number==1) {
            binary+=1
            break
        }
    }
    let result = reverse(binary)
    console.log("sonuç: " + result);
}

function reverse(binary) { // sayıyı ters çeviriyo
    let reverseBinary = ""
    for (let i = binary.length; i>=0 ;i--) {
        reverseBinary+=binary.charAt(i)
    }
    return reverseBinary
}


convertDecimalToBinary(90)