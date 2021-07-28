import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkRoutingModule } from './cdk-routing.module';
import { CdkContainerComponent } from './cdk-container/cdk-container.component';
import { CdkDragDropComponent } from './cdk-container/cdk-drag-drop/cdk-drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkComponent } from './cdk.component';
import { CdkVirtualScrollPresentationComponent } from './cdk-container/cdk-virtual-scroll-presentation/cdk-virtual-scroll-presentation.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkLayoutPresentationComponent } from './cdk-container/cdk-layout-presentation/cdk-layout-presentation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkOverlayPresentationComponent } from './cdk-container/cdk-overlay-presentation/cdk-overlay-presentation.component';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { CdkPortalPresentationComponent } from './cdk-container/cdk-portal-presentation/cdk-portal-presentation.component';
import { Portal, PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [
    CdkContainerComponent,
    CdkDragDropComponent,
    CdkComponent,
    CdkVirtualScrollPresentationComponent,
    CdkLayoutPresentationComponent,
    CdkOverlayPresentationComponent,
    CdkPortalPresentationComponent
  ],
  imports: [
    CommonModule,
    CdkRoutingModule,
    DragDropModule,
    ScrollingModule,
    LayoutModule,
    OverlayModule,
    PortalModule
    
    
  ], providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}]
})
export class CdkModule { }
