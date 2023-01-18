import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulundiComponent } from './menulundi.component';

describe('MenulundiComponent', () => {
  let component: MenulundiComponent;
  let fixture: ComponentFixture<MenulundiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenulundiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenulundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
