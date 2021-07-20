import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProfilehost]'
})
export class ProfilehostDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
