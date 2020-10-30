import { Component } from '@angular/core';
import { phoneColor, photoUrl } from './data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cool-shopping-list';
  phoneColor = phoneColor;
  buttonClicked: string = 'Black';
  photoUrl = photoUrl;
}
