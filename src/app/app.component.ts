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
  ActiveObjectId = 0;

  receiveMessage($event): void {
    if ($event.includes('?id=')) {
      const split = $event.split('?id=');
      $event = split[0];
      this.ActiveObjectId = Number(split[1]);
    }

    this.setActiveContent($event);
  }

  setActiveContentWithoutAction(): void {
    const content = this.ActiveContent;
    if (content.includes('add')) {
      const activeContent = content.replace('_add', '');
      this.setActiveContent(activeContent);
    } else if (content.includes('update')) {
      const activeContent = content.replace('_update', '');
      this.setActiveContent(activeContent);
    } else {
      this.setActiveContent(content);
    }
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
      case '_module':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly';
        this.ActiveContentPostTitle = '';
        break;
      case 'maker':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Výrobci';
        this.ActiveContentPostTitle = '';
        break;
      case 'module_type':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typy modulů';
        this.ActiveContentPostTitle = '';
        break;
      case 'envi':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Envitech';
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
      case '_module_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly ';
        this.ActiveContentPostTitle = 'Přidat modul';
        break;
      case 'maker_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Výrobci ';
        this.ActiveContentPostTitle = 'Přidat výrobce';
        break;
      case 'module_type_add':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typy modulu';
        this.ActiveContentPostTitle = 'Přidat typ modulu';
        break;
      case 'users_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Uživatelé';
        this.ActiveContentPostTitle = 'Upravit uživatele';
        break;
      case 'device_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Zařízení';
        this.ActiveContentPostTitle = 'Upravit zařízení';
        break;
      case '_module_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Moduly ';
        this.ActiveContentPostTitle = 'Upravit modul';
        break;
      case 'maker_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Výrobci ';
        this.ActiveContentPostTitle = 'Upravit výrobce';
        break;
      case 'module_type_update':
        this.ActiveContent = ActiveContent;
        this.ActiveContentTitle = 'Typy modulu';
        this.ActiveContentPostTitle = 'Upravit typ modulu';
        break;
    }
  }

}
