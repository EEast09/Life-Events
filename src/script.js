

const name = "Mitch Cuckovich";
let age = 25;
let birthday = "January 24";
let pineapplePizza = false;
const lifeEvents = ["I was born in Troy, Michigan.", "I went to Hope College.", 
, "I participated in junior olympics when I was 10 years old.","I love to be in nature."

];

//console.log(name,age,birthday,pineapplePizza);

if(pineapplePizza === true){
    console.log(`My name is ${name} I and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
}else{
    console.log(`My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for(let i=0; i< lifeEvents.length; i++){
    console.log(i);
}

for(lifeEvent of lifeEvents){
    console.log(lifeEvent)
}

// let i = 0
// while(i < lifeEvents.length){
//     console.log(lifeEvents[0]);
//     i++;
// }

let randomNumber = Math.floor(Math.random() * 10);

if (randomNumber !== 5){
    console.log("randomNumber !== 5")
} else{
    console.log(" 5===5");
}

