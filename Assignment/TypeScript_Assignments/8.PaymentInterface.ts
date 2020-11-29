interface Payment
{
    doPayment:(String)=>String;
    getPaymentStatus:(String)=>String

}
class bank implements Payment
{
    refnum:String;
    paymentCredits:String;
    
    doPayment(paymentCredits:String)
    {
        this.paymentCredits=paymentCredits;
        return `The ${this.paymentCredits} is credited to your account`
    }
    getPaymentStatus(refnum:String)
    {
       this.refnum=refnum;
       return `The ${refnum} reference number payment is successfully done`;
    }
}
let e:Payment=new bank();
console.log(e.doPayment("20,00"));
console.log(e.getPaymentStatus("985647265"))
