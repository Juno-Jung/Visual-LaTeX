import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DocumentTypes } from './document-types/document-types';

@Injectable({
  providedIn: 'root'
})

export class DocumentClassService {

  private documentClass = new BehaviorSubject<string>(DocumentTypes.ARTICLE);
  currentClass = this.documentClass.asObservable();

  constructor() { }

  changeClass(classType: string): void {
    this.documentClass.next(classType);
  }
}
