import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
import { environment } from 'src/environments/environment';
@Component({
	selector: 'app-qr-generated',
	templateUrl: './qr-generated.component.html',
	styleUrls: ['./qr-generated.component.scss'],
})
export class QrGeneratedComponent implements OnInit {
	texto = '';
	tam = 250;
	qualidade: QRCodeErrorCorrectionLevel = 'L';
	qrCodeDownloadLink: SafeUrl = '';

	constructor(private route: ActivatedRoute, private clipboardService: ClipboardService, private router: Router) {}

	ngOnInit() {
		this.route.queryParams.subscribe((params) => {
			const textoPrevio = params['texto'];
			if (textoPrevio != null && textoPrevio != '' && this.texto == '') {
				this.texto = textoPrevio;
			}
		});
	}

	onChangeURL(url: SafeUrl) {
		this.tam = screen.width >= 450 ? 400 : 250;
		this.qrCodeDownloadLink = url;
	}

	share(){
		this.clipboardService.copy(`${environment.url}/generated?texto=${this.texto}`);
		alert("Link para compartilhamento copiado com sucesso!")
	}
}
