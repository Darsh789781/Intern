import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import {Student} from '../model/Crud'
import {ApiService} from '../shared-service/api.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  showAdd:boolean;
  showupdate:boolean;
  studentForm:FormGroup;
  student : Student = new Student();
  studentData : any;
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name:[''],
      add:[''],
      city:[''],
      state:[''],



    })
    this.getAllStudent();
  }
  clickAddEmployee(){
    this.studentForm.reset();
    this.showAdd=true;
    this.showupdate=false;
  }
  postStudent(){
  // ------ remove this things -----------
    this.student.name= this.studentForm.value.name;
    this.student.add= this.studentForm.value.add;
    this.student.city= this.studentForm.value.city;
    this.student.state= this.studentForm.value.state;
  //------------------------------
//  used the this.studentForm.value
    this.api.postStudent(this.student).subscribe(res=>{
      alert('Student Added')
      this.studentForm.reset();
      this.getAllStudent();
    })
  }
  getAllStudent(){
    this.api.getStudent().subscribe(res=>{
      this.studentData=res;
    })
  }
  deletestudent(row:any){
    this.api.deleteStudent(row.id).subscribe(res=>{
      alert('Deleted!!')
      this.getAllStudent()
    })
  }
  editStudent(row:any){
    this.showAdd=false;
    this.showupdate=true;
    this.student.id=row.id
    //------- used this for the setvalue for all the field this.studentForm.patchValue(row) --------------
   
    // ------------- please remove this code -------------------
    // this.studentForm.controls['id'].setValue(student.id);
    this.studentForm.controls['name'].setValue(row.name);
    this.studentForm.controls['add'].setValue(row.add);
    this.studentForm.controls['city'].setValue(row.city);
    this.studentForm.controls['state'].setValue(row.state);
    //-------------------------------------------------------


  }
  updateStudent(){
    //----------------------------------------------
    this.student.name= this.studentForm.value.name;
    this.student.add= this.studentForm.value.add;
    this.student.city= this.studentForm.value.city;
    this.student.state= this.studentForm.value.state;
    //---------------------------
    this.api.updateStudent(this.student,this.student.id).subscribe(res=>{
      alert('Updated')
      this.getAllStudent();

    })
  }

}
