import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appFloatElement]',
})
export class FloatElementDirective implements OnInit {
  constructor(private readonly el: ElementRef) {}

  private readonly ifFixed$ = new Subject<boolean>();
  private readonly destroy$ = new Subject<void>();

  reached = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const elementPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;

    // set `true` when scrolling has reached current element
    this.reached = scrollPosition >= elementPosition;

    this.ifFixed$.next(this.reached);
  }

  ngOnInit() {
    this.initializeListeners();
  }

  initializeListeners(): void {
    this.ifFixed$
      .pipe(takeUntil(this.destroy$))
      .subscribe((reached: boolean) => {
        if (!reached) {
          this.el.nativeElement.style.position = 'absolute';
          this.el.nativeElement.style.zIndex = '';
        }
        if (reached) {
          this.el.nativeElement.style.position = 'fixed';
          this.el.nativeElement.style.zIndex = 99;
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
