import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModuleType} from '../../model/module-type';
import {ModuleTypeService} from '../../services/module-type.service';
import {Device} from '../../model/device.model';
import {Module} from '../../model/module';
import {DeviceService} from '../../services/device.service';
import {ModuleService} from '../../services/module.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Variable} from '../../model/variable';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {
  @Input() activeModuleId: number;
  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  module: Module;
  moduleTypeData: Array<ModuleType> = [];
  deviceData: Array<Device> = [];
  updateModuleForm: FormGroup;
  loaded = false;

  constructor(private moduleService: ModuleService,
              private deviceService: DeviceService,
              private moduleTypeService: ModuleTypeService,
              public fb: FormBuilder) {
    this.updateModuleForm = this.fb.group({});
  }

  setComponentData(moduleCallback, moduleTypeCallback, deviceCallback): void {
    this.moduleService.read(this.activeModuleId)
      .subscribe(
        (module: Module) => this.module = module,
        (error) => console.log(error),
        () => {
          moduleCallback();
        }
      );

    this.moduleTypeService.readAll()
      .subscribe(
        (moduleTypeData: Array<ModuleType>) => this.moduleTypeData = moduleTypeData,
        (error) => console.log(error),
        () => {
          moduleTypeCallback();
        }
      );

    this.deviceService.readAll()
      .subscribe(
        (deviceData: Array<Device>) => this.deviceData = deviceData,
        (error) => console.log(error),
        () => {
          deviceCallback();
        }
      );
    this.loaded = true;
  }

  ngOnInit(): void {
    this.setComponentData(() => {
      this.updateModuleForm = this.fb.group({
        moduleId: [this.module.moduleId],
        name: [this.module.name],
        deviceId: [this.module.deviceId],
        description: [this.module.description],
        variable: [this.module.variable],
        moduleTypeId: [this.module.moduleType.moduleTypeId],
      });
    }, () => {
      // Module: [''],
    }, () => {
      // Module: [''],
    });
  }

  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => { this.setActiveContent('_module', ''); }, this.updateModuleForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.moduleService.update(() => {setActiveContent(); }, formValues, this.activeModuleId);
  }
}
