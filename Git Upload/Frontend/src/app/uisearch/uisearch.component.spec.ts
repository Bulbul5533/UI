import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UISearchComponent } from './uisearch.component';

describe('UISearchComponent', () => {
  let component: UISearchComponent;
  let fixture: ComponentFixture<UISearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UISearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UISearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
