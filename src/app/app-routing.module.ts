import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPage } from 'src/app/pages/search/search.page';
import { EbooksPage } from 'src/app/pages/ebooks/ebooks.page';
import { EbookDetailsPage } from 'src/app/pages/ebook-details/ebook-details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  { path: 'ebooks/:search',
    component: EbooksPage
  },
  {
    path: 'ebook-details/:id',
    component: EbookDetailsPage
  },
  {
    path: 'search',
    component: SearchPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
