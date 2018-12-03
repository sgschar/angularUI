import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompinentComponent } from './autocompinent.component';

describe('AutocompinentComponent', () => {
  let component: AutocompinentComponent;
  let fixture: ComponentFixture<AutocompinentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompinentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompinentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
