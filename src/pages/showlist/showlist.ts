import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestdbProvider } from '../../providers/restdb/restdb';
import { dataResult } from '../../models/dataresult';
import { OnespecProvider } from '../../providers/onespec/onespec';

/**
 * Generated class for the ShowlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showlist',
  templateUrl: 'showlist.html',
})
export class ShowlistPage {
  productResult:dataResult;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestdbProvider, public onespecProvider: OnespecProvider) {
  }

  index:Number;

  ionViewDidLoad() {
    this.index = this.navParams.get("index");
  }

  ionViewDidEnter() {
    this.restProvider.feed(this.index).subscribe(result=>{
      this.productResult = result;
      //console.log(this.productResult[0]);
    })
  }


  goBack() {
    this.navCtrl.pop();
  }

  selectItem(item:Number,name:any,price:any,image:any) {
    switch(this.index) {
      case 0:
        this.onespecProvider.setCpu(item);
        this.onespecProvider.cpu_detail[0] = name;
        this.onespecProvider.cpu_detail[1] = price;
        this.onespecProvider.cpu_detail[2] = image;
        break;
      case 1:
        this.onespecProvider.setMainboard(item);
        this.onespecProvider.mainboard_detail[0] = name;
        this.onespecProvider.mainboard_detail[1] = price;
        this.onespecProvider.mainboard_detail[2] = image;
        break;
      case 2:
        this.onespecProvider.setVga(item);
        this.onespecProvider.vga_detail[0] = name;
        this.onespecProvider.vga_detail[1] = price;
        this.onespecProvider.vga_detail[2] = image;
        break;
      case 3:
        this.onespecProvider.setMemory(item);
        this.onespecProvider.memory_detail[0] = name;
        this.onespecProvider.memory_detail[1] = price;
        this.onespecProvider.memory_detail[2] = image;
        break;
      case 4:
        this.onespecProvider.setHDD(item);
        this.onespecProvider.hdd_detail[0] = name;
        this.onespecProvider.hdd_detail[1] = price;
        this.onespecProvider.hdd_detail[2] = image;
        break;
      case 5:
        this.onespecProvider.setSSD(item);
        this.onespecProvider.ssd_detail[0] = name;
        this.onespecProvider.ssd_detail[1] = price;
        this.onespecProvider.ssd_detail[2] = image;
        break;
      case 6:
        this.onespecProvider.setPSU(item);
        this.onespecProvider.psu_detail[0] = name;
        this.onespecProvider.psu_detail[1] = price;
        this.onespecProvider.psu_detail[2] = image;
        break;
      case 7:
        this.onespecProvider.setCase(item);
        this.onespecProvider.case_detail[0] = name;
        this.onespecProvider.case_detail[1] = price;
        this.onespecProvider.case_detail[2] = image;
        break;
      case 8:
        this.onespecProvider.setCooler(item);
        this.onespecProvider.cpu_cooler_detail[0] = name;
        this.onespecProvider.cpu_cooler_detail[1] = price;
        this.onespecProvider.cpu_cooler_detail[2] = image;
        break;
      case 9:
        this.onespecProvider.setMonitor(item);
        this.onespecProvider.monitor_detail[0] = name;
        this.onespecProvider.monitor_detail[1] = price;
        this.onespecProvider.monitor_detail[2] = image;
        break;
    }
    
    this.navCtrl.pop();
  }

}
