import { Component, OnInit } from '@angular/core';

console.log('It works here')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title: any = true;

  logOut() {
    console.log('Hello world from logOut fn!');
    this.title = !this.title;
  }

  greeter(person: string) {
    return "Hello, " + person;
  }

  // validator

}
