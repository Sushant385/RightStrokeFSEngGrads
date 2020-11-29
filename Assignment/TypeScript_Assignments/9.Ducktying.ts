class Dog 
{  
    sound = "barking";  
}  
class Lion 
{  
    sound = "roaring";  
}  
class Goat 
{  
    sound = "bleat";  
    swim(){  
        console.log("Cannot Swim!");  
    }  
}  
let l: Lion = new Dog(); 
console.log(l.sound);
let d: Dog = new Lion(); 
console.log(d.sound);
let lTwo: Lion = new Goat(); 
console.log(lTwo.sound); 
