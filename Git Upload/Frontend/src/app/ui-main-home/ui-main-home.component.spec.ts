import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMainHomeComponent } from './ui-main-home.component';

describe('UiMainHomeComponent', () => {
  let component: UiMainHomeComponent;
  let fixture: ComponentFixture<UiMainHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiMainHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiMainHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
