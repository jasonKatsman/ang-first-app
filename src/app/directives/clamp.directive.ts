import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appClamp]'
})
export class ClampDirective {
  @Input() appClamp = 3;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'line-clamp');
    this.renderer.setProperty(this.element.nativeElement.style, '-webkit-line-clamp', this.appClamp);
  }

}
