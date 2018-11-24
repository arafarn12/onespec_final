import { Component, ViewChild } from '@angular/core';
import { ShowlistPage } from '../showlist/showlist';
import { OnespecProvider } from '../../providers/onespec/onespec';
import { ToastController, NavController, NavParams } from 'ionic-angular';
import { RestdbProvider } from '../../providers/restdb/restdb';

import { File } from '@ionic-native/file';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public onespecProvider: OnespecProvider,
    public toastCtrl: ToastController,
    public restProvider: RestdbProvider,
    public file: File,
    public navParams: NavParams) {

  }

  new:boolean = false;

  ionViewDidLoad() {
    this.new = this.navParams.get("new");

    if(this.new) {
      this.unAssignValue();
    }
    this.updateVar();
  }

  ionViewWillEnter() {
    this.updateVar();
  }

  ionViewDidEnter() {
    this.updateVar();
  }

  // ---------- Variable -------
  file_edit: String;

  specname: String;
  price_now: Number = 0;

  cpu: any;
  cpu_detail: any = new Array();

  mainboard: any;
  mainboard_detail: any = new Array();

  vga: any;
  vga_detail: any = new Array();

  memory: any;
  memory_detail: any = new Array();

  hdd: any;
  hdd_detail: any = new Array();

  ssd: any;
  ssd_detail: any = new Array();

  psu: any;
  psu_detail: any = new Array();

  case: any;
  case_detail: any = new Array();

  cpu_cooler: any;
  cpu_cooler_detail: any = new Array();

  monitor: any
  monitor_detail: any = new Array();

  // -------------------------

  menubox: any = [
    {
      listindex: 0,
      name: "CPU",
      tag: "cpu"
    }, {
      listindex: 1,
      name: "Mainboard",
      tag: "cpu"
    }, {
      listindex: 2,
      name: "VGA Card",
      tag: "cpu"
    }, {
      listindex: 3,
      name: "Memory",
      tag: "cpu"
    }, {
      listindex: 4,
      name: "Hard Disk",
      tag: "cpu"
    }, {
      listindex: 5,
      name: "Solid State Drive",
      tag: "cpu"
    }, {
      listindex: 6,
      name: "Power Supply",
      tag: "cpu"
    }, {
      listindex: 7,
      name: "Case",
      tag: "cpu"
    }, {
      listindex: 8,
      name: "CPU Cooler",
      tag: "cpu"
    }, {
      listindex: 9,
      name: "Monitor",
      tag: "cpu"
    }
  ];

  openShowList(num: Number) {
    this.navCtrl.push(ShowlistPage, { index: num });
  }

  @ViewChild("specnameInput") specnameInput;

  saveName() {
    this.onespecProvider.setSpecname(this.specnameInput.value);

    let toast = this.toastCtrl.create({
      message: 'บันทึกชื่อเรียบร้อยแล้ว',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  saveSpec() {
    let jsonformat = this.onespecProvider.prepareFile();

    let dirName;
    let result = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
    let timestamp;

    if (this.file_edit) {
      timestamp = this.file_edit;
    } else {
      timestamp = new Date().valueOf();
    }

    result.then(data => {
      dirName = data.toURL();
      this.file.writeFile(dirName, timestamp.toString() + ".json", jsonformat, { replace: true });

      this.toastCtrl.create({
        message: 'บันทึกไฟล์สำเร็จ',
        duration: 2000,
        position: 'bottom'
      }).present();

    }).catch(error => {
      this.toastCtrl.create({
        message: 'ไม่สามารถบันทึกไฟล์ได้',
        duration: 2000,
        position: 'bottom'
      }).present();
    });

    //this.navCtrl.parent.select(0);
    //alert("บันทึกไฟล์ไปที่ " + timestamp + ".json");
  }

  goBack() {
    this.navCtrl.pop();
  }

  removeFile() {

    let dirName;
    let result = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
    let timestamp = this.file_edit;

    result.then(data => {
      dirName = data.toURL();
      this.file.removeFile(dirName, timestamp.toString() + ".json");

      this.toastCtrl.create({
        message: 'ลบไฟล์สำเร็จ',
        duration: 2000,
        position: 'bottom'
      }).present();

      this.navCtrl.parent.select(0);

    }).catch(error => {
      this.toastCtrl.create({
        message: 'ไม่สามารถลบไฟล์ได้',
        duration: 2000,
        position: 'bottom'
      }).present();
    });


    this.unAssignValue();
    this.navCtrl.pop();

    //alert("ลบไฟล์ " + timestamp + ".json");
  }

  createNew() {
    this.unAssignValue();
    alert("สร้างใหม่");
  }

  unAssignValue() {
    this.onespecProvider.cpu = undefined;
    this.onespecProvider.cpu_detail[0] = undefined;
    this.onespecProvider.cpu_detail[1] = 0;
    this.onespecProvider.cpu_detail[2] = undefined;

    this.onespecProvider.mainboard = undefined;
    this.onespecProvider.mainboard_detail[0] = undefined;
    this.onespecProvider.mainboard_detail[1] = 0;
    this.onespecProvider.mainboard_detail[2] = undefined;

    this.onespecProvider.vga = undefined;
    this.onespecProvider.vga_detail[0] = undefined;
    this.onespecProvider.vga_detail[1] = 0;
    this.onespecProvider.vga_detail[2] = undefined;

    this.onespecProvider.memory = undefined;
    this.onespecProvider.memory_detail[0] = undefined;
    this.onespecProvider.memory_detail[1] = 0;
    this.onespecProvider.memory_detail[2] = undefined;

    this.onespecProvider.hdd = undefined;
    this.onespecProvider.hdd_detail[0] = undefined;
    this.onespecProvider.hdd_detail[1] = 0;
    this.onespecProvider.hdd_detail[2] = undefined;

    this.onespecProvider.ssd = undefined;
    this.onespecProvider.ssd_detail[0] = undefined;
    this.onespecProvider.ssd_detail[1] = 0;
    this.onespecProvider.ssd_detail[2] = undefined;

    this.onespecProvider.psu = undefined;
    this.onespecProvider.psu_detail[0] = undefined;
    this.onespecProvider.psu_detail[1] = 0;
    this.onespecProvider.psu_detail[2] = undefined;

    this.onespecProvider.case = undefined;
    this.onespecProvider.case_detail[0] = undefined;
    this.onespecProvider.case_detail[1] = 0;
    this.onespecProvider.case_detail[2] = undefined;

    this.onespecProvider.cpu_cooler = undefined;
    this.onespecProvider.cpu_cooler_detail[0] = undefined;
    this.onespecProvider.cpu_cooler_detail[1] = 0;
    this.onespecProvider.cpu_cooler_detail[2] = undefined;

    this.onespecProvider.monitor = undefined;
    this.onespecProvider.monitor_detail[0] = undefined;
    this.onespecProvider.monitor_detail[1] = 0;
    this.onespecProvider.monitor_detail[2] = undefined;

    this.onespecProvider.specname = "จัดสเปคคอม";
    this.onespecProvider.file_edit = undefined;

    this.onespecProvider.initialPrice();
    this.updateVar();

  }

  unsetSelect(item: any) {
    switch (item) {
      case 0:
        this.onespecProvider.cpu = undefined;
        this.onespecProvider.cpu_detail[0] = undefined;
        this.onespecProvider.cpu_detail[1] = 0;
        this.onespecProvider.cpu_detail[2] = undefined;
        break;
      case 1:
        this.onespecProvider.mainboard = undefined;
        this.onespecProvider.mainboard_detail[0] = undefined;
        this.onespecProvider.mainboard_detail[1] = 0;
        this.onespecProvider.mainboard_detail[2] = undefined;
        break;
      case 2:
        this.onespecProvider.vga = undefined;
        this.onespecProvider.vga_detail[0] = undefined;
        this.onespecProvider.vga_detail[1] = 0;
        this.onespecProvider.vga_detail[2] = undefined;
        break;
      case 3:
        this.onespecProvider.memory = undefined;
        this.onespecProvider.memory_detail[0] = undefined;
        this.onespecProvider.memory_detail[1] = 0;
        this.onespecProvider.memory_detail[2] = undefined;
        break;
      case 4:
        this.onespecProvider.hdd = undefined;
        this.onespecProvider.hdd_detail[0] = undefined;
        this.onespecProvider.hdd_detail[1] = 0;
        this.onespecProvider.hdd_detail[2] = undefined;
        break;
      case 5:
        this.onespecProvider.ssd = undefined;
        this.onespecProvider.ssd_detail[0] = undefined;
        this.onespecProvider.ssd_detail[1] = 0;
        this.onespecProvider.ssd_detail[2] = undefined;
        break;
      case 6:
        this.onespecProvider.psu = undefined;
        this.onespecProvider.psu_detail[0] = undefined;
        this.onespecProvider.psu_detail[1] = 0;
        this.onespecProvider.psu_detail[2] = undefined;
        break;
      case 7:
        this.onespecProvider.case = undefined;
        this.onespecProvider.case_detail[0] = undefined;
        this.onespecProvider.case_detail[1] = 0;
        this.onespecProvider.case_detail[2] = undefined;
        break;
      case 8:
        this.onespecProvider.cpu_cooler = undefined;
        this.onespecProvider.cpu_cooler_detail[0] = undefined;
        this.onespecProvider.cpu_cooler_detail[1] = 0;
        this.onespecProvider.cpu_cooler_detail[2] = undefined;
        break;
      case 9:
        this.onespecProvider.monitor = undefined;
        this.onespecProvider.monitor_detail[0] = undefined;
        this.onespecProvider.monitor_detail[1] = 0;
        this.onespecProvider.monitor_detail[2] = undefined;
        break;
    }

    this.updateVar();
  }

  //--- UPDATE REALTIME ---

  

  updateVar() {
    this.specname = this.onespecProvider.specname;
    this.file_edit = this.onespecProvider.file_edit;

    this.updateCpu();
    this.updateMainboard();
    this.updateVga();
    this.updateMemory();
    this.updatehdd();
    this.updatessd();
    this.updatepsu();
    this.updatecase();
    this.updatecpu_cooler();
    this.updatemonitor();
    this.updatePrice();
  }

  updateCpu() {
    this.cpu = this.onespecProvider.cpu;
    this.cpu_detail = this.onespecProvider.cpu_detail;
  }

  updateMainboard() {
    this.mainboard = this.onespecProvider.mainboard;
    this.mainboard_detail = this.onespecProvider.mainboard_detail;
  }

  updateVga() {
    this.vga = this.onespecProvider.vga;
    this.vga_detail = this.onespecProvider.vga_detail;
  }

  updateMemory() {
    this.memory = this.onespecProvider.memory;
    this.memory_detail = this.onespecProvider.memory_detail;
  }

  updatehdd() {
    this.hdd = this.onespecProvider.hdd;
    this.hdd_detail = this.onespecProvider.hdd_detail;
  }

  updatessd() {
    this.ssd = this.onespecProvider.ssd;
    this.ssd_detail = this.onespecProvider.ssd_detail;
  }

  updatepsu() {
    this.psu = this.onespecProvider.psu;
    this.psu_detail = this.onespecProvider.psu_detail;
  }

  updatecase() {
    this.case = this.onespecProvider.case;
    this.case_detail = this.onespecProvider.case_detail;
  }

  updatecpu_cooler() {
    this.cpu_cooler = this.onespecProvider.cpu_cooler;
    this.cpu_cooler_detail = this.onespecProvider.cpu_cooler_detail;
  }

  updatemonitor() {
    this.monitor = this.onespecProvider.monitor;
    this.monitor_detail = this.onespecProvider.monitor_detail;
  }

  updatePrice() {

    this.price_now = this.onespecProvider.cpu_detail[1];
    this.price_now += this.onespecProvider.mainboard_detail[1];
    this.price_now += this.onespecProvider.vga_detail[1];
    this.price_now += this.onespecProvider.memory_detail[1];
    this.price_now += this.onespecProvider.hdd_detail[1];
    this.price_now += this.onespecProvider.ssd_detail[1];
    this.price_now += this.onespecProvider.psu_detail[1];
    this.price_now += this.onespecProvider.case_detail[1];
    this.price_now += this.onespecProvider.cpu_cooler_detail[1];
    this.price_now += this.onespecProvider.monitor_detail[1];

  }
  // ---------------------

}
