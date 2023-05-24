import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ApplicationListElementSelector]'
})
export class ApplicationListElementDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
