import { Component, OnInit } from '@angular/core';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {


  Content = '';
  connectionOption = '';
  moduleData: Array<Module> = [];

  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.moduleService.readAll()
      .subscribe(
        (moduleData: Array<Module>) => this.moduleData = moduleData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  selectChangeHandler(event: any): void  {
    this.connectionOption = event.target.value;
  }

}
