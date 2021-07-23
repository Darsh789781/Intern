import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkContainerComponent } from './cdk-container/cdk-container.component';
import { CdkDragDropComponent } from './cdk-container/cdk-drag-drop/cdk-drag-drop.component';
import { CdkLayoutPresentationComponent } from './cdk-container/cdk-layout-presentation/cdk-layout-presentation.component';
import { CdkOverlayPresentationComponent } from './cdk-container/cdk-overlay-presentation/cdk-overlay-presentation.component';
import { CdkPortalPresentationComponent } from './cdk-container/cdk-portal-presentation/cdk-portal-presentation.component';
import { CdkVirtualScrollPresentationComponent } from './cdk-container/cdk-virtual-scroll-presentation/cdk-virtual-scroll-presentation.component';
import { CdkComponent } from './cdk.component';

const routes: Routes = [
  {
    path: '', component: CdkComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cdk'
      },
      {
        path: 'cdk',
        component: CdkContainerComponent,
        children:[
         
          {
            path:'drag-and-drop',
            component:CdkDragDropComponent
          },
          {
            path:'virtual-scroll',
            component:CdkVirtualScrollPresentationComponent
          },
          {
            path:'layout',
            component:CdkLayoutPresentationComponent
          },
          {
            path:'overlay',
            component:CdkOverlayPresentationComponent
          },
          {
            path:'portal',
            component:CdkPortalPresentationComponent
          }
         
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkRoutingModule { }
