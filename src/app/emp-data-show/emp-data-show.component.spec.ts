import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDataShowComponent } from './emp-data-show.component';

describe('EmpDataShowComponent', () => {
  let component: EmpDataShowComponent;
  let fixture: ComponentFixture<EmpDataShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDataShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
