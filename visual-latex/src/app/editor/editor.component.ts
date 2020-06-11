import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {

  public Editor = ClassicEditor;

  public model = {
    editorData: '<p>Hello, World!</p>',
  };

  constructor() { }

  ngOnInit(): void {
  }

}

// <ng-katex [equation]="equation"></ng-katex>
