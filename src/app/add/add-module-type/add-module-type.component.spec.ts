import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuleTypeComponent } from './add-module-type.component';

describe('AddModuleTypeComponent', () => {
  let component: AddModuleTypeComponent;
  let fixture: ComponentFixture<AddModuleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModuleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModuleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
