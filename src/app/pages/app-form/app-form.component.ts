import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css'],
})
export class AppFormComponent implements OnInit {
  taxFormGroup: any;
  isLinear: any;
  appForm: any;
  hidenConfirm: boolean = false;
  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.taxFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.isLinear = false;
  }
  updateappForm(appForm: any) {
    this.appForm = appForm;
    console.log('updateForm', appForm);
  }
  Confirm() {
    console.log('Confirm');
    this.dialog.open(DialogComponent, {
      data: {
        text: 'Tax Filing Complete',
      },
    });
  }
}
