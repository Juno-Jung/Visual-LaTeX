import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { DocumentClassService } from './../document-class.service';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  @ViewChild('editor') editor;

  private BASE_URL = 'https://latexonline.cc/compile?text='
  markdown: string;
  latex: string;
  result;

  options = {
    showPreviewPanel: false,
  }

  katexOptions = {
    throwOnError: false,
  }

  class: string;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private documentClassService: DocumentClassService,
  ) { }

  ngOnInit(): void {
    const route = this.route.snapshot.paramMap.get('class');
    this.subscription = this.documentClassService.currentClass
      .subscribe( (currentClass) => this.class = currentClass );
    this.markdown = '# ' + route;

    const container = <HTMLDivElement>document.getElementsByClassName('md-editor-container')[0];
    container.style.width = '100%';
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onButton(event: string[]): void {
    const editor = this.editor._aceEditorIns;
    const text = event[0];
    const type = event[1];

    if (type === 'selection') {
      const selected = editor.getSelectedText();
      editor.session.replace(editor.getSelectionRange(), text + selected + text);
    } else if (type === 'insert') {
      editor.insert(text);
    }
  }

  compile (): void {
    const route = this.route.snapshot.paramMap.get('class');
    const iframe: HTMLIFrameElement = document.querySelector('iframe');

    if (route === 'beamer') {
      const data = [this.class, this.markdown, '\\end{frame} \\end{document}'].join('\n');
      iframe.src = this.BASE_URL + encodeURIComponent(data);  
    } else {
      const data = [this.class, this.markdown, '\\end{document}'].join('\n');
      iframe.src = this.BASE_URL + encodeURIComponent(data);  
    }
  }
}

