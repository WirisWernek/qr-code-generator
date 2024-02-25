import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGeneratedComponent } from './qr-generated.component';

describe('QrGeneratedComponent', () => {
  let component: QrGeneratedComponent;
  let fixture: ComponentFixture<QrGeneratedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrGeneratedComponent]
    });
    fixture = TestBed.createComponent(QrGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
