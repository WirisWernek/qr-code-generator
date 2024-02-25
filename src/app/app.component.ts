import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'qr-code-generator';
	gerar: boolean = false;
	texto = '';

	gerarCodigo(texto: string) {
		this.texto = texto;
		this.gerar = true;
	}
}
