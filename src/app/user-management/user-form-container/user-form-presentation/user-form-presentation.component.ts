import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserManagementService } from '../../user-management.service';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {
  id = this.route.snapshot.params['id'];


  constructor(private userPresenter:UserFormPresenterService,private route: ActivatedRoute,private api:UserManagementService) {
    if (this.id) {
      this.api.UserdataId(this.id).subscribe((res: any) => {
        this.userDetailForm.patchValue(res);
      });
    }
   }
  @Output() userDetailData = new EventEmitter();

  public userDetailForm :FormGroup = this.userPresenter.bindForm()

  ngOnInit(): void {
    this.userPresenter.userdetailData$.subscribe((res:any)=>{
      this.userDetailData.emit(res)
    })
  }
  onSubmit(){
    this.userPresenter.userdetail(this.userDetailForm)
  }

}
