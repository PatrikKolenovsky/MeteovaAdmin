import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DeviceService} from '../../services/device.service';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  Content = '';
  connectionOption = '';
  moduleData: Array<Module> = [];
  addDeviceForm: FormGroup;

  constructor(private deviceService: DeviceService, private moduleService: ModuleService,
              public fb: FormBuilder
  ) {

    this.addDeviceForm = this.fb.group({
      deviceName: [''],
      ip: [''],
      port: [],
      comServIp: [''],
      comServPort: [],
      latitude: [],
      longitude: [],
      address: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
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

  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => {
      this.setActiveContent('device', '');
    }, this.addDeviceForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.deviceService.create(() => { setActiveContent(); }, formValues);
  }
}

