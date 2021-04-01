import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderdetailComponent } from './serviceproviderdetail.component';

describe('ServiceproviderdetailComponent', () => {
  let component: ServiceproviderdetailComponent;
  let fixture: ComponentFixture<ServiceproviderdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
