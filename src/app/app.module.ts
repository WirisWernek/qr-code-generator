import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { QrGeneratedComponent } from './views/qr-generated/qr-generated.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QrGeneratedComponent
  ],
  imports: [
    BrowserModule,
	QRCodeModule,
	FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
