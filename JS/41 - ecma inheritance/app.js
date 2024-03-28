//* Inheritance

// this neredeyse orayı gösterir

console.log(this);


/* 
inheritance bir kere yazdığın şeyi çok defa kullanmaya yarar.
bunu da super ve super() ile yapar
*/ 

console.log("   ");
console.log("--------Inheritance-------");



class Person {

    constructor(firstName,lastName,horoscope){
        this.firstName = firstName
        this.lastName = lastName
        this.horoscope = horoscope
    }

    writeInfo(){
        console.log(this.firstName,this.lastName,this.horoscope);
    }

}

class Student extends Person{ // extends person classını burada kullanmaya dahil etmeye yarıyor

    constructor(firstName,lastName,horoscope){
        super(firstName,lastName,horoscope) // persondaki değişkenleri super() ile buraya taşıdık
    }

    writeInfo(){
        super.writeInfo() // super.writeInfo ile Person classındaki metodu buraya dahil ettik
    }
}

class Engineer extends Person{

    constructor(firstName,lastName,horoscope){
        super(firstName,lastName,horoscope)
    }
    writeInfo(){
        super.writeInfo()
    }
}

class Principal extends Person{

    constructor(firstName,lastName,horoscope){
        super(firstName,lastName,horoscope)
    }

    writeInfo(){
        super.writeInfo()
    }
}


const Student1 = new Student("Güray","Kesici","Aries")
const Engineer1 = new Engineer("Ali","Kesici","O da Aries");
const Principal1 = new Principal("Jean","Todt","Unknown")

Student1.writeInfo()
Engineer1.writeInfo()
Principal1.writeInfo()