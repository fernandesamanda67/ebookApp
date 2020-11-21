import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EbookService } from 'src/app/services/ebook.service';

@Component({
  selector: 'app-ebooks',
  templateUrl: './ebooks.page.html',
  styleUrls: ['./ebooks.page.scss'],
})
export class EbooksPage implements OnInit {

  results:[] = [];

  constructor(private ebookService: EbookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let searchTerm = this.activatedRoute.snapshot.paramMap.get('search');

    this.ebookService.searchData(searchTerm).subscribe((ebooks) => {
      this.results = ebooks;
    });
  }

}
