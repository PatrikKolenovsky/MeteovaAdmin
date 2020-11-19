import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModuleTypeService} from '../../services/module-type.service';

@Component({
  selector: 'app-add-module-type',
  templateUrl: './add-module-type.component.html',
  styleUrls: ['./add-module-type.component.css']
})
export class AddModuleTypeComponent implements OnInit {
  addModuleTypeForm: FormGroup;
  Content = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private moduleTypeService: ModuleTypeService, public fb: FormBuilder) {
    this.addModuleTypeForm = this.fb.group({
      name: [],
      makerID: [],
      description: [],
    });
  }

  ngOnInit(): void {
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
