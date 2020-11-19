import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-update-maker',
  templateUrl: './update-maker.component.html',
  styleUrls: ['./update-maker.component.css']
})
export class UpdateMakerComponent implements OnInit {
  @Input() activeMakerId: number;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
