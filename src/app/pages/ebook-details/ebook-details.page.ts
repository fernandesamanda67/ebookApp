import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EbookService } from 'src/app/services/ebook.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ebook-details',
  templateUrl: './ebook-details.page.html',
  styleUrls: ['./ebook-details.page.scss'],
})
export class EbookDetailsPage implements OnInit {

  informations = null;

  constructor(private activatedRoute: ActivatedRoute, private ebookService: EbookService, public storageService: StorageService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.storageService.getObject(id).then(resultStorage => {
      if (resultStorage != null) {        
        this.informations = resultStorage;
      } else {        
        this.ebookService.getEbook(id).subscribe(result => {
          if (result) {
            this.informations = result[0];
            this.storageService.setObject(id, this.informations);
          }
        });
      }
    }).catch(e => {      
      this.ebookService.getEbook(id).subscribe(result => {
        if (result) {
          this.informations = result[0];
          this.storageService.setObject(id, this.informations);
        }
      });
    });
  }
  
  openWebsite() {
    window.open(this.informations.Website, '_blank');
  }

}
