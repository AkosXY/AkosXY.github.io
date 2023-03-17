import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceGridComponent } from './device-grid.component';

describe('DeviceGridComponent', () => {
  let component: DeviceGridComponent;
  let fixture: ComponentFixture<DeviceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
