import { TestBed } from '@angular/core/testing';

import { DocumentClassService } from './document-class.service';

describe('DocumentClassService', () => {
  let service: DocumentClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
