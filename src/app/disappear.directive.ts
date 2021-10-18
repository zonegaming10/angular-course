import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[disappear]' })
export class DisappearDirective implements OnInit {
  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}
  ngOnInit() {
    /* this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    ); */
  }

  @HostListener('click') //l event eli nestana feha
  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
  }
}
