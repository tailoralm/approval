import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSolicitationComponent } from './create-solicitation.component';

describe('CreateSolicitationComponent', () => {
  let component: CreateSolicitationComponent;
  let fixture: ComponentFixture<CreateSolicitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSolicitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSolicitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
