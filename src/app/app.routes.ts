import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QrGeneratedComponent } from './views/qr-generated/qr-generated.component';

export const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'generated',
		component: QrGeneratedComponent,
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

