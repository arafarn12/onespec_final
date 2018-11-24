import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { RestdbProvider } from '../../providers/restdb/restdb';
import { OnespecProvider } from '../../providers/onespec/onespec';
import { saveandload } from '../../models/dataresult';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loop = new Array();
  listname = new Array();
  resultJSON;
  mainDir;

  constructor(public navCtrl: NavController,
    public file: File,
    public restProvider: RestdbProvider,
    public onespecProvider: OnespecProvider,
    public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.onespecProvider.initialPrice();
  }

  ionViewWillEnter() {
    this.updateVar();
  }

  updateVar() {
    this.loop.length = 0;
    this.listname.length = 0;
    this.resultJSON = undefined;
    this.loadFileFromStorage();
  }

  loadFileFromStorage() {

    let dirName;
    let maindir = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
    let result = this.file.createDir(this.file.externalRootDirectory, "", true);

    maindir.then(data => {
      this.mainDir = data.toURL();
    }).catch(error => {
      this.toastCtrl.create({
        message: 'ไม่สามารถเปิดโฟลเดอร์ได้',
        duration: 2000,
        position: 'bottom'
      }).present();
    });

    result.then(data => {
      dirName = data.toURL();

      let showallitel = this.file.listDir(dirName, "onespec");
      showallitel.then(entries => {
        this.resultJSON = entries;
        //alert("JSON Entry : " + JSON.stringify(this.resultJSON.name));
        this.listAllfile();
      }).catch(error => {
        alert("มีข้อผิดพลาด");
      });

    }).catch(error => {
      this.toastCtrl.create({
        message: 'ไม่สามารถเปิดโฟลเดอร์ได้',
        duration: 2000,
        position: 'bottom'
      }).present();
    });

  }

  listAllfile() {
    let temp_item;
    let re = /.json/gi;
    for (let item of this.resultJSON) {
      temp_item = item.name.replace(re, "");
      this.loadFile(temp_item);
    }
  }

  loadFile(name: String) {
    let specname: String = "";
    let filePath = name + ".json";
    this.file.readAsText(this.mainDir, filePath).then((contents) => {
      let obj: saveandload = JSON.parse(contents);
      specname = obj.specname;
      this.listname.push(specname);
      this.loop.push(name);
    });
  }

  loadTime(time: Date): String {
    return time.toString();
  }

  createNew() {
    this.navCtrl.push(AboutPage, { new: true });
  }

  loadfileFromID(name: String) {
    this.onespecProvider.file_edit = name;
    this.loadStruct(name);
    this.navCtrl.push(AboutPage);
  }

  loadStruct(name: String) {
    let filePath = name + ".json";
    this.file.readAsText(this.mainDir, filePath).then((contents) => {
      let obj: saveandload = JSON.parse(contents);
      this.onespecProvider.cpu = obj.cpu;
      this.onespecProvider.cpu_detail[0] = obj.cpu_name;
      this.onespecProvider.cpu_detail[1] = obj.cpu_price;
      this.onespecProvider.cpu_detail[2] = obj.cpu_img;

      this.onespecProvider.mainboard = obj.mainboard;
      this.onespecProvider.mainboard_detail[0] = obj.mainboard_name;
      this.onespecProvider.mainboard_detail[1] = obj.mainboard_price;
      this.onespecProvider.mainboard_detail[2] = obj.mainboard_img;

      this.onespecProvider.vga = obj.vga;
      this.onespecProvider.vga_detail[0] = obj.vga_name;
      this.onespecProvider.vga_detail[1] = obj.vga_price;
      this.onespecProvider.vga_detail[2] = obj.vga_img;

      this.onespecProvider.memory = obj.memory;
      this.onespecProvider.memory_detail[0] = obj.memory_name;
      this.onespecProvider.memory_detail[1] = obj.memory_price;
      this.onespecProvider.memory_detail[2] = obj.memory_img;

      this.onespecProvider.hdd = obj.hdd;
      this.onespecProvider.hdd_detail[0] = obj.hdd_name;
      this.onespecProvider.hdd_detail[1] = obj.hdd_price;
      this.onespecProvider.hdd_detail[2] = obj.hdd_img;

      this.onespecProvider.ssd = obj.ssd;
      this.onespecProvider.ssd_detail[0] = obj.ssd_name;
      this.onespecProvider.ssd_detail[1] = obj.ssd_price;
      this.onespecProvider.ssd_detail[2] = obj.ssd_img;

      this.onespecProvider.psu = obj.psu;
      this.onespecProvider.psu_detail[0] = obj.psu_name;
      this.onespecProvider.psu_detail[1] = obj.psu_price;
      this.onespecProvider.psu_detail[2] = obj.psu_img;

      this.onespecProvider.case = obj.case;
      this.onespecProvider.case_detail[0] = obj.case_name;
      this.onespecProvider.case_detail[1] = obj.case_price;
      this.onespecProvider.case_detail[2] = obj.case_img;

      this.onespecProvider.cpu_cooler = obj.cpu_cooler;
      this.onespecProvider.cpu_cooler_detail[0] = obj.cpu_cooler_name;
      this.onespecProvider.cpu_cooler_detail[1] = obj.cpu_cooler_price;
      this.onespecProvider.cpu_cooler_detail[2] = obj.cpu_cooler_img;

      this.onespecProvider.monitor = obj.monitor;
      this.onespecProvider.monitor_detail[0] = obj.monitor_name;
      this.onespecProvider.monitor_detail[1] = obj.monitor_price;
      this.onespecProvider.monitor_detail[2] = obj.monitor_img;

      this.onespecProvider.specname = obj.specname;
    });
  }

}
