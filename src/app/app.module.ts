import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFormComponent } from './pages/app-form/app-form.component';
import {MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaxFormComponent } from './pages/app-form/tax-form/tax-form.component';
import { ReviewFormComponent } from './pages/app-form/review-form/review-form.component';
import {MatCardModule} from '@angular/material/card';
import { TwoDigitDecimaNumberDirective } from './Validator/TwoDigitDecimaNumberDirective';
import { CustomCurrencyPipe } from './Pipe/CustomCurrencyPipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogComponent } from './component/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    AppFormComponent,
    TaxFormComponent,
    ReviewFormComponent,
    TwoDigitDecimaNumberDirective,
    CustomCurrencyPipe,
    DialogComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
