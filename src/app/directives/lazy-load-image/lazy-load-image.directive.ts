import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: 'img[lazyLoadImage]',
})
export class LazyLoadImageDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports the native loading attribute
      this.renderer.setAttribute(this.el.nativeElement, 'loading', 'lazy');
    } else {
      // Fallback to IntersectionObserver
      this.useIntersectionObserver();
    }
  }

  private useIntersectionObserver() {
    const img = this.el.nativeElement;

    if (!('IntersectionObserver' in window)) {
      // If IntersectionObserver is not supported, load the image immediately
      this.loadImage();
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage();
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  }

  private loadImage() {
    const img = this.el.nativeElement;
    const src = img.getAttribute('data-src');
    if (src) {
      this.renderer.setAttribute(img, 'src', src);
    }
  }
}
