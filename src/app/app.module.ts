import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceListComponent } from './list/device-list/device-list.component';
import { ModuleListComponent } from './list/module-list/module-list.component';
import { ModuleTypeComponent } from './list/module-type-list/module-type.component';
import { UserListComponent } from './list/user-list/user-list.component';
import { AddUserComponent } from './add/add-user/add-user.component';
import { AddDeviceComponent } from './add/add-device/add-device.component';
import { AddModuleComponent } from './add/add-module/add-module.component';
import { AddModuleTypeComponent } from './add/add-module-type/add-module-type.component';
import { UpdateModuleTypeComponent } from './update/update-module-type/update-module-type.component';
import { UpdateDeviceComponent } from './update/update-device/update-device.component';
import { UpdateUserComponent } from './update/update-user/update-user.component';
import { UpdateModuleComponent } from './update/update-module/update-module.component';
import {HttpClientModule} from '@angular/common/http';
import { MakerListComponent } from './list/maker-list/maker-list.component';
import { AddMakerComponent } from './add/add-maker/add-maker.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModuleListComponent,
    ModuleTypeComponent,
    UserListComponent,
    AddUserComponent,
    AddDeviceComponent,
    AddModuleComponent,
    AddModuleTypeComponent,
    UpdateModuleTypeComponent,
    UpdateDeviceComponent,
    UpdateUserComponent,
    UpdateModuleComponent,
    DeviceListComponent,
    MakerListComponent,
    AddMakerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
