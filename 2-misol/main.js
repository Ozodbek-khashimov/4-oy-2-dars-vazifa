class Person{
    constructor(fullName,age){
        this.fullName=fullName
        this.age=age
    }
    getInfo(){
        console.log(`Assalomu alaykum, ismim ${this.fullName} yoshim ${this.age} da`);
    }
}
module.exports=Person