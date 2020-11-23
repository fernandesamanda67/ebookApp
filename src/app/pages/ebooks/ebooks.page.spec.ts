import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbooksPage } from './ebooks.page';

describe('EbooksPage', () => {
  let component: EbooksPage;
  let fixture: ComponentFixture<EbooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

});
