let Person=require('./main')
function sleep(millisecund){
    return new Promise (resolve=>{
        setTimeout(resolve,millisecund)
    })
}
let randomMillisecund=Math.floor(Math.random()*1000)

async function a() {
    let person =new Person('Ozodbek', 2006)
    console.log(randomMillisecund);
    await sleep(randomMillisecund)
return person.getInfo()
}
a()