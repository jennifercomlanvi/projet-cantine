import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumardiComponent } from './menumardi.component';

describe('MenumardiComponent', () => {
  let component: MenumardiComponent;
  let fixture: ComponentFixture<MenumardiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumardiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumardiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
