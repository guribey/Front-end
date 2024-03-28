let a = prompt("1 ile 5 arasında sayı gir: ")


switch (a) {

    case "1":  //string tipinde veri aldığımız için aynı tipte case
        console.log("girilen sayı 1.")
        break

    case "2":
        console.log("girilen sayı 2.")
        break

    case "3":
        console.log("girilen sayı 3.")
        break

    case "4":
        console.log("girilen sayı 4.")
        break

    case "5":
        console.log("girilen sayı 5.")
        break

    default:
        console.log("1 ile 5 arasında sayı gir.")
        break

}



let asa = "\r\n"
let gun = "1-pazartesi" + asa
    + "2-sali" + asa + "3-carsamba"
    + asa + "4-persembe" + asa
    + "5-cuma" + asa + "6-cumartesi"
    + asa + "7-pazar" + asa
    + "gün seç"

let gun1 = prompt(gun)

switch (gun1) {
    case "1":
        console.log("pazartesi günü seçildi.")
        break

    case "2":
        console.log("salı günü seçildi")
        break

    case "3":
        console.log("çarsamba günü seçildi.")
        break

    case "4":
        console.log("perşembe günü seçildi.")
        break

    case "5":
        console.log("cuma günü seçildi")
        break

    case "6":
        console.log("cumartesi günü seçildi.")
        break

    case "7":
        console.log("pazar günü seçildi")
        break

    default:
        console.log("adam gibi gün seç canımı sıkma okey?")
        break


}



// ATM



let bakiye = 1000

let menu = "1-bakiye"
    + asa + "2- para çekme" + asa
    + "3- para yatırma" + asa
    + "4- quit" + asa + "düzgün seç"

let secim = prompt(menu)

switch (secim) {
    case "1":
        console.log("bakiye: " + bakiye)
        break

    case "2":
        console.log(bakiye + asa)
        let cekilen = Number(prompt("ne kadar"))

        if (cekilen < bakiye) {
            kalan1 = bakiye - cekilen
            console.log("kalan bakiye: " + kalan1)
        } else {
            console.log("yetersiz bakiye")
        }
        break


    case "3":
        let yatirilan = Number(prompt("ne kadar"))
        let kalan2 = bakiye + yatirilan
        console.log("yeni bakiye" + kalan2)
        break


    case "4":
        console.log("kartı al")
        break


    default:
        console.log("adam gibi seçim yap")
        break
}



