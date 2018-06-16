
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwsNavbarComponent } from './navbar.component';

describe('MwsNavbarComponent', () => {
  let component: MwsNavbarComponent;
  let fixture: ComponentFixture<MwsNavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MwsNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MwsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
