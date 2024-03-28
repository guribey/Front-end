


let kilo = Number(prompt("kilonuz:"))

let boy = Number(prompt("boyunuz(m):"))

let sonuc = kilo/(boy*2)

if(sonuc < 19){
    console.log("sen zayıfsın kardeşim" + sonuc)
}
else if(sonuc >= 19 && sonuc < 25){
    console.log("ideal kiloya yakınsın" + sonuc)
}
else if(sonuc >= 25 && sonuc < 30){
    console.log("ideal kilodasın aferin" + sonuc)
}
else if(30 < sonuc < 40){
    console.log("az biraz zayıfla" + sonuc)
}
else if(sonuc >= 40){
    console.log("tosun gibisin kardeşim" + sonuc)
}

 