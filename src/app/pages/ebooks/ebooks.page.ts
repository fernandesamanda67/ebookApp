import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EbookService } from 'src/app/services/ebook.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.page.html',
  styleUrls: ['./ebooks.page.scss'],
})
export class EbooksPage implements OnInit {

  results:[] = [];

  constructor(private ebookService: EbookService, private activatedRoute: ActivatedRoute, public storageService: StorageService) { }

  ngOnInit() {
    let searchTerm = this.activatedRoute.snapshot.paramMap.get('search');

    this.storageService.getObject(searchTerm).then(resultStorage => {
      if (resultStorage != null) {        
        this.results = resultStorage;
      } else {        
        this.ebookService.searchData(searchTerm).subscribe((ebooks) => {
          this.results = ebooks;
          this.storageService.setObject(searchTerm, this.results);
        });
      }
    }).catch(e => {
      this.ebookService.searchData(searchTerm).subscribe((ebooks) => {
        this.results = ebooks;
        this.storageService.setObject(searchTerm, this.results);
      });
    });

  }
}
