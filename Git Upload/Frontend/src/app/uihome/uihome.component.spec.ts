import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIHomeComponent } from './uihome.component';

describe('UIHomeComponent', () => {
  let component: UIHomeComponent;
  let fixture: ComponentFixture<UIHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UIHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
