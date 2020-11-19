import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMakerComponent } from './update-maker.component';

describe('UpdateMakerComponent', () => {
  let component: UpdateMakerComponent;
  let fixture: ComponentFixture<UpdateMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
