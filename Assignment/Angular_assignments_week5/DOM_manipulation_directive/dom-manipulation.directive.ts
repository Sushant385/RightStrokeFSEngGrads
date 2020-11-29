import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDomManipulation]'
})
export class DomManipulationDirective implements OnInit
{
  @Input() appDomManipulation;

  constructor(private Element : ElementRef,private render:Renderer2) { }
  
  ngOnInit(): void 
  {
       this.render.setAttribute(this.Element.nativeElement,this.appDomManipulation,'');
  }
}
