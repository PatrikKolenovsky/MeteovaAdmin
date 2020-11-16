import {Component, Input, OnInit} from '@angular/core';
import {Device} from '../../model/device.model';
import {DeviceService} from '../../services/device.service';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  @Input() activeDeviceId: number;
  connectionOption = '';
  device: Device;
  moduleData: Array<Module> = [];

  constructor(private deviceService: DeviceService, private moduleService: ModuleService) {
  }

  ngOnInit(): void {
    this.deviceService.read(this.activeDeviceId)
      .subscribe(
        (device: Device) => this.device = device,
        (error) => console.log(error),
        () => {
        }
      );

    this.moduleService.readAll()
      .subscribe(
        (moduleData: Array<Module>) => this.moduleData = moduleData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  selectChangeHandler(event: any): void {
    this.connectionOption = event.target.value;
  }
}
