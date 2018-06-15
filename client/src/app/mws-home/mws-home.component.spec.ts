
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsHomeComponent } from './mws-home.component';

describe('MwsHomeComponent', () => {
  let component: MwsHomeComponent;
  let fixture: ComponentFixture<MwsHomeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
