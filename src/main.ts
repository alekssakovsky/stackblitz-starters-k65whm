import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserModule } from './tasks/user.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, UserModule],
  template: `
    <app-user></app-user>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
