
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsDashboardComponent } from './mws-dashboard.component';

describe('MwsDashboardComponent', () => {
  let component: MwsDashboardComponent;
  let fixture: ComponentFixture<MwsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
