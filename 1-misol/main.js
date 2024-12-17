function random(){
    let number=(Math.floor(Math.random()*1000));
    if(number>100){
        console.log(number);
    }
}
module.exports=random