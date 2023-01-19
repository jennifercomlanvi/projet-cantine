import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenujeudiComponent } from './menujeudi.component';

describe('MenujeudiComponent', () => {
  let component: MenujeudiComponent;
  let fixture: ComponentFixture<MenujeudiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenujeudiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenujeudiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
