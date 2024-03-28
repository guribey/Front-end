//* ELEMENTLERİN YERLERİNİ DEĞİŞTİRME
// YAKALA VE replaceChild() içine koy


const cardBody = document.querySelectorAll(".card-body")[1]

const title = document.createElement("h1")
title.className="card-title"
title.textContent="Değişitirilen Başlık"

cardBody.replaceChild(title,cardBody.childNodes[1])
// childNodes olarak getiriceksin çünkü değiştirirken node biçiminde istiyor.

console.log(cardBody.childNodes[1]);

