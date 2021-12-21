import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerInfoComponentComponent } from './beer-info-component.component';

describe('BeerInfoComponentComponent', () => {
  let component: BeerInfoComponentComponent;
  let fixture: ComponentFixture<BeerInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerInfoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
