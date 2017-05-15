import {AppComponent, DialogContent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import {MdButtonModule, MdSnackBarModule, MdCheckboxModule, MdInputModule, MdProgressBarModule} from '@angular/material';
import {MdMenuModule, MdSidenavModule, MdDialogModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import { MaxComponent } from './max/max.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent, DialogContent, MaxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonModule,
    MdInputModule,
    MdCheckboxModule,
    MdProgressBarModule,
    HttpModule, MdMenuModule, MdSidenavModule, MdDialogModule, MdSnackBarModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })
  ],
    entryComponents: [DialogContent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
