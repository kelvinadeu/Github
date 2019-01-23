import { Directive,ElementRef,Input,Hostlistener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }

  @hostListener('mouseover') onMouseOver(){
    this.textLight("#999");
  }
  @Hostlistener('mouseleave') onMouseLeave(){
    this.textLight("#fff");
  }
  private textLight(action:string){
    this.elem.nativeElement.style.color = action;
  }

}
