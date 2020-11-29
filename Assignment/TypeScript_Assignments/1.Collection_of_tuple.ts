let  customer_records:[String,number,String,String][];
customer_records=[["Raj",1956,"Male","Delhi"],
                  ["Ram",1996,"Male","Mumbai"],
                  ["Nancy",3569,"Female","Banglore"]];
customer_records.push(["Riya",1998,"Female","Ranchi"]);
customer_records.pop();
for(var index of customer_records)
{
    console.log("Customer name is "+index[0]+" with "+index[1] +" as phone number, living in  "+index[3]);
}

