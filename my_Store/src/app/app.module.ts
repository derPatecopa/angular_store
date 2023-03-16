import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';
import { HeaderComponent } from './header/header.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    SuccessComponent,
    HeaderComponent,
    DetailedViewComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
