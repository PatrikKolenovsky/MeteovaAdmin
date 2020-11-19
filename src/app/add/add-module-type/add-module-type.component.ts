import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModuleTypeService} from '../../services/module-type.service';
import {MakerService} from '../../services/maker.service';
import {Module} from '../../model/module';
import {Maker} from '../../model/maker';

@Component({
  selector: 'app-add-module-type',
  templateUrl: './add-module-type.component.html',
  styleUrls: ['./add-module-type.component.css']
})
export class AddModuleTypeComponent implements OnInit {
  addModuleTypeForm: FormGroup;
  Content = '';
  makerData: Array<Maker> = [];
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private makerService: MakerService, private moduleTypeService: ModuleTypeService, public fb: FormBuilder) {
    this.addModuleTypeForm = this.fb.group({
      name: [],
      makerId: [],
      description: [],
    });
  }

  ngOnInit(): void {
    this.makerService.readAll()
      .subscribe(
        (makerData: Array<Maker>) => this.makerData = makerData,
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
      this.setActiveContent('module_type', '');
    }, this.addModuleTypeForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.moduleTypeService.create(() => {
      setActiveContent();
    }, formValues);
  }
}
