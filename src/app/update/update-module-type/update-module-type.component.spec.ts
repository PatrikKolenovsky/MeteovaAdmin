import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateModuleTypeComponent } from './update-module-type.component';

describe('UpdateModuleTypeComponent', () => {
  let component: UpdateModuleTypeComponent;
  let fixture: ComponentFixture<UpdateModuleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateModuleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateModuleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
