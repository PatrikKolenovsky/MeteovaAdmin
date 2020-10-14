import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Device} from '../../model/device.model';
import {DeviceService} from '../../services/device.service';
import {observable, Observable} from 'rxjs';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  deviceData: Array<Device> = [];

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.deviceService.readAll()
      .subscribe(
        (deviceData: Array<Device>) => this.deviceData = deviceData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  setActiveContent(ActiveContent, id): void {
    let Content = 'device' + ActiveContent;
    if (id) {
      Content = Content + '?id=' + id;
    }
    this.Content = Content;
    this.messageEvent.emit(this.Content);
  }

}
