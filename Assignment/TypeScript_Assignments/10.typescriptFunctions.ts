
function Greet(name: string, greeting: string = "Hello") : string 
{
    return greeting + ' ' + name + '!';
}

console.log(Greet('Jobs'));
console.log(Greet('Jobs', 'Hi')); 
console.log(Greet('Gate')); 


function Gree(greeting: string, name?: string ) : string 
{
    return greeting + ' ' + name + '!';
}

console.log(Gree('Hello','Gate')); 

console.log(Gree('Hi')); 

function reet(greeting: string, ...names: string[]) 
{
    return greeting + " " + names.join(", ") + "!";
}

console.log(reet("Hello", "Gate", "Jobs")); 

console.log(reet("Hello"));