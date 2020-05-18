import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSolicitationComponent } from './approve-solicitation.component';

describe('ApproveSolicitationComponent', () => {
  let component: ApproveSolicitationComponent;
  let fixture: ComponentFixture<ApproveSolicitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSolicitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
