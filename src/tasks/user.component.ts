import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { delay, of } from 'rxjs';
import { promiseExample, timeoutExample } from './js.examples';
import { example } from './rx-js.example';
import * as test from './typescript.example.ts';

example();

// promiseExample();

class UserService {
  request(): any {
    return of({ name: 'Alex', age: 21, role: 'admin' }).pipe(delay(10000));
  }
}

type User = {
  name: string;
  age: number;
  role: 'moderator' | 'admin' | 'user';
};

@Component({
  selector: 'app-user',
  template: `<article class="user">
                   {{user.name}} -
                   {{user.role}}
            </article> <button (click)="test()">Click me</button>`,
})
export class UserComponent {
  protected user: User = {} as any;

  service: UserService;

  constructor() {
    const service = new UserService();

    this.service = service;

    this.service.request().subscribe((user) => (this.user = user));
  }

  test() {
    console.log('CLICKED');
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [UserComponent],
  exports: [UserComponent],
})
export class UserModule {}
