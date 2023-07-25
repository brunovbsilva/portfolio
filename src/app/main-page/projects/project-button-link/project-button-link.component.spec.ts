import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectButtonLinkComponent } from './project-button-link.component';

describe('ProjectButtonLinkComponent', () => {
  let component: ProjectButtonLinkComponent;
  let fixture: ComponentFixture<ProjectButtonLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectButtonLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
