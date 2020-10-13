import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';

  constructor() { }

  ngOnInit(): void {}

  setActiveContent(ActiveContent): void {
    this.Content = '_module' + ActiveContent;
    this.messageEvent.emit(this.Content);
  }

}
