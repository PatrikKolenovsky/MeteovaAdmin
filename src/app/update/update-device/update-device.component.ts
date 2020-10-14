import {Component, Input, OnInit} from '@angular/core';
import {Device} from '../../model/device.model';
import {DeviceService} from '../../services/device.service';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  @Input() activeDeviceId: number;
  device: Device;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.read(this.activeDeviceId)
      .subscribe(
        (device: Device) => this.device = device,
        (error) => console.log(error),
        () => {
        }
      );
  }

}
