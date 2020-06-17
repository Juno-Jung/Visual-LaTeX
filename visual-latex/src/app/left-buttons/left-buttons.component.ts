import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-buttons',
  templateUrl: './left-buttons.component.html',
  styleUrls: ['./left-buttons.component.css']
})
export class LeftButtonsComponent implements OnInit {

  @Output() button = new EventEmitter<string[]>();
  faCoffee = faCoffee;

  constructor () { }

  ngOnInit (): void {
  }

  insertText (str: string, type: string): void {
    this.button.emit([str, type]);
  }


}
