import { Component, OnInit } from '@angular/core';
import { DocumentClassService } from './../document-class.service';
import { DocumentTypes } from './../document-types/document-types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  class = DocumentTypes;

  constructor (
    private documentClassService: DocumentClassService,
  ) { }

  ngOnInit(): void {
  }
  
  onClick (type: string): void {
    this.documentClassService.changeClass(type);
  }

  onAbout(): void {
    confirm("Moving away from this page will lose all unsaved work.")
  }
}
