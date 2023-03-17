import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my_Store';

  onCartClicked() {
    console.log('Cart clicked');
    window.alert('Ready for Checkout? Please fill in your credentials and you are good to go!');
  }
  onProductClicked() {
    console.log('Product clicked');
  }
}
