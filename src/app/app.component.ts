import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root componet</h1>
    <app-directives></app-directives>
  `,
})
export class AppComponent{
  delete = false;
  test = "starting value"
  bindValue = 1000;
}

