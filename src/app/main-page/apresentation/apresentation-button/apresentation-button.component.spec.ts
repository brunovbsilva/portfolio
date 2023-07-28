import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentationButtonComponent } from './apresentation-button.component';

describe('ApresentationButtonComponent', () => {
  let component: ApresentationButtonComponent;
  let fixture: ComponentFixture<ApresentationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresentationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApresentationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
