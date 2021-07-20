import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilehostService {
  private isLoggedIn = new BehaviorSubject(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  public login() {
    this.isLoggedIn.next(true);
  }

  public logout() {
    this.isLoggedIn.next(false);
  }
  async loadComponent(viewContainerRef: ViewContainerRef, isLoggedIn: boolean) {
    const { GuestcardComponent } = await import(
      './guestcard/guestcard.component'
    );
    const { UsercardComponent } = await import(
      './usercard/usercard.component'
    );

    viewContainerRef.clear();
    let component: any = isLoggedIn
      ? UsercardComponent
      : GuestcardComponent;

    return viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(component)
    );
  }
}
