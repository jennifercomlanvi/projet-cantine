import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaccueilComponent } from './menuaccueil.component';

describe('MenuaccueilComponent', () => {
  let component: MenuaccueilComponent;
  let fixture: ComponentFixture<MenuaccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuaccueilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuaccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
