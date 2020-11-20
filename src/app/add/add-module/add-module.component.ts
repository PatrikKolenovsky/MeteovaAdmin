import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModuleTypeService} from '../../services/module-type.service';
import {ModuleService} from '../../services/module.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModuleType} from '../../model/module-type';
import {DeviceService} from '../../services/device.service';
import {Device} from '../../model/device.model';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  moduleTypeData: Array<ModuleType> = [];
  deviceData: Array<Device> = [];
  addModuleForm: FormGroup;
  Content = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private moduleTypeService: ModuleTypeService, private deviceService: DeviceService,
              private moduleService: ModuleService, public fb: FormBuilder) {
    this.addModuleForm = this.fb.group({
      name: [],
      moduleTypeId: [],
      deviceId: [],
      description: [],
    });
  }

  ngOnInit(): void {
    this.moduleTypeService.readAll()
      .subscribe(
        (moduleTypeData: Array<ModuleType>) => this.moduleTypeData = moduleTypeData,
        (error) => console.log(error),
        () => {
        }
      );

    this.deviceService.readAll()
      .subscribe(
        (deviceData: Array<Device>) => this.deviceData = deviceData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => {
      this.setActiveContent('_module', '');
    }, this.addModuleForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.moduleService.create(() => {
      setActiveContent();
    }, formValues);
  }
}
