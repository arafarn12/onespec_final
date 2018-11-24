webpackJsonp([1],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restdb_restdb__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_onespec_onespec__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, file, restProvider, onespecProvider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.restProvider = restProvider;
        this.onespecProvider = onespecProvider;
        this.toastCtrl = toastCtrl;
        this.loop = new Array();
        this.listname = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.onespecProvider.initialPrice();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.updateVar();
    };
    HomePage.prototype.updateVar = function () {
        this.loop.length = 0;
        this.listname.length = 0;
        this.resultJSON = undefined;
        this.loadFileFromStorage();
    };
    HomePage.prototype.loadFileFromStorage = function () {
        var _this = this;
        var dirName;
        var maindir = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
        var result = this.file.createDir(this.file.externalRootDirectory, "", true);
        maindir.then(function (data) {
            _this.mainDir = data.toURL();
        }).catch(function (error) {
            _this.toastCtrl.create({
                message: 'ไม่สามารถเปิดโฟลเดอร์ได้',
                duration: 2000,
                position: 'bottom'
            }).present();
        });
        result.then(function (data) {
            dirName = data.toURL();
            var showallitel = _this.file.listDir(dirName, "onespec");
            showallitel.then(function (entries) {
                _this.resultJSON = entries;
                //alert("JSON Entry : " + JSON.stringify(this.resultJSON.name));
                _this.listAllfile();
            }).catch(function (error) {
                alert("มีข้อผิดพลาด");
            });
        }).catch(function (error) {
            _this.toastCtrl.create({
                message: 'ไม่สามารถเปิดโฟลเดอร์ได้',
                duration: 2000,
                position: 'bottom'
            }).present();
        });
    };
    HomePage.prototype.listAllfile = function () {
        var temp_item;
        var re = /.json/gi;
        for (var _i = 0, _a = this.resultJSON; _i < _a.length; _i++) {
            var item = _a[_i];
            temp_item = item.name.replace(re, "");
            this.loadFile(temp_item);
        }
    };
    HomePage.prototype.loadFile = function (name) {
        var _this = this;
        var specname = "";
        var filePath = name + ".json";
        this.file.readAsText(this.mainDir, filePath).then(function (contents) {
            var obj = JSON.parse(contents);
            specname = obj.specname;
            _this.listname.push(specname);
            _this.loop.push(name);
        });
    };
    HomePage.prototype.loadTime = function (time) {
        return time.toString();
    };
    HomePage.prototype.createNew = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */], { new: true });
    };
    HomePage.prototype.loadfileFromID = function (name) {
        this.onespecProvider.file_edit = name;
        this.loadStruct(name);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.loadStruct = function (name) {
        var _this = this;
        var filePath = name + ".json";
        this.file.readAsText(this.mainDir, filePath).then(function (contents) {
            var obj = JSON.parse(contents);
            _this.onespecProvider.cpu = obj.cpu;
            _this.onespecProvider.cpu_detail[0] = obj.cpu_name;
            _this.onespecProvider.cpu_detail[1] = obj.cpu_price;
            _this.onespecProvider.cpu_detail[2] = obj.cpu_img;
            _this.onespecProvider.mainboard = obj.mainboard;
            _this.onespecProvider.mainboard_detail[0] = obj.mainboard_name;
            _this.onespecProvider.mainboard_detail[1] = obj.mainboard_price;
            _this.onespecProvider.mainboard_detail[2] = obj.mainboard_img;
            _this.onespecProvider.vga = obj.vga;
            _this.onespecProvider.vga_detail[0] = obj.vga_name;
            _this.onespecProvider.vga_detail[1] = obj.vga_price;
            _this.onespecProvider.vga_detail[2] = obj.vga_img;
            _this.onespecProvider.memory = obj.memory;
            _this.onespecProvider.memory_detail[0] = obj.memory_name;
            _this.onespecProvider.memory_detail[1] = obj.memory_price;
            _this.onespecProvider.memory_detail[2] = obj.memory_img;
            _this.onespecProvider.hdd = obj.hdd;
            _this.onespecProvider.hdd_detail[0] = obj.hdd_name;
            _this.onespecProvider.hdd_detail[1] = obj.hdd_price;
            _this.onespecProvider.hdd_detail[2] = obj.hdd_img;
            _this.onespecProvider.ssd = obj.ssd;
            _this.onespecProvider.ssd_detail[0] = obj.ssd_name;
            _this.onespecProvider.ssd_detail[1] = obj.ssd_price;
            _this.onespecProvider.ssd_detail[2] = obj.ssd_img;
            _this.onespecProvider.psu = obj.psu;
            _this.onespecProvider.psu_detail[0] = obj.psu_name;
            _this.onespecProvider.psu_detail[1] = obj.psu_price;
            _this.onespecProvider.psu_detail[2] = obj.psu_img;
            _this.onespecProvider.case = obj.case;
            _this.onespecProvider.case_detail[0] = obj.case_name;
            _this.onespecProvider.case_detail[1] = obj.case_price;
            _this.onespecProvider.case_detail[2] = obj.case_img;
            _this.onespecProvider.cpu_cooler = obj.cpu_cooler;
            _this.onespecProvider.cpu_cooler_detail[0] = obj.cpu_cooler_name;
            _this.onespecProvider.cpu_cooler_detail[1] = obj.cpu_cooler_price;
            _this.onespecProvider.cpu_cooler_detail[2] = obj.cpu_cooler_img;
            _this.onespecProvider.monitor = obj.monitor;
            _this.onespecProvider.monitor_detail[0] = obj.monitor_name;
            _this.onespecProvider.monitor_detail[1] = obj.monitor_price;
            _this.onespecProvider.monitor_detail[2] = obj.monitor_img;
            _this.onespecProvider.specname = obj.specname;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar class="toolbar toolbar-ios" no-border-top="" color="dark">\n    <ion-buttons start="" class="bar-buttons bar-buttons-ios">\n    </ion-buttons>\n    <ion-buttons end="" class="bar-buttons bar-buttons-ios">\n      <div style="color: #f5ce19; font-size: 30px; padding-top: 7px; padding-right: 10px; " (click)="createNew()">\n          <ion-icon name="add-circle"></ion-icon>\n      </div>\n        \n    </ion-buttons>\n    <div class="toolbar-content toolbar-content-ios">\n\n      <ion-title class="title title-ios">\n        <div class="toolbar-title toolbar-title-ios"><img src="assets/onespec/logo.png" width="170"/></div>\n      </ion-title>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="one-content">\n  <div style="text-align: center; color: #fff;">\n    <h2>รายการทั้งหมด</h2>\n  </div>\n\n  <ion-list class="onelist">\n    <ion-item *ngFor="let item of loop; let i = index" (click)="loadfileFromID(item)">\n      <div>\n        <h1>{{listname[i]}}</h1>\n      </div>\n\n      สร้างเมื่อ : {{loadTime(item) | date: \'dd/MM/yyyy\'}}\n      <ion-thumbnail item-end style="text-align: center">\n        <!--<ion-icon name="md-trash" class="one-icon" style="font-size: 30px;"></ion-icon>-->\n        <img src="assets/onespec/pc.png">\n      </ion-thumbnail>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restdb_restdb__["a" /* RestdbProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_onespec_onespec__["a" /* OnespecProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showlist_showlist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_onespec_onespec__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restdb_restdb__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, onespecProvider, toastCtrl, restProvider, file, navParams) {
        this.navCtrl = navCtrl;
        this.onespecProvider = onespecProvider;
        this.toastCtrl = toastCtrl;
        this.restProvider = restProvider;
        this.file = file;
        this.navParams = navParams;
        this.new = false;
        this.price_now = 0;
        this.cpu_detail = new Array();
        this.mainboard_detail = new Array();
        this.vga_detail = new Array();
        this.memory_detail = new Array();
        this.hdd_detail = new Array();
        this.ssd_detail = new Array();
        this.psu_detail = new Array();
        this.case_detail = new Array();
        this.cpu_cooler_detail = new Array();
        this.monitor_detail = new Array();
        // -------------------------
        this.menubox = [
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
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        this.new = this.navParams.get("new");
        if (this.new) {
            this.unAssignValue();
        }
        this.updateVar();
    };
    AboutPage.prototype.ionViewWillEnter = function () {
        this.updateVar();
    };
    AboutPage.prototype.ionViewDidEnter = function () {
        this.updateVar();
    };
    AboutPage.prototype.openShowList = function (num) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__showlist_showlist__["a" /* ShowlistPage */], { index: num });
    };
    AboutPage.prototype.saveName = function () {
        this.onespecProvider.setSpecname(this.specnameInput.value);
        var toast = this.toastCtrl.create({
            message: 'บันทึกชื่อเรียบร้อยแล้ว',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    AboutPage.prototype.saveSpec = function () {
        var _this = this;
        var jsonformat = this.onespecProvider.prepareFile();
        var dirName;
        var result = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
        var timestamp;
        if (this.file_edit) {
            timestamp = this.file_edit;
        }
        else {
            timestamp = new Date().valueOf();
        }
        result.then(function (data) {
            dirName = data.toURL();
            _this.file.writeFile(dirName, timestamp.toString() + ".json", jsonformat, { replace: true });
            _this.toastCtrl.create({
                message: 'บันทึกไฟล์สำเร็จ',
                duration: 2000,
                position: 'bottom'
            }).present();
        }).catch(function (error) {
            _this.toastCtrl.create({
                message: 'ไม่สามารถบันทึกไฟล์ได้',
                duration: 2000,
                position: 'bottom'
            }).present();
        });
        //this.navCtrl.parent.select(0);
        //alert("บันทึกไฟล์ไปที่ " + timestamp + ".json");
    };
    AboutPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AboutPage.prototype.removeFile = function () {
        var _this = this;
        var dirName;
        var result = this.file.createDir(this.file.externalRootDirectory, "onespec", true);
        var timestamp = this.file_edit;
        result.then(function (data) {
            dirName = data.toURL();
            _this.file.removeFile(dirName, timestamp.toString() + ".json");
            _this.toastCtrl.create({
                message: 'ลบไฟล์สำเร็จ',
                duration: 2000,
                position: 'bottom'
            }).present();
            _this.navCtrl.parent.select(0);
        }).catch(function (error) {
            _this.toastCtrl.create({
                message: 'ไม่สามารถลบไฟล์ได้',
                duration: 2000,
                position: 'bottom'
            }).present();
        });
        this.unAssignValue();
        this.navCtrl.pop();
        //alert("ลบไฟล์ " + timestamp + ".json");
    };
    AboutPage.prototype.createNew = function () {
        this.unAssignValue();
        alert("สร้างใหม่");
    };
    AboutPage.prototype.unAssignValue = function () {
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
    };
    AboutPage.prototype.unsetSelect = function (item) {
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
    };
    //--- UPDATE REALTIME ---
    AboutPage.prototype.updateVar = function () {
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
    };
    AboutPage.prototype.updateCpu = function () {
        this.cpu = this.onespecProvider.cpu;
        this.cpu_detail = this.onespecProvider.cpu_detail;
    };
    AboutPage.prototype.updateMainboard = function () {
        this.mainboard = this.onespecProvider.mainboard;
        this.mainboard_detail = this.onespecProvider.mainboard_detail;
    };
    AboutPage.prototype.updateVga = function () {
        this.vga = this.onespecProvider.vga;
        this.vga_detail = this.onespecProvider.vga_detail;
    };
    AboutPage.prototype.updateMemory = function () {
        this.memory = this.onespecProvider.memory;
        this.memory_detail = this.onespecProvider.memory_detail;
    };
    AboutPage.prototype.updatehdd = function () {
        this.hdd = this.onespecProvider.hdd;
        this.hdd_detail = this.onespecProvider.hdd_detail;
    };
    AboutPage.prototype.updatessd = function () {
        this.ssd = this.onespecProvider.ssd;
        this.ssd_detail = this.onespecProvider.ssd_detail;
    };
    AboutPage.prototype.updatepsu = function () {
        this.psu = this.onespecProvider.psu;
        this.psu_detail = this.onespecProvider.psu_detail;
    };
    AboutPage.prototype.updatecase = function () {
        this.case = this.onespecProvider.case;
        this.case_detail = this.onespecProvider.case_detail;
    };
    AboutPage.prototype.updatecpu_cooler = function () {
        this.cpu_cooler = this.onespecProvider.cpu_cooler;
        this.cpu_cooler_detail = this.onespecProvider.cpu_cooler_detail;
    };
    AboutPage.prototype.updatemonitor = function () {
        this.monitor = this.onespecProvider.monitor;
        this.monitor_detail = this.onespecProvider.monitor_detail;
    };
    AboutPage.prototype.updatePrice = function () {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("specnameInput"),
        __metadata("design:type", Object)
    ], AboutPage.prototype, "specnameInput", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\about\about.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            จัดสเปคใหม่\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="one-content">\n    <div class="rcorners2">\n        <ion-item style="background-color: #27507d; color: #fff">\n            <ion-label style=" color: #fff">Spec Name</ion-label>\n            <ion-input type="text" #specnameInput value="{{ this.onespecProvider.specname }}" (change)="saveName()"></ion-input>\n        </ion-item>\n        <div style="text-align:center">\n            <div *ngIf="file_edit else fileeditnotfound">\n                <button ion-button small color="secondary" (click)="saveSpec()">\n                    <ion-icon name="save"></ion-icon>\n                    บันทึก\n                </button>\n                <button ion-button small color="danger" (click)="removeFile()">\n                    <ion-icon name="trash"></ion-icon>\n                    ลบ\n                </button>\n                <button ion-button small (click)="createNew()">\n                    <ion-icon name="add"></ion-icon>\n                    สร้างใหม่\n                </button>\n            </div>\n            <ng-template #fileeditnotfound>\n                <button ion-button small color="secondary" (click)="saveSpec()">\n                    <ion-icon name="save"></ion-icon>\n                    บันทึก\n                </button>\n                <button ion-button small (click)="createNew()">\n                    <ion-icon name="add"></ion-icon>\n                    สร้างใหม่\n                </button>\n            </ng-template>\n        </div>\n\n    </div>\n    <div style="text-align:center; color: #fff;">\n        ราคาในขณะนี้\n    </div>\n\n    <div class="one-price">\n\n        <font style="color: #444; font-size: 30px; font-weight: bold;">{{price_now}} บาท</font>\n    </div>\n\n    <div style="padding: 3%">\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="cpu else cpunotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.cpu_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.cpu_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.cpu_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #cpunotFound>\n                <div class="list-col3" (click)="openShowList(0)">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก CPU</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(0)" *ngIf="cpu else cpuSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #cpuSelect>\n                <div class="list-col5" (click)="openShowList(0)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="mainboard else mainboardnotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.mainboard_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.mainboard_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.mainboard_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #mainboardnotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Mainboard</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(1)" *ngIf="mainboard else mainboardSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #mainboardSelect>\n                <div class="list-col5" (click)="openShowList(1)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="vga else vganotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.vga_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.vga_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.vga_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #vganotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก VGA Card</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(2)" *ngIf="vga else vgaSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #vgaSelect>\n                <div class="list-col5" (click)="openShowList(2)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="memory else memorynotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.memory_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.memory_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.memory_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #memorynotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Memory</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(3)" *ngIf="memory else memorySelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #memorySelect>\n                <div class="list-col5" (click)="openShowList(3)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="hdd else hddnotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.hdd_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.hdd_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.hdd_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #hddnotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Hard Disk</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(4)" *ngIf="hdd else hddSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #hddSelect>\n                <div class="list-col5" (click)="openShowList(4)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="ssd else ssdnotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.ssd_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.ssd_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.ssd_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #ssdnotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Solid State Drive</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(5)" *ngIf="ssd else ssdSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #ssdSelect>\n                <div class="list-col5" (click)="openShowList(5)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="psu else psunotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.psu_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.psu_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.psu_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #psunotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Power Supply</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(6)" *ngIf="psu else psuSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #psuSelect>\n                <div class="list-col5" (click)="openShowList(6)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="case else casenotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.case_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.case_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.case_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #casenotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Case</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(7)" *ngIf="case else caseSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #caseSelect>\n                <div class="list-col5" (click)="openShowList(7)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="cpu_cooler else cpu_coolernotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.cpu_cooler_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.cpu_cooler_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.cpu_cooler_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #cpu_coolernotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก CPU Cooler</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(8)" *ngIf="cpu_cooler else cpu_coolerSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #cpu_coolerSelect>\n                <div class="list-col5" (click)="openShowList(8)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n        <div class="row aboutlist">\n            <div class="list-col1"></div>\n            <div class="list-col2"></div>\n            <div class="list-col3-selected" *ngIf="monitor else monitornotFound">\n                <div class="row aboutlist-row">\n                    <div class="aboutlist-row-img">\n                        <ion-img width="50" height="50" src="https://www.jib.co.th{{this.monitor_detail[2]}}"></ion-img>\n\n                    </div>\n                    <div class="aboutlist-row-detail">\n                        <font class="aboutlist-row-detail-font">{{this.monitor_detail[0]}}</font><br>\n                        <strong class="aboutlist-row-detail-strong">ราคา {{this.monitor_detail[1]}} บาท</strong>\n\n                    </div>\n                </div>\n            </div>\n            <ng-template #monitornotFound>\n                <div class="list-col3">\n                    <font class="aboutlist-notfound-text">ยังไม่เลือก Monitor</font>\n                </div>\n            </ng-template>\n            <div class="list-col4"></div>\n            <div class="list-col5" (click)="unsetSelect(9)" *ngIf="monitor else monitorSelect">\n                <ion-icon name="close-circle-outline"></ion-icon>\n            </div>\n            <ng-template #monitorSelect>\n                <div class="list-col5" (click)="openShowList(9)">\n                    <ion-icon ios="ios-menu" md="md-menu"></ion-icon>\n                </div>\n            </ng-template>\n        </div>\n\n\n    </div>\n\n\n    <!--<ion-grid class="aboutlist">\n              <ion-row>\n                <ion-col col-1 style="background-color: #ea6640;">\n                </ion-col>\n                <ion-col col-100>\n                  <h3>เลือก CPU</h3>\n                </ion-col>\n                <ion-col col-18>\n                    <ion-icon name="settings"></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>-->\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_onespec_onespec__["a" /* OnespecProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_restdb_restdb__["a" /* RestdbProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restdb_restdb__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_onespec_onespec__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ShowlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowlistPage = /** @class */ (function () {
    function ShowlistPage(navCtrl, navParams, restProvider, onespecProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.onespecProvider = onespecProvider;
    }
    ShowlistPage.prototype.ionViewDidLoad = function () {
        this.index = this.navParams.get("index");
    };
    ShowlistPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.restProvider.feed(this.index).subscribe(function (result) {
            _this.productResult = result;
            //console.log(this.productResult[0]);
        });
    };
    ShowlistPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ShowlistPage.prototype.selectItem = function (item, name, price, image) {
        switch (this.index) {
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
    };
    ShowlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-showlist',template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\showlist\showlist.html"*/'<!--\n  Generated template for the ShowlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n          เลือกสินค้า\n        </ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center">\n  <h3 style="color: #fff;">เลือกสินค้า</h3>\n  </div>\n  \n  <div *ngIf="productResult" class="showlist">\n    \n\n    <ion-grid>\n        <ion-row>\n            <ion-col col-6 *ngFor="let item of productResult" class="showlist-col">\n                    <img src="https://www.jib.co.th{{item.image}}"/>\n                    <div class="card-title" class="topname">{{item.name}}</div>\n                    <div class="card-subtitle" class="price">ราคา {{item.price}} บาท</div>\n                    <div style="margin: auto; text-align: center">\n                      <button ion-button small (click)="selectItem(item.id,item.name,item.price,item.image)">เลือก</button>\n                    </div>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\showlist\showlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_restdb_restdb__["a" /* RestdbProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_onespec_onespec__["a" /* OnespecProvider */]])
    ], ShowlistPage);
    return ShowlistPage;
}());

//# sourceMappingURL=showlist.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/showlist/showlist.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n        <img src="assets/onespec/logo.png" width="170"/>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_showlist_showlist__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_restdb_restdb__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_onespec_onespec__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_showlist_showlist__["a" /* ShowlistPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/showlist/showlist.module#ShowlistPageModule', name: 'ShowlistPage', segment: 'showlist', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_showlist_showlist__["a" /* ShowlistPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_restdb_restdb__["a" /* RestdbProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_onespec_onespec__["a" /* OnespecProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        //tab1Root = HomePage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\tabs\tabs.html"*/''/*ion-inline-end:"C:\Users\Farn Enterprise\Desktop\Ionic Lab\onespec - Copy\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestdbProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RestdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestdbProvider = /** @class */ (function () {
    function RestdbProvider(http) {
        this.http = http;
        this.jsondb = ["cpu", "mainboard", "vgacard", "memory", "hdd", "ssd", "psu", "case", "cpucooler", "monitor"];
        console.log('Hello RestdbProvider Provider');
    }
    RestdbProvider.prototype.feed = function (index) {
        var url = "assets/jsondb/" + this.jsondb[index] + ".json";
        return this.http.get(url);
    };
    RestdbProvider.prototype.loadFile = function (path) {
        return this.http.get(path);
    };
    RestdbProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestdbProvider);
    return RestdbProvider;
}());

//# sourceMappingURL=restdb.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnespecProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the OnespecProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OnespecProvider = /** @class */ (function () {
    function OnespecProvider(http) {
        this.http = http;
        this.specname = "จัดสเปคคอม";
        this.cpu_detail = new Array();
        this.mainboard_detail = new Array();
        this.vga_detail = new Array();
        this.memory_detail = new Array();
        this.hdd_detail = new Array();
        this.ssd_detail = new Array();
        this.psu_detail = new Array();
        this.case_detail = new Array();
        this.cpu_cooler_detail = new Array();
        this.monitor_detail = new Array();
    }
    OnespecProvider.prototype.initialPrice = function () {
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
    };
    OnespecProvider.prototype.setSpecname = function (name) {
        this.specname = name.toString();
    };
    OnespecProvider.prototype.setCpu = function (id) {
        this.cpu = id;
    };
    OnespecProvider.prototype.setMainboard = function (id) {
        this.mainboard = id;
    };
    OnespecProvider.prototype.setVga = function (id) {
        this.vga = id;
    };
    OnespecProvider.prototype.setMemory = function (id) {
        this.memory = id;
    };
    OnespecProvider.prototype.setHDD = function (id) {
        this.hdd = id;
    };
    OnespecProvider.prototype.setSSD = function (id) {
        this.ssd = id;
    };
    OnespecProvider.prototype.setPSU = function (id) {
        this.psu = id;
    };
    OnespecProvider.prototype.setCase = function (id) {
        this.case = id;
    };
    OnespecProvider.prototype.setCooler = function (id) {
        this.cpu_cooler = id;
    };
    OnespecProvider.prototype.setMonitor = function (id) {
        this.monitor = id;
    };
    OnespecProvider.prototype.prepareFile = function () {
        var jsonformat = {
            specname: this.specname,
            cpu: this.cpu,
            mainboard: this.mainboard,
            vga: this.vga,
            memory: this.memory,
            hdd: this.hdd,
            ssd: this.ssd,
            psu: this.psu,
            case: this.case,
            cpu_cooler: this.cpu_cooler,
            monitor: this.monitor,
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
    };
    OnespecProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OnespecProvider);
    return OnespecProvider;
}());

//# sourceMappingURL=onespec.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map