import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Device} from '../../model/device.model';
import {DeviceService} from '../../services/device.service';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {isAsciiLetter} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-update-device',
  templateUrl: './update-device.component.html',
  styleUrls: ['./update-device.component.css']
})
export class UpdateDeviceComponent implements OnInit {
  @Input() activeDeviceId: number;
  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  connectionOption = '';
  device: Device;
  moduleData: Array<Module> = [];
  updateDeviceForm: FormGroup;
  loaded = false;

  constructor(private deviceService: DeviceService, private moduleService: ModuleService, public fb: FormBuilder) {
    this.updateDeviceForm = this.fb.group(
      {
        // Module: [''],
      }
    );
  }

  setComponentData(deviceCallback, moduleCallback): void {
    this.deviceService.read(this.activeDeviceId)
      .subscribe(
        (device: Device) => this.device = device,
        (error) => console.log(error),
        () => {
          deviceCallback();
        }
      );

    this.moduleService.readAllOtherModulesByDeviceId(this.activeDeviceId)
      .subscribe(
        (moduleData: Array<Module>) => this.moduleData = moduleData,
        (error) => console.log(error),
        () => {
          moduleCallback();
        }
      );
    this.loaded = true;
  }

  ngOnInit(): void {
    this.setComponentData(() => {
      this.updateDeviceForm = this.fb.group({
        deviceName: [this.device.deviceName],
        ip: [this.device.ip],
        port: [this.device.port],
        comServIp: [this.device.comServIp],
        comServPort: [this.device.comServPort],
        latitude: [this.device.latitude],
        longitude: [this.device.longitude],
        address: [this.device.address],
        inUse: [this.device.inUse],
        description: [this.device.description],
      });
    }, () => {
      // Module: [''],
    });
  }

  selectChangeHandler(event: any): void {
    this.connectionOption = event.target.value;
  }

  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => {
      this.setActiveContent('device', '');
    }, this.updateDeviceForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.deviceService.update(() => {
      setActiveContent();
    }, formValues, this.activeDeviceId);
  }
}
