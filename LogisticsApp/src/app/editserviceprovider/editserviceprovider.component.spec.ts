import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditserviceproviderComponent } from './editserviceprovider.component';

describe('EditserviceproviderComponent', () => {
  let component: EditserviceproviderComponent;
  let fixture: ComponentFixture<EditserviceproviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditserviceproviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditserviceproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
