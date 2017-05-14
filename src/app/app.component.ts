import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdButton, MdDialog, MdDialogRef, MdSnackBar, MdInputContainer, MdCard, MdInputModule, MdInputDirective} from '@angular/material';

import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  maxData: string[] = ['Max', 'Ali', 'Reza', 'Tala', 'Ala', 'Hello World'];
  title: any = true;

  constructor(private localStorageService: LocalStorageService ) { }


  logOut() {
    console.log('Hello world from logOut fn!');
    this.title = !this.title;
  }

  add(name) {
    this.maxData.push(name);
    this.localStorageService.set('name', name);
  }

  delete(n) {
    console.log('the index is: ', n);
    const index  = this.maxData.indexOf(n);
    this.maxData.splice(index, 1);
  }

  greeter(person: string) {
    return 'Hello, ' + person;
  }


}
