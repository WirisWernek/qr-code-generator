import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { QrGeneratedComponent } from './views/qr-generated/qr-generated.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'generated',
		component: QrGeneratedComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
