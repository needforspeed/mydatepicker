import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyDatePickerModule } from 'projects/my-date-picker/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
