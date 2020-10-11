import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {UserListComponent} from './list/user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MeteovaAdmin';
  ActiveContentTitle = 'Zařízení';
  ActiveContent = 'device';
  ActiveContentPostTitle = '';

  // tslint:disable-next-line:typedef
  receiveMessage($event) {
    this.ActiveContent = $event;
  }

  setActiveContent(ActiveContent): void {
    switch (ActiveContent) {
      case 'users':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Uživatelé';
        this.ActiveContentPostTitle = '';
        break;
      case 'device':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Zařízení';
        this.ActiveContentPostTitle = '';
        break;
      case 'module':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly';
        this.ActiveContentPostTitle = '';
        break;
      case 'module_type':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typy modulů';
        this.ActiveContentPostTitle = '';
        break;
      case 'users_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Uživatelé';
        this.ActiveContentPostTitle = 'Přidat uživatele';
        break;
      case 'device_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Zařízení';
        this.ActiveContentPostTitle = 'Přidat zařízení';
        break;
      case 'module_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly ';
        this.ActiveContentPostTitle = 'Přidat modul';
        break;
      case 'module_type_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typ modulu';
        this.ActiveContentPostTitle = 'Přidat typ modulu';
        break;
      case 'users_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Uživatelé';
        this.ActiveContentPostTitle = 'Upravit';
        break;
      case 'device_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Zařízení';
        this.ActiveContentPostTitle = 'Upravit';
        break;
      case 'module_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly ';
        this.ActiveContentPostTitle = 'Upravit';
        break;
      case 'module_type_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typ modulu';
        this.ActiveContentPostTitle = 'Upravit';
        break;
    }
  }

}
