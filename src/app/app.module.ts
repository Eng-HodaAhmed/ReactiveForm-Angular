import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewSourcesComponent } from './new-sources/new-sources.component';
import { NgToggleModule } from 'ng-toggle-button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import en from '@angular/common/locales/en';

import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    NewSourcesComponent,
   

  ],
  imports: [
    BrowserModule,
    NgToggleModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     NzTimePickerModule ,
     DragDropModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
