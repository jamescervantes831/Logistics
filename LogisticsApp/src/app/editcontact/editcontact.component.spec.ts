import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontactComponent } from './editcontact.component';

describe('EditcontractComponent', () => {
  let component: EditcontactComponent;
  let fixture: ComponentFixture<EditcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
