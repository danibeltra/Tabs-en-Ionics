import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {PrincipalPage, AjustesPage} from '../index.paginas';
import { Ajustes2Page } from '../ajustes2/ajustes2';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  tab1:any;
  tab2:any;

  constructor() {
    this.tab1=PrincipalPage;
    this.tab2=AjustesPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
