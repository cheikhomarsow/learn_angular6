import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React','Vue'];

  userModel = new User('Cheikh', 'cheikhomar60@gmail.com', 2020202, '', 'morning', true);

  
}
