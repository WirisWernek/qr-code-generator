import { Component, Input } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
@Component({
	selector: 'app-qr-generated',
	templateUrl: './qr-generated.component.html',
	styleUrls: ['./qr-generated.component.scss'],
})
export class QrGeneratedComponent {
	@Input() texto = '';
	tam =250;
	qualidade: QRCodeErrorCorrectionLevel = 'L';
	public qrCodeDownloadLink: SafeUrl = '';

	onChangeURL(url: SafeUrl) {
		this.tam = screen.width >= 450 ? 400 : 250;
		this.qrCodeDownloadLink = url;
	}
}
