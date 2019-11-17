import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserAdminComponent } from './all-user-admin.component';

describe('AllUserAdminComponent', () => {
  let component: AllUserAdminComponent;
  let fixture: ComponentFixture<AllUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
