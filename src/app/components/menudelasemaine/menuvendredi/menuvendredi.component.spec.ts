import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuvendrediComponent } from './menuvendredi.component';

describe('MenuvendrediComponent', () => {
  let component: MenuvendrediComponent;
  let fixture: ComponentFixture<MenuvendrediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuvendrediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuvendrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
