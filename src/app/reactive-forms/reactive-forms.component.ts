import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup, Validators, MinLengthValidator} from '@angular/forms'
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  skillsForm:FormGroup;
  skills!:FormArray

  constructor(private fb:FormBuilder) { 
    this.skillsForm =this.fb.group({
      name:new FormControl('',[Validators.required,]),
      roll_no:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      address:new FormControl('',[Validators.required]),
      skills: new FormArray([this.createform()])
    })
  }

  ngOnInit(): void {
  }
  createform(): FormGroup {
    return this.fb.group({
      title:['',[Validators.required]]
    });
  }
  addForm(): void {
    this.skills = this.skillsForm.get('skills') as FormArray;
    this.skills.push(this.createform());
    console.log('aa',this.addForm)
  }
  removeForm(i){
    this.skills = this.skillsForm.get('skills') as FormArray;
    this.skills.removeAt(i);
  }
  onSubmit(){
    console.log(this.skillsForm)
  }

}
