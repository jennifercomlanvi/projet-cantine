import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootsrappComponent } from './bootsrapp.component';

describe('BootsrappComponent', () => {
  let component: BootsrappComponent;
  let fixture: ComponentFixture<BootsrappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootsrappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootsrappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
