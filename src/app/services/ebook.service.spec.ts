import { TestBed } from '@angular/core/testing';

import { EbookService } from './ebook.service';

describe('EbookService', () => {
  let service: EbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbookService);
  });

});
