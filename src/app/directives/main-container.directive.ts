import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMainContainer]'
})
export class MainContainerDirective {

  constructor(private element: ElementRef,
              private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, 'page-layout');
  }

}
