export enum Days {
    Sunday = "Green",
    Monday = "Yellow",
    Tuesday = "Pink",
    Wednesday = "Red",
    Thrusady = "Sky Blue",
    Friday = "Orange",
    Saturday = "Black",
}
export class Skycolor{
    sky=(Day:String)=>{
         for(var d in Days){
            if(Day==d)
                console.log("The sky color in "+d+" is "+ Days[d]);
            
         }
    }

}
let s:Skycolor = new Skycolor();
s.sky("Monday");

