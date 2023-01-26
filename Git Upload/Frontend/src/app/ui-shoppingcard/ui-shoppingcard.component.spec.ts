import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShoppingcardComponent } from './ui-shoppingcard.component';

describe('UiShoppingcardComponent', () => {
  let component: UiShoppingcardComponent;
  let fixture: ComponentFixture<UiShoppingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiShoppingcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiShoppingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
