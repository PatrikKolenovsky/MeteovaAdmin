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
export class UpdateDeviceComponent implements OnInit{
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

    this.moduleService.readAll()
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
        DeviceName: [this.device.deviceName],
        Ip: [this.device.ip],
        Port: [this.device.port],
        ComServIp: [this.device.comServIp],
        ComServPort: [this.device.comServPort],
        Latitude: [this.device.latitude],
        Longitude: [this.device.longitude],
        Address: [this.device.address],
        InUse: [this.device.inUse],
        Description: [this.device.description],
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
    this.deviceService.update(() => { setActiveContent(); }, formValues, this.activeDeviceId);
  }
}
