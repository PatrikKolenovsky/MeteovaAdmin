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

  setActiveContent(ActiveContent): void {
    this.Content = 'device' + ActiveContent;
    this.messageEvent.emit(this.Content);
  }

  // ngAfterViewInit(): void {
  //   this.deviceData = this.deviceService.readAll();
  // }


}
