import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteFormAdminComponent } from './vote-form-admin.component';

describe('VoteFormComponent', () => {
  let component: VoteFormAdminComponent;
  let fixture: ComponentFixture<VoteFormAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteFormAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteFormAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
