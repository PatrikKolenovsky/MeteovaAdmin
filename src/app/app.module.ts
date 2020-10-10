import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleTypeComponent } from './module-type/module-type.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddDeviceComponent } from './add-device/add-device.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddModuleTypeComponent } from './add-module-type/add-module-type.component';
import { UpdateModuleTypeComponent } from './update-module-type/update-module-type.component';
import { UpdateDeviceComponent } from './update-device/update-device.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateModuleComponent } from './update-module/update-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    DeviceListComponent,
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
    UpdateModuleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
