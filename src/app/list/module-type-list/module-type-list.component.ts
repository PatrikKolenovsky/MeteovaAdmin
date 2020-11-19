import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModuleType} from '../../model/module-type';
import {ModuleTypeService} from '../../services/module-type.service';

@Component({
  selector: 'app-module-type-list',
  templateUrl: './module-type-list.component.html',
  styleUrls: ['./module-type-list.component.css']
})
export class ModuleTypeListComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  moduleTypeData: Array<ModuleType> = [];

  constructor(private moduleTypeService: ModuleTypeService) {}

  ngOnInit(): void {
    this.moduleTypeService.readAll()
      .subscribe(
        (moduleTypeData: Array<ModuleType>) => this.moduleTypeData = moduleTypeData,
        (error) => console.log(error),
        () => {
        }
      );
  }

  setActiveContent(ActiveContent, id): void {
    let Content = 'module_type' + ActiveContent;
    if (id) {
      Content = Content + '?id=' + id;
    }

    this.Content = Content;
    this.messageEvent.emit(this.Content);
  }

  deleteById(id): void {
    this.moduleTypeService.delete(id);
  }
}
