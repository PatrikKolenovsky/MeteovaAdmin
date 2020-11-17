import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Device} from '../../model/device.model';
import {DeviceService} from '../../services/device.service';


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  Content = '';
  connectionOption = '';
  moduleData: Array<Module> = [];
  addDeviceForm: FormGroup;

  constructor(private deviceService: DeviceService, private moduleService: ModuleService,
              // private afs: AngularFirestore,
              public fb: FormBuilder
  ) {

    this.addDeviceForm = this.fb.group({
      DeviceName: [''],
      Ip: [''],
      Port: [],
      ComServIp: [''],
      ComServPort: [],
      Latitude: [],
      Longitude: [],
      Address: [''],
      Description: [''],
    });
  }

  ngOnInit(): void {
    this.moduleService.readAll()
      .subscribe(
        (moduleData: Array<Module>) => this.moduleData = moduleData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  selectChangeHandler(event: any): void {
    this.connectionOption = event.target.value;
  }


  setActiveContent(ActiveContent, contentType): void {
    this.Content = ActiveContent + contentType;
    this.messageEvent.emit(this.Content);
  }

  submitForm(): void {
    this.postForm(() => {this.setActiveContent('device', ''); }, this.addDeviceForm.value);
  }

  postForm(setActiveContent, formValues): void {
    this.deviceService.create(formValues);
    setActiveContent();
  }
  // ngOnInit() {
  //
  //   this.functionNr1(() => {console.log("DO something in callBackFunction();")} );
  //
  // }
  //
  // functionNr1(callBackFunction) {
  //   this.functionNr2();
  //   console.log("Hello 1 from functionNr1 ["+new Date()+"]");
  //   callBackFunction();
  //   console.log("Hello 2 from functionNr1 ["+new Date()+"]");
  // }
  //
  //
  // functionNr2() {
  //
  //   var num:number = 0
  //   var count1:number = 0;
  //   var count:number = 0;
  //
  //   console.log("START: functionNr2 ["+new Date()+"]");
  //   for(num=0;num<=2000000000;num++) {
  //     if (num % 2 == 0) {
  //       count1 = count1 + 2;
  //     }
  //     if (num % 3 == 0) {
  //       count1 = count1 + 2;
  //     }
  //     if (num % 4 == 0) {
  //       count1 = count1 - 2;
  //     }
  //     count++;
  //   }
  //   console.log("END: functionNr2 ["+new Date()+"]");
  //
  // }
}

