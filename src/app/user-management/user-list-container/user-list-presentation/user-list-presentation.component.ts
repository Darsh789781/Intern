import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { UserFormContainerComponent } from '../../user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from '../../user-form-container/user-form-presentation/user-form-presentation.component';
import { User} from '../../user-management'
import { UserManagementService } from '../../user-management.service';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';
@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit,AfterViewInit {
  private dynamicComponentRef:ComponentRef<UserFormContainerComponent>
  private overlayRef:OverlayRef
  componentPortalRef:ComponentPortal<UserFormContainerComponent>
  data:Array<any>
  totalRecords:Number
  p:Number=1;

  searchText!: string;
  @ViewChild('Form') 
  Form!: NgForm;
  @Output() public deleteId:EventEmitter<any> = new EventEmitter();

  @Input() public set userdetailList(id: User[]){
    if(id){
      this._userdetailList = id
    }
  }

  public get userdetailList(): User[] {
    return this._userdetailList
  }
  private _userdetailList: User[] = [];
  isOpen = false;

  constructor(private api:UserManagementService,private userpresenter:UserListPresenterService,
    private factoryResolver:ComponentFactoryResolver,private overlay:Overlay)
   {this.userdetailList = [];

   }

  ngOnInit(): void {
    if(this.deleteId){
      this.userpresenter.userdetailId$.subscribe((userdetailId) => {
      this.deleteId.emit(userdetailId);
    });

  }
  }

  ngAfterViewInit():void{
    const inForm =this.Form.valueChanges;
    inForm!.pipe(
      
      map(data=>data.search),
      debounceTime(1000),
      switchMap(res=>this.api.getSearch(res))
      )
    .subscribe(res=>{
     this.userdetailList=res})
  }
  public userdetail(id: number) {
    
    this.userpresenter.deleteUserdetail(id)
  }
//For searching


  openComponent(){
    this.openModelUsingConfigOverlay();
  }


  openModelUsingConfigOverlay(){
    if(this.overlayRef){
      this.overlayRef.dispose();
    }
    this.overlayRef = this.createGenericOverlay<UserFormContainerComponent>(UserFormContainerComponent,true)
    const portal: ComponentPortal<UserFormContainerComponent> = new ComponentPortal<UserFormContainerComponent>(UserFormContainerComponent)
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

//Created an overlay and attched form for better experience 

//Edit and delete option using overlay and ellipses button but appears after 2 times of reloading 

key:string= 'client_name'
reverse:boolean = false;
sort(key){
  this.key = key;
  this.reverse =!this.reverse
}

//Sorting is done but after 2 times of reloading browser
}
