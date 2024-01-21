import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepositoryComponent } from './github-repository.component';
import { DebugElement } from '@angular/core';

fdescribe('GithubRepositoryComponent', () => {
  let component: GithubRepositoryComponent;
  let fixture: ComponentFixture<GithubRepositoryComponent>;

  let repository: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepositoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepositoryComponent);
    component = fixture.componentInstance;

    repository = fixture.debugElement.nativeElement.querySelector('.repository-container');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
