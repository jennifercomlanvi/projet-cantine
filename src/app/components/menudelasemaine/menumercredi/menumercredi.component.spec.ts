import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumercrediComponent } from './menumercredi.component';

describe('MenumercrediComponent', () => {
  let component: MenumercrediComponent;
  let fixture: ComponentFixture<MenumercrediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumercrediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumercrediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
