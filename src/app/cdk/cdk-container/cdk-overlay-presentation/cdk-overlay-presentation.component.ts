import { GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { CdkPortalOutlet, ComponentPortal, ComponentType, Portal } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, ComponentRef, OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { BankFormPresentationComponent } from 'src/app/bank/bank-form-container/bank-form-presentation/bank-form-presentation.component';
import { BankListPresentationComponent } from 'src/app/bank/bank-list-container/bank-list-presentation/bank-list-presentation.component';

@Component({
  selector: 'app-cdk-overlay-presentation',
  templateUrl: './cdk-overlay-presentation.component.html',
  styleUrls: ['./cdk-overlay-presentation.component.scss']
})
export class CdkOverlayPresentationComponent implements OnInit {

@ViewChild('container',{read:ViewContainerRef}) public container:ViewContainerRef
@ViewChild(CdkPortalOutlet) public portal:CdkPortalOutlet
 private dynamicComponentRef:ComponentRef<BankFormPresentationComponent>

// componentPortalRef:ComponentPortal<BankListPresentationComponent>
private overlayRef:OverlayRef
  // componentOverlayRef: ComponentRef<BankListPresentationComponent>;

  constructor(private factoryResolver:ComponentFactoryResolver,private overlay:Overlay,private  sso: ScrollStrategyOptions) { }

  ngOnInit(): void {
  }
  isOpen = false;

  openComponent(){
    this.openModelUsingConfigOverlay();
  }

  // public createFactoryResolver(container:ViewContainerRef){
  //   if(this.componentFactoryRef){
  //     this.componentFactoryRef.destroy();
  //   }
  //   const component = this.factoryResolver.resolveComponentFactory<BankFormPresentationComponent>(BankFormPresentationComponent);
  //   this.componentFactoryRef=container.createComponent<BankFormPresentationComponent>(component)
  //   this.componentFactoryRef.instance.onSubmit;

  // }
  // public createPortal(portal:CdkPortalOutlet):void{
  
  //   const componentPortal = new ComponentPortal(BankListPresentationComponent)
    
    
  // }
  // public createOverlay():void{
  //   const overlayConfiguration : OverlayConfig = new OverlayConfig({
  //     hasBackdrop:true,
  //     backdropClass: ' ',
  //     positionStrategy: new GlobalPositionStrategy().centerHorizontally().centerVertically()
  //   });
  //   this.overlayRef = this.overlay.create(overlayConfiguration);
  //   this.componentOverlayRef = this.overlayRef.attach( new ComponentPortal(BankListPresentationComponent))
  //   this.overlayRef.backdropClick().subscribe(()=>{
  //     this.overlayRef.detach();
  //   })
  // }

  openModelUsingConfigOverlay(){
    if(this.overlayRef){
      this.overlayRef.dispose();
    }
    this.overlayRef = this.createGenericOverlay<BankFormPresentationComponent>(BankFormPresentationComponent,true)
    const portal: ComponentPortal<BankFormPresentationComponent> = new ComponentPortal<BankFormPresentationComponent>(BankFormPresentationComponent)
    this.dynamicComponentRef = this.overlayRef.attach(portal)

    this.overlayRef.backdropClick().subscribe(()=>{
      this.overlayRef.dispose()
    })
  }
  private createGenericOverlay<T>(componentType:ComponentType<T>,addClass?:boolean):OverlayRef{
      const overlayConfig:OverlayConfig = new  OverlayConfig();
      overlayConfig.hasBackdrop = true;
      overlayConfig.height="800px";
      overlayConfig.width="600px";
      
      overlayConfig.panelClass=['modal','is-active'],
      overlayConfig.backdropClass = 'modal-background'
      overlayConfig.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically()
      const overlayRef:OverlayRef = this.overlay.create(overlayConfig)
      return overlayRef

  }
}
