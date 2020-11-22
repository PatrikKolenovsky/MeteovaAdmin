import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Device} from '../../model/device.model';
import {Module} from '../../model/module';
import {ModuleService} from '../../services/module.service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  moduleData: Array<Module> = [];

  constructor(private moduleService: ModuleService) {
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

  setActiveContent(ActiveContent, contentType, id): void {
    let Content = contentType + ActiveContent;
    if (id) {
      Content = Content + '?id=' + id;
    }

    this.Content = Content;
    this.messageEvent.emit(this.Content);
  }

  deleteById(id): void {
    this.moduleService.delete(() => {
      this.removeFromList(id);
    }, id);
  }

  removeFromList(id): void {
    this.moduleData.forEach((module, index) => {
      if (module.moduleId === id) {
        this.moduleData.splice(index);
      }
    });
  }
}
