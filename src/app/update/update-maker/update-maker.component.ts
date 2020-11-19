import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MakerService} from '../../services/maker.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Maker} from '../../model/maker';

@Component({
  selector: 'app-update-maker',
  templateUrl: './update-maker.component.html',
  styleUrls: ['./update-maker.component.css']
})
export class UpdateMakerComponent implements OnInit {
  @Input() activeMakerId: number;
  @Output() messageEvent = new EventEmitter<string>();
  updateMakerForm: FormGroup;
  loaded = false;
  maker: Maker;

  constructor(private makerService: MakerService, public fb: FormBuilder) {
    this.updateMakerForm = this.fb.group({});
  }

  setComponentData(makerCallback): void {
    this.makerService.read(this.activeMakerId)
      .subscribe(
        (maker: Maker) => this.maker = maker,
        (error) => console.log(error),
        () => {
          makerCallback();
        }
      );

    this.loaded = true;
  }

  ngOnInit(): void {
    this.setComponentData(() => {
      this.updateMakerForm = this.fb.group({
        makerId: [this.maker.makerId],
        name: [this.maker.name],
      });
    }, () => {
    });
  }

  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => {
      this.setActiveContent('maker', '');
    }, this.updateMakerForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.makerService.update(() => {
      setActiveContent();
    }, formValues, this.activeMakerId);
  }
}
