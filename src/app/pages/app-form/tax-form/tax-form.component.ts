import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tax-form',
  templateUrl: './tax-form.component.html',
  styleUrls: ['./tax-form.component.css'],
})
export class TaxFormComponent implements OnInit {
  @Input() appForm:any = '';
  @Output() appFormOut = new EventEmitter<string>();

  years: any;
  month:any;
  taxvalue:any
  vatvalue:any
  taxFormGroup:any
  oldtax:any
  constructor(private _formBuilder: FormBuilder) {
    this.taxFormGroup = this._formBuilder.group({
      numberValue: ['',Validators.pattern(/^-?(0|[1-9]\d*)?$/)],
      vatValue: [''],
      years: [''],
      month: [''],
      type:['']
    });
  }

  ngOnInit(): void {
    this.years = [
      {
        value: 2022,
        name: '2022',
      },
      {
        value: 2021,
        name: '2021',
      },
      {
        value: 2020,
        name: '2020',
      },
    ];
    this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.appFormOut.emit(this.taxFormGroup.value);

  }
  taxCal(number:any) {
    let numberValue = new Intl.NumberFormat().format(number)
    console.log('numberValue',numberValue)
    const tnumber = number.replaceAll(',', '');

    console.log('texCal ',number)
    let total :number = tnumber * 0.07 
    console.log('before',total)
    let result = total.toFixed(2);
    console.log('after',result)
    this.oldtax = parseFloat(result.replace(/,/g, '')) 
    Number(result).toLocaleString('en-US');

    this.taxFormGroup.patchValue({
      // numberValue:numberValue,
      vatValue: result,
    });
    this.onChange()
  }
  changeTax(number:any){
    var Tfnumber = parseFloat(number.replace(/,/g, '')) 
    let total = Tfnumber - this.oldtax
    console.log('event',Tfnumber)
    if(total>20 || total<(-20)){
      alert('Invalid Tax')
      console.log('Invalid Tax')
      this.taxFormGroup.patchValue({
        numberValue:this.oldtax,
        // vatValue: result,
      });
    }
  }
  onChange(){
    this.appFormOut.emit(this.taxFormGroup.value);
  }
}
