import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	texto: string = '';
	@Output() newItemEvent = new EventEmitter<string>();
	gerar() {
		this.newItemEvent.emit(this.texto);
	}
}
