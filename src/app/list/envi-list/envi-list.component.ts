import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Envi} from '../../model/envi';

@Component({
  selector: 'app-envi-list',
  templateUrl: './envi-list.component.html',
  styleUrls: ['./envi-list.component.css']
})
export class EnviListComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  Content = '';
  enviData: Array<Envi> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
