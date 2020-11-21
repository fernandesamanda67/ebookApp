import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EbookService } from 'src/app/services/ebook.service';

@Component({
  selector: 'app-ebook-details',
  templateUrl: './ebook-details.page.html',
  styleUrls: ['./ebook-details.page.scss'],
})
export class EbookDetailsPage implements OnInit {

  informations = null;

  constructor(private activatedRoute: ActivatedRoute, private ebookService: EbookService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.ebookService.getEbook(id).subscribe(result => {
      if (result) {
        this.informations = result[0];
      }
    });
  }

  openWebsite() {
    window.open(this.informations.Website, '_blank');
  }

}
