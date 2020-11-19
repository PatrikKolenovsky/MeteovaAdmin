import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-maker',
  templateUrl: './add-maker.component.html',
  styleUrls: ['./add-maker.component.css']
})
export class AddMakerComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
