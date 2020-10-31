import { Component } from '@angular/core';
import { phoneColor, seedProduct } from './data/data';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cool-shopping-list';
  product = seedProduct;
  cicleColor = seedProduct[0].cssColor;
  buttonClicked: string = seedProduct[0].color;
  photoUrlSelected: string = seedProduct[0].photoUrl;

  onButtonClick(obj: Product) {
    this.buttonClicked = obj.color;
    this.photoUrlSelected = obj.photoUrl;
    this.cicleColor = obj.cssColor;
  }
}
