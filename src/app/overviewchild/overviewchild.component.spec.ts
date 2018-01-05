import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewchildComponent } from './overviewchild.component';

describe('OverviewchildComponent', () => {
  let component: OverviewchildComponent;
  let fixture: ComponentFixture<OverviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
