import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Envi} from '../../model/envi';
import {Device} from '../../model/device.model';
import {EnviService} from '../../services/envi.service';

@Component({
  selector: 'app-envi-list',
  templateUrl: './envi-list.component.html',
  styleUrls: ['./envi-list.component.css']
})
export class EnviListComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  enviData: Array<Envi> = [];

  constructor(private enviService: EnviService) { }

  ngOnInit(): void {
    this.enviService.readAll()
      .subscribe(
        (enviData: Array<Envi>) => this.enviData = enviData,
        (error) => console.log(error),
        () => {
        }
      );
  }

}
