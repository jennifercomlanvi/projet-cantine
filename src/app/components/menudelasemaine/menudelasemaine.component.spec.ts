import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudelasemaineComponent } from './menudelasemaine.component';

describe('MenudelasemaineComponent', () => {
  let component: MenudelasemaineComponent;
  let fixture: ComponentFixture<MenudelasemaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudelasemaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudelasemaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
