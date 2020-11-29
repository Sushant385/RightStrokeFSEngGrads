export class car
{
    private color;
    private Engine;
    private  Capacity;
    private cylinders;
    constructor(color:String,Engine:String,Capacity:Number,cylinders:number)
    {
         this.color=color;
         this.Engine=Engine;
         this.Capacity=Capacity;
         this.cylinders=cylinders;
    }
    StartCar=()=>
    {
        return "The car is started";
    }
    StopCar=()=>
    {
        return "The Car is stopped";
    }
    Accelarate=()=>
    {
        return "The car is accelerating";
    }
    OpenCarLock=()=>
    {
        return "The car door is opened";
    }
    CloseCarLock=()=>
    {
        return "The car door is closed";
    }
}
let c:car = new car("Black","Hcc Enginee 123",50,8);
console.log(c.OpenCarLock())
console.log(c.CloseCarLock());
console.log(c.StartCar());
console.log(c.Accelarate());
console.log(c.StopCar());