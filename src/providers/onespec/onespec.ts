import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OnespecProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OnespecProvider {

  constructor(public http: HttpClient) {
  }

  //@ One-Spec Temporary Sesssion :D
  file_edit:any;
  specname:any = "จัดสเปคคอม";

  cpu:any;
  cpu_detail:any = new Array();

  mainboard:any;
  mainboard_detail:any = new Array();

  vga:any;
  vga_detail:any = new Array();

  memory:any;
  memory_detail:any = new Array();

  hdd:any;
  hdd_detail:any = new Array();

  ssd:any;
  ssd_detail:any = new Array();

  psu:any;
  psu_detail:any = new Array();

  case:any;
  case_detail:any = new Array();

  cpu_cooler:any;
  cpu_cooler_detail:any = new Array();

  monitor:any
  monitor_detail:any = new Array();


  initialPrice() {
    /* Set price = 0 */
      this.cpu_detail[1] = 0;
      this.mainboard_detail[1] = 0;
      this.vga_detail[1] = 0;
      this.memory_detail[1] = 0;
      this.hdd_detail[1] = 0;
      this.ssd_detail[1] = 0;
      this.psu_detail[1] = 0;
      this.case_detail[1] = 0;
      this.cpu_cooler_detail[1] = 0;
      this.monitor_detail[1] = 0;
    /* -------------- */
  }

  setSpecname(name:String) {
    this.specname = name.toString();
  }
  
  setCpu(id:Number) {
    this.cpu = id;
  }

  setMainboard(id:Number) {
    this.mainboard = id;
  }

  setVga(id:Number) {
    this.vga = id;
  }

  setMemory(id:Number) {
    this.memory = id;
  }

  setHDD(id:Number) {
    this.hdd = id;
  }

  setSSD(id:Number) {
    this.ssd = id;
  }

  setPSU(id:Number) {
    this.psu = id;
  }

  setCase(id:Number) {
    this.case = id;
  }

  setCooler(id:Number) {
    this.cpu_cooler = id;
  }

  setMonitor(id:Number) {
    this.monitor = id;
  }

  prepareFile():any {
    let jsonformat =
      {
        specname : this.specname,

        cpu : this.cpu,
        mainboard : this.mainboard,
        vga : this.vga,
        memory : this.memory,
        hdd : this.hdd,
        ssd : this.ssd,
        psu : this.psu,
        case : this.case,
        cpu_cooler : this.cpu_cooler,
        monitor : this.monitor,

        cpu_name: this.cpu_detail[0],
        cpu_price: this.cpu_detail[1],
        cpu_img: this.cpu_detail[2],

        mainboard_name: this.mainboard_detail[0],
        mainboard_price: this.mainboard_detail[1],
        mainboard_img: this.mainboard_detail[2],

        vga_name: this.vga_detail[0],
        vga_price: this.vga_detail[1],
        vga_img: this.vga_detail[2],

        memory_name: this.memory_detail[0],
        memory_price: this.memory_detail[1],
        memory_img: this.memory_detail[2],

        hdd_name: this.hdd_detail[0],
        hdd_price: this.hdd_detail[1],
        hdd_img: this.hdd_detail[2],

        ssd_name: this.ssd_detail[0],
        ssd_price: this.ssd_detail[1],
        ssd_img: this.ssd_detail[2],

        psu_name: this.psu_detail[0],
        psu_price: this.psu_detail[1],
        psu_img: this.psu_detail[2],

        case_name: this.case_detail[0],
        case_price: this.case_detail[1],
        case_img: this.case_detail[2],

        cpu_cooler_name: this.cpu_cooler_detail[0],
        cpu_cooler_price: this.cpu_cooler_detail[1],
        cpu_cooler_img: this.cpu_cooler_detail[2],

        monitor_name: this.monitor_detail[0],
        monitor_price: this.monitor_detail[1],
        monitor_img: this.monitor_detail[2]
      };

    return jsonformat;
  }

  

}
