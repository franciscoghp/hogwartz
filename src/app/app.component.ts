import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <main class="container">
    <router-outlet></router-outlet>
  </main>`
  
})
export class AppComponent  implements OnInit {
    
    constructor() {
    }

    ngOnInit() {
    }
}