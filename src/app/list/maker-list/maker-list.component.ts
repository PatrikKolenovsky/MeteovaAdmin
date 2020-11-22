import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Maker} from '../../model/maker';
import {MakerService} from '../../services/maker.service';

@Component({
  selector: 'app-maker-list',
  templateUrl: './maker-list.component.html',
  styleUrls: ['./maker-list.component.css']
})
export class MakerListComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  Content = '';
  makerData: Array<Maker> = [];

  constructor(private makerService: MakerService) {
  }

  ngOnInit(): void {
    this.makerService.readAll()
      .subscribe(
        (makerData: Array<Maker>) => this.makerData = makerData,
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
    this.makerService.delete(() => {this.removeFromList(id)}, id);
  }

  removeFromList(id): void {
    this.makerData.forEach( (maker, index) => {
      if (maker.makerId === id) {
        this.makerData.splice(index);
      }
    });
  }

}
