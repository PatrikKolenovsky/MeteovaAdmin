import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviListComponent } from './envi-list.component';

describe('EnviListComponent', () => {
  let component: EnviListComponent;
  let fixture: ComponentFixture<EnviListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
