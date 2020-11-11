import {Component, Input, OnInit} from '@angular/core';
import {Device} from '../../model/device.model';
import {ModuleType} from '../../model/module-type';
import {ModuleService} from '../../services/module.service';
import {ModuleTypeService} from '../../services/module-type.service';

@Component({
  selector: 'app-update-module-type',
  templateUrl: './update-module-type.component.html',
  styleUrls: ['./update-module-type.component.css']
})
export class UpdateModuleTypeComponent implements OnInit {

  @Input() activeModuleTypeId: number;
  moduleType: ModuleType;

  constructor(private moduleTypeService: ModuleTypeService) { }

  ngOnInit(): void {
    this.moduleTypeService.read(this.activeModuleTypeId)
      .subscribe(
        (moduleType: ModuleType) => this.moduleType = moduleType,
        (error) => console.log(error),
        () => {
        }
      );
  }

}
