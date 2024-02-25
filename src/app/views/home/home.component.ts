import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	texto: string = '';
	constructor(private router: Router) {}
	gerar() {
		this.router.navigate(["/generated"], {queryParams: {texto: this.texto}})
	}
}
