import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.focus()
  }
  ngAfterViewInit(): void {
    // this.el.nativeElement.focus()
  }

}
