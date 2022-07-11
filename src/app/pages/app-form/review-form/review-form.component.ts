import { Component, Input, OnInit } from '@angular/core';
import { AppFormModel } from 'src/app/models/appForm-model';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css'],
})
export class ReviewFormComponent implements OnInit {
  appForm: any = '';
  @Input('appForm') set etAppForm(appForm: AppFormModel) {
    if(appForm){
      this.appForm = appForm;
      console.log('this.appForm',appForm)
    }
 
  }
  constructor() {}
  ngOnInit(): void {
    console.log('item', this.appForm);
  }
  totalAmount(number1:any,number2:any){
     const total = parseFloat(number1) + parseFloat(number2)
     let result = total.toFixed(2);
    return  result!='NaN'?result:''
  }

}
