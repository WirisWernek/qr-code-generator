
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, QRCodeModule, FormsModule),
		provideRouter(routes),
	],
}).catch((err) => console.error(err));
