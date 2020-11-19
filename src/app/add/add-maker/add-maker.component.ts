import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MakerService} from '../../services/maker.service';

@Component({
  selector: 'app-add-maker',
  templateUrl: './add-maker.component.html',
  styleUrls: ['./add-maker.component.css']
})
export class AddMakerComponent implements OnInit {
  addMakerForm: FormGroup;
  Content = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private makerService: MakerService, public fb: FormBuilder) {
    this.addMakerForm = this.fb.group({
      name: [],
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
      this.setActiveContent('maker', '');
    }, this.addMakerForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.makerService.create(() => {
      setActiveContent();
    }, formValues);
  }
}
