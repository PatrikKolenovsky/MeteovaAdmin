import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-module-type',
  templateUrl: './module-type.component.html',
  styleUrls: ['./module-type.component.css']
})
export class ModuleTypeComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';

  constructor() {}

  ngOnInit(): void {}

  setActiveContent(ActiveContent): void {
    this.Content = 'module_type' + ActiveContent;
    this.messageEvent.emit(this.Content);
  }
}
