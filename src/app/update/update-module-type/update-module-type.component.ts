import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModuleType} from '../../model/module-type';
import {ModuleTypeService} from '../../services/module-type.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Maker} from '../../model/maker';
import {MakerService} from '../../services/maker.service';

@Component({
  selector: 'app-update-module-type',
  templateUrl: './update-module-type.component.html',
  styleUrls: ['./update-module-type.component.css']
})
export class UpdateModuleTypeComponent implements OnInit {

  @Input() activeModuleTypeId: number;
  @Output() messageEvent = new EventEmitter<string>();

  content = '';
  moduleType: ModuleType;
  updateModuleTypeForm: FormGroup;
  loaded = false;
  makerData: Array<Maker> = [];

  constructor(private moduleTypeService: ModuleTypeService, private makerService: MakerService, public fb: FormBuilder) {
    this.updateModuleTypeForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.setComponentData(() => {
      this.updateModuleTypeForm = this.fb.group({
        name: [this.moduleType.name],
        makerId: [this.moduleType.maker.makerId],
        description: [this.moduleType.description],
      });
    });
  }

  setComponentData(moduleTypeCallback): void {
    this.moduleTypeService.read(this.activeModuleTypeId)
      .subscribe(
        (moduleType: ModuleType) => this.moduleType = moduleType,
        (error) => console.log(error),
        () => {
          moduleTypeCallback();
        }
      );
    this.makerService.readAll()
      .subscribe(
        (makerData: Array<Maker>) => this.makerData = makerData,
        (error) => console.log(error),
        () => {
        }
      );
    this.loaded = true;
  }

  setActiveContent(ActiveContent, contentType): void {
    this.content = ActiveContent + contentType;
    this.messageEvent.emit(this.content);
  }

  submitForm(): void {
    this.postForm(() => {
      this.setActiveContent('module_type', '');
    }, this.updateModuleTypeForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.moduleTypeService.update(() => {
      setActiveContent();
    }, formValues, this.activeModuleTypeId);
  }
}
