import { Component, OnInit, ViewChild ,AfterViewInit} from '@angular/core';
import { BankService } from '../../bank.service';
import { NgForm } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-bank-list-presentation',
  templateUrl: './bank-list-presentation.component.html',
  styleUrls: ['./bank-list-presentation.component.scss'],
  viewProviders:[BankService]

})
export class BankListPresentationComponent implements AfterViewInit {
  @ViewChild('Form')Form:NgForm;
  results:any

  displayBankDetails:any;
  constructor(private bankService:BankService) { }

  // ngOnInit(): void {
  //   this.results
  // }
  //  getDetails(){
  //   this.bankService.getBank().subscribe(res=>{
  //     this.displayBankDetails=res;
  //   })
  // }
  delete(row:any){
    this.bankService.deleteBank(row.id).subscribe(res=>{
      alert('Deleted!!')
    })
    //deleted as per the id
  }
  ngAfterViewInit():void{
    const inForm =this.Form.valueChanges;

    inForm.pipe(
      
      map(data=>data.search),
      debounceTime(500),
      switchMap(res=>this.bankService.getSearch(res))
      )
    .subscribe(res=>{console.log(res)
              this.results=res})
              // this.getDetails()
      //place the Account search Holder and get details also combined currency with the basic amount
  }
  
}
