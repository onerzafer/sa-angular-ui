import { Directive, Input, Renderer, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[color]'
})
export class SaColorDirective implements OnInit {
  @Input() color: string = 'default';
  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.color);
    this.renderer.setElementClass(this.elementRef.nativeElement, `sa-${this.color}`,true);
  } 

}
