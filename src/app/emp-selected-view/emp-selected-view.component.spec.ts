import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSelectedViewComponent } from './emp-selected-view.component';

describe('EmpSelectedViewComponent', () => {
  let component: EmpSelectedViewComponent;
  let fixture: ComponentFixture<EmpSelectedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpSelectedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSelectedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
