import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'corinth-code-frontend';
  character = '';

  onDisplayCharacter(name: string) {
    console.log(name);
    this.character = name;
  }
}
