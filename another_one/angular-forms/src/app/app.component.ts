import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React','Vue'];
  topicHasError = true;

  userModel = new User('Cheikh', 'cheikhomar60@gmail.com', 2020222202, 'default', 'morning', true);

  validateTopic(value){
    if(value == 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false
    }
  }
  
}
