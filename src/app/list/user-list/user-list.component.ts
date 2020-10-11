import {Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';

  constructor() {
  }

  setActiveContent(ActiveContent): void {
    this.Content = 'users' + ActiveContent;
    this.messageEvent.emit(this.Content);
  }
}
