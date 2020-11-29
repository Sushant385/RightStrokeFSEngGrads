/*----------------------------------------------------------------------app.component.html-------------------------------------*/
<div class="container">
  <h2>By removing the banned currency this are the valid currency</h2>
  <ul>
    <li *ngFor="let product of currencies">
      {{product.name}} 
    </li>
  </ul>

  <br>

  <div class="my-3">
    <h2>Transaction details</h2>
    <br>
    <h5>Seraching transaction details</h5>
    <form #searchForm="ngForm">
      <div class="mt-3">
        <input type="text" required  name="searchTerm" ngModel class="form-control form-control-lg">
      </div>
    </form>
    <br>
    <hr>
   </div>

    <div class="results">
      <div class="d-flex">
        <h5>Search results</h5>
        <span class="ml-auto text-muted">{{count}} results found</span>
    </div>
    <table class="table">
         <thead>
           <tr>
             <th scope="col">S.No</th>
             <th scope="col">Customer-ID</th>
             <th scope="col">Transaction details</th>
             <th scope="col">Amount</th>
           </tr>
         </thead>
         <tbody>
                  <tr *ngFor="let item of SearchResults; index as i">
                          <th scope="row">{{i+1}}</th>
                          <td>{{item.Id}}</td>
                          <td>
                            <strong> Transaction-ID:{{item.Transaction_No}} </strong>
                            <p>{{item.To}}</p>
                          </td>
                          <td>Amonut:{{item.Amount}}</td>                    
                 </tr>
        </tbody>
    </table>
  </div>

  <br>

  <h2>By removing the Partially or incorrect submitted documents this are the valid docuements</h2>
  <ul>
    <li *ngFor="let d of doc">
      {{d.name}} 
    </li>
  </ul>

</div>
/*----------------------------------------------------------app.component.ts-------------------------------------------------*/

import { AfterViewInit, asNativeElements, Component, OnInit, ViewChild} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'

import {filter,map,debounceTime,distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Currency } from './Currency';
import { search } from './search.interface';
import { documents} from './Docuements';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit
{

  
  currencies: any;
  SearchResults:search;
  count:number;
  doc:any

  constructor(private dataService: ForexserviceService) { }

  public curr :Observable<Currency[]>=null;
  public docc :Observable<documents[]>=null;

  ngOnInit() 
  {
    this.dataService.getcurrencies().pipe
    (
    map((data:Currency[])=>
    {
      let crr:Currency[]=[]
      data.map(d=>
        {
         if(d.name!='AAA' && d.name!='HHH') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:Currency[])=>
       {
         this.currencies=res;
       }
    )

    this.dataService.getdocuements().pipe
    (
    map((data:documents[])=>
    {
      let crr:documents[]=[]
      data.map(d=>
        {
         if(d.status!='Partially submitted' && d.status!='Incorrect') { crr.push(d) };
        }
      )
      return crr;
    }))
    .subscribe
    (
      (res:documents[])=>
       {
         this.doc=res;
       }
    )
   }

  @ViewChild('searchForm') searchForm:NgForm

  ngAfterViewInit():void
  {


      const formvalue=this.searchForm.valueChanges;  

      formvalue.
      pipe(filter(()=>this.searchForm.valid),map(data=>data.searchTerm),debounceTime(500),
              distinctUntilChanged(),switchMap(data=>this.dataService.getsearches(data))).
      subscribe(res=>{this.SearchResults=res; this.count=Object.keys(res).length})
  }

}
/*-------------------------------------------------------------observable.service.ts-----------------------------------*/

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { search } from './search.interface';

@Injectable({
  providedIn: 'root'
})

export class ForexserviceService 
{

  constructor(private httpclient:HttpClient){}

   url='http://localhost:3000/Transactions';

   getsearches(searchTerm):Observable<search>
   {
       return this.httpclient.get<search>(this.url+'?q='+searchTerm);
   }

  getcurrencies() 
  {
    return this.httpclient.get('http://localhost:3000/Currencies')
  }

  getdocuements()
  {
    return this.httpclient.get('http://localhost:3000/docuements')
  }
}
/*----------------------------------------------------------Currency.ts---------------------------------------------*/
export class Currency
{
    name:string;
}
/*-----------------------------------------------------------search.ts----------------------------------------------*/
export interface search
{
    Id:string;
    Transaction_No:string;
    To:string;
    Amount:string;
}
/*----------------------------------------------------------docuements.ts--------------------------------------------*/
export class documents
{
    name:string;
    status:string;
}
/*---------------------------------------------------------------JSON.json------------------------------------------*/
{
    "Currencies":
    [
        {"name":"INR"},
        {"name":"GBP"},
        {"name":"NZD"},
        {"name":"USD"},
        {"name":"HHH"},
        {"name":"EUR"},
        {"name":"CAD"},
        {"name":"AUD"},
        {"name":"AAA"}
    ],

    "Transactions":
    [
        {
            "Id":"Sushant Kumar",
            "Transaction_No":"TRN001223456",
            "To":"To the Citi bank for shopping purpose",
            "Amonut":"$6578"
        },
        {
            "Id":"Raj",
            "Transaction_No":"TRN00122894",
            "To":"To the Chiui bank for shopping purpose",
            "Amonut":"$6589"
        },
        {
            "Id":"Sumit",
            "Transaction_No":"TRN0012205697",
            "To":"To the baroda bank for hdfc purpose",
            "Amonut":"$4576"
        },
        {
            "Id":"Naveen",
            "Transaction_No":"TRN0012233647",
            "To":"To the Mrui bank for home loan purpose",
            "Amonut":"$6758"
        },
        {
            "Id":"Nagendra",
            "Transaction_No":"TRN0012286897",
            "To":"To the jiuyi bank for loan purpose",
            "Amonut":"$65879"
        },
        {
            "Id":"Ankit",
            "Transaction_No":"TRN00128987334",
            "To":"To the hema bank for loan purpose",
            "Amonut":"$4568"
        },
        {
            "Id":"Nandini",
            "Transaction_No":"TRN0019228734",
            "To":"To the cyma bank for home loan purpose",
            "Amonut":"$6578"
        },
        {
            "Id":"Jeetu",
            "Transaction_No":"TRN0012665334",
            "To":"To the higu bank for shopping purpose",
            "Amonut":"$9567"
        },
        {
            "Id":"Amit Kumar",
            "Transaction_No":"TRN001926534",
            "To":"To the GIdI bank for cinema loan purpose",
            "Amonut":"$7854"
        },
        {
            "Id":"Mahesh",
            "Transaction_No":"TRN001653334",
            "To":"To the mufi bank for loan of house purpose",
            "Amonut":"$6597"
        },
        {
            "Id":"Divyanshu",
            "Transaction_No":"TRN0012683348",
            "To":"To the Hiwai bank for House loan purpose",
            "Amonut":"$2456"
        },
        {
            "Id":"Madhuri",
            "Transaction_No":"TRN001229065",
            "To":"To the ZERA bank for visa loan purpose",
            "Amonut":"$47568"
        },
        {
            "Id":"Pragati",
            "Transaction_No":"TRN001223968",
            "To":"To the MIF bank for student loan purpose",
            "Amonut":"$67745"
        },
        {
            "Id":"Subhadip",
            "Transaction_No":"TRN0012456368",
            "To":"To the Kia bank for loan purpose",
            "Amonut":"$24587"
        },
        {
            "Id":"Mainak",
            "Transaction_No":"TRN004563476",
            "To":"To the Mardhad bank for loan purpose",
            "Amonut":"$65789"
        },
        {
            "Id":"Anish",
            "Transaction_No":"TRN00128574",
            "To":"To the HDFC bank for building purpose",
            "Amonut":"$2456"
        },
        {
            "Id":"Ashish ",
            "Transaction_No":"TRN004224389",
            "To":"To the SBI bank for soung purpose",
            "Amonut":"$126578"
        },
        {
            "Id":"Anand",
            "Transaction_No":"TRN001228965",
            "To":"To the hiuo bank for himing purpose",
            "Amonut":"$65789"
        }
    ],
    "docuements":
    [
        {
            "name":"Mahesh",
            "status":"submitted"
        },
        {
            "name":"Sushant",
            "status":"submitted"
        },
        {
            "name":"Nandini",
            "status":"Partially submitted"
        },
        {
            "name":"Madhuri",
            "status":"Incorrect"
        }
    ]
}
