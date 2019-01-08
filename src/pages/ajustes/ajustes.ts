import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {ModalPage} from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrar_modal(){
    let modal=this.modalCtrl.create(ModalPage, {nombre:"Dani", edad: 42});
    
    modal.present();
    modal.onDidDismiss(parametros=>{
      if(parametros){
        console.log("Data del modal: ");
        console.log(parametros);
      }else{
        console.log("Se cerró sin parametros");
      }
    });

  }
}
