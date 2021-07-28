import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BankFormPresentationComponent } from 'src/app/bank/bank-form-container/bank-form-presentation/bank-form-presentation.component';

@Component({
  selector: 'app-cdk-portal-presentation',
  templateUrl: './cdk-portal-presentation.component.html',
  styleUrls: ['./cdk-portal-presentation.component.scss']
})
export class CdkPortalPresentationComponent implements AfterViewInit {

  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent: ElementRef<HTMLElement>;

  selectedPortal: Portal<any>;
  componentPortal: ComponentPortal<BankFormPresentationComponent>;
  templatePortal: TemplatePortal<any>;
  domPortal: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) { }

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(BankFormPresentationComponent);
    
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

}
@Component({
  selector: 'component-portal-example',
  template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }