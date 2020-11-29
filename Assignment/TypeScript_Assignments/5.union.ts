export class Union
{

    displayType=(code: (string | number))=>
    {
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
    }

}
let un:Union = new Union()
un.displayType(123); 
un.displayType("ABC");
