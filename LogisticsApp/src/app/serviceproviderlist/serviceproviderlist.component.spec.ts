import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderlistComponent } from './serviceproviderlist.component';

describe('ServiceproviderlistComponent', () => {
  let component: ServiceproviderlistComponent;
  let fixture: ComponentFixture<ServiceproviderlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
