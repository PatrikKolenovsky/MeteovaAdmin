import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  Content = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  setActiveContent(ActiveContent): void {
    this.Content = 'device' + ActiveContent;
    this.messageEvent.emit(this.Content);
  }
}
