import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appMouseAnimation]',
})
export class MouseAnimationDirective implements AfterViewInit {
  card: ElementRef;
  cardTitle: ElementRef;
  product: ElementRef;
  cardText: ElementRef;
  colorBtn: ElementRef;
  purchaseBtn: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.card = this.el.nativeElement.querySelector('.card');
    this.cardTitle = this.el.nativeElement.querySelector('.card-title');
    this.product = this.el.nativeElement.querySelector('.card-img-top');
    this.cardText = this.el.nativeElement.querySelector('.card-text');
    this.colorBtn = this.el.nativeElement.querySelector('.color');
    this.purchaseBtn = this.el.nativeElement.querySelector('.purchase');
  }

  @HostListener('mousemove', ['$event']) onMouseMove(e: MouseEvent) {
    //console.log(e.pageX, e.pageY, window.innerWidth, window.innerHeight);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    this.renderer.setStyle(
      this.card,
      'transform',
      `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    );
  }
  //Animate In
  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    //this.renderer.setStyle(this.card, 'transition', 'none');
    this.renderer.removeClass(this.card, 'mouse-animate-out');
    this.renderer.addClass(this.card, 'mouse-animate-in');

    //Popup
    this.renderer.addClass(this.cardTitle, 'popup-effect');
    this.renderer.addClass(this.product, 'popup-rotate-effect');
    this.renderer.addClass(this.cardText, 'popup-effect');
    this.renderer.addClass(this.colorBtn, 'popup-effect-2');
    this.renderer.addClass(this.purchaseBtn, 'popup-effect-3');
  }
  //Animate out
  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    // this.renderer.setStyle(this.card, 'transition', 'all 0.5s ease');
    // this.renderer.setStyle(
    //   this.card,
    //   'transform',
    //   `rotateY(0deg) rotateX(0deg)`
    // );
    this.renderer.removeStyle(this.card, 'transform');
    this.renderer.addClass(this.card, 'mouse-animate-out');
    this.renderer.removeClass(this.card, 'mouse-animate-in');

    //Popup remove
    this.renderer.removeClass(this.cardTitle, 'popup-effect');
    this.renderer.removeClass(this.product, 'popup-rotate-effect');
    this.renderer.removeClass(this.cardText, 'popup-effect');
    this.renderer.removeClass(this.colorBtn, 'popup-effect-2');
    this.renderer.removeClass(this.purchaseBtn, 'popup-effect-3');
  }
}
