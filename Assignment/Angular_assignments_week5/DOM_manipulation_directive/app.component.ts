import { AfterViewInit, asNativeElements, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Validator,FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import {ForexserviceService} from './forexservice.service';
import {PaymentPayLoadService} from './payment-pay-load.service';
import { FraudulentPaymentService } from './fraudulent-payment.service';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';

import {OneconversionService} from './oneconversion.service';

import {Pipe,PipeTransform} from '@angular/core'

import {filter,map,debounceTime,distinctUntilChanged, switchMap, reduce} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Currency } from './Currency';
import { search } from './search.interface';
import { documents} from './Docuements';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  customer=
  [
    {name:"Sushant",Id:0},
    {name:"Naveen",Id:1},
    {name:"Nandini",Id:2},
    {name:"Nagendra",Id:3}
  ]

  ADD()
 {
   this.customer.push({name:"Madhuri",Id:7})
 }
  
  ngOnInit() 
  {
    
  }

}