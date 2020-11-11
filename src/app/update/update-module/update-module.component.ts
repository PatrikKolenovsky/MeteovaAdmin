import {Component, Input, OnInit} from '@angular/core';
import {ModuleType} from '../../model/module-type';
import {ModuleTypeService} from '../../services/module-type.service';
import {Device} from '../../model/device.model';
import {Module} from '../../model/module';
import {DeviceService} from '../../services/device.service';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {
  @Input() activeModuleId: number;
  module: Module;
  moduleTypeData: Array<ModuleType> = [];

  constructor(private moduleService: ModuleService, private moduleTypeService: ModuleTypeService) { }

  ngOnInit(): void {
    this.moduleService.read(this.activeModuleId)
      .subscribe(
        (module: Module) => this.module = module,
        (error) => console.log(error),
        () => {
        }
      );

    this.moduleTypeService.readAll()
      .subscribe(
        (moduleTypeData: Array<ModuleType>) => this.moduleTypeData = moduleTypeData,
        (error) => console.log(error),
        () => {
        }
      );
  }

}
