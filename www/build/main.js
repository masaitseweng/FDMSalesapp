webpackJsonp([11],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdddiscountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdddiscountPage = /** @class */ (function () {
    function AdddiscountPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.totaldiscount = 0;
        // onediscount:any = 0.05
        this.totaldiscountvalue = 0;
        this.discount = 0;
        this.disabledone = false;
        this.disabledtwo = false;
        this.disabledthree = false;
        this.disabledfour = false;
        this.EnableSend = true;
        this.discountformated = this.discount;
        this.itemcheck = navParams.get('itemcheck');
        console.log("", this.itemcheck);
        this.subtotal = navParams.get('subtotal');
        console.log("", this.subtotal);
        this.sub = this.subtotal;
        this.subformat = Number.parseFloat(this.subtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.vat = navParams.get('vat');
        console.log("", this.vat);
        this.total = navParams.get('total');
        this.totalformat = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("", this.total);
    }
    AdddiscountPage.prototype.one = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Discount',
            message: 'clients is given 5% discount',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.perc = 5;
                        _this.percentage = 0.05;
                        _this.disabledone = true;
                        _this.disabledtwo = true;
                        _this.disabledthree = true;
                        _this.disabledfour = true;
                        _this.EnableSend = false;
                        console.log(item);
                        _this.discount = parseFloat(_this.total) * _this.percentage;
                        _this.discountformated = Number.parseFloat(_this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        console.log("formated", _this.discountformated);
                        console.log("one", _this.discount);
                        _this.total = parseFloat(_this.total) - parseFloat(_this.discount);
                        console.log("one", _this.total);
                        _this.totalformat = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            ]
        });
        confirm.present();
    };
    AdddiscountPage.prototype.two = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Discount',
            message: 'clients is given 10% discount',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.perc = 10;
                        _this.percentage = 0.1;
                        _this.disabledone = true;
                        _this.disabledtwo = true;
                        _this.disabledthree = true;
                        _this.disabledfour = true;
                        _this.EnableSend = false;
                        console.log(item);
                        _this.discount = parseFloat(_this.total) * _this.percentage;
                        _this.discountformated = Number.parseFloat(_this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        console.log("formated", _this.discountformated);
                        console.log("one", _this.discount);
                        _this.total = parseFloat(_this.total) - parseFloat(_this.discount);
                        console.log("one", _this.total);
                        _this.totalformat = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            ]
        });
        confirm.present();
    };
    AdddiscountPage.prototype.three = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Discount',
            message: 'clients is given 25% discount',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.perc = 25;
                        _this.percentage = 0.25;
                        _this.disabledone = true;
                        _this.disabledtwo = true;
                        _this.disabledthree = true;
                        _this.disabledfour = true;
                        _this.EnableSend = false;
                        console.log(item);
                        _this.discount = parseFloat(_this.total) * _this.percentage;
                        _this.discountformated = Number.parseFloat(_this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        console.log("formated", _this.discountformated);
                        console.log("one", _this.discount);
                        _this.total = parseFloat(_this.total) - parseFloat(_this.discount);
                        console.log("one-total", _this.total);
                        _this.totalformat = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            ]
        });
        confirm.present();
    };
    AdddiscountPage.prototype.four = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Discount',
            message: 'clients is given 50% discount',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.perc = 50;
                        _this.percentage = 0.50;
                        _this.disabledone = true;
                        _this.disabledtwo = true;
                        _this.disabledthree = true;
                        _this.disabledfour = true;
                        _this.EnableSend = false;
                        console.log(item);
                        _this.discount = parseFloat(_this.total) * _this.percentage;
                        _this.discountformated = Number.parseFloat(_this.discount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        console.log("formated", _this.discountformated);
                        console.log("one", _this.discount);
                        _this.total = parseFloat(_this.total) - parseFloat(_this.discount);
                        _this.totalformat = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            ]
        });
        confirm.present();
    };
    AdddiscountPage.prototype.send = function () {
        var discount = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], {
            itemcheck: this.itemcheck,
            subtotal: this.sub,
            discountprice: this.discount,
            total: this.total,
            percentage: this.perc,
            discount: discount
        });
    };
    AdddiscountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdddiscountPage');
    };
    AdddiscountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adddiscount',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/adddiscount/adddiscount.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>adddiscount</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n      <ion-list >\n\n        <ion-item-divider text-center color="fourtwentylight">\n         Client discount \n        </ion-item-divider>\n\n        <ion-card color="danger" >\n          <ion-item color="danger">\n\n            <ion-grid>\n              <ion-row>\n                <ion-col col-12 text-center>\n                  <button detail-none  color="danger" ion-item>\n                    <ion-icon name="ios-trending-up-outline" item-start></ion-icon>\n                    <strong>Subtotal</strong> <span> R{{subformat}} &nbsp;</span>\n                  </button>\n\n\n                </ion-col>\n              </ion-row>\n\n              <ion-row>\n                <ion-col col-12>\n                    <button detail-none color="danger" ion-item>\n                      <ion-icon name="cut" item-start></ion-icon>\n                      <strong>Discount</strong> <span> R{{discountformated }} &nbsp;</span>\n                    </button>\n                \n                </ion-col>\n              </ion-row>\n\n\n              <ion-row>\n                <ion-col col-12>\n                <button detail-none color="danger" ion-item>\n                  <ion-icon name="ios-trophy-outline" item-start></ion-icon>\n                  <strong>Total</strong> <span> R{{totalformat}} &nbsp;</span>\n                </button>\n              \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n\n      \n\n     \n\n         \n\n           \n      \n          </ion-item>\n          <ion-item text-center class="compact">\n            <ion-row no-padding>\n              <ion-col col-12 no-padding>\n                <button small style="width: 55px;" color="danger" ion-button icon-only [disabled]="disabledone" (click)="one(item)">\n                  5%\n                </button>\n                  <button small style="width: 55px;" color="danger" ion-button icon-only [disabled]="disabledtwo" (click)="two(item)">\n                    10%\n                  </button>\n                  <button small style="width: 55px;" color="danger" ion-button icon-only [disabled]="disabledthree" (click)="three(item)">\n                    25%\n                  </button>\n                    <button small style="width: 55px;" color="danger" ion-button icon-only [disabled]="disabledfour" (click)="four(item)">\n                      50%\n                    </button>\n              </ion-col>\n              <ion-col col-4 style="text-align: right;">\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n        </ion-card>\n      </ion-list>\n\n          <button ion-button block color="danger" [disabled]="EnableSend" (click)="send()">\n          \n            Send\n          </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/adddiscount/adddiscount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdddiscountPage);
    return AdddiscountPage;
}());

//# sourceMappingURL=adddiscount.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductitemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_view__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addqty_addqty__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductitemsPage = /** @class */ (function () {
    function ProductitemsPage(navCtrl, navParams, api, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.calculate = 0;
        this.addObjects = [];
        this.price = 0;
        this.amount = 0;
        this.vatamount = 0;
        this.vat = 0;
        this.total = 0;
        // console.log("items", this.productitems)
        this.item = navParams.get('item');
        console.log("item", this.item.id);
        console.log("name", this.item.name);
        this.addeditems = navParams.get('addeditems');
        console.log("sec item added", this.addeditems);
        if (this.addeditems != undefined) {
            for (var i in this.addeditems) {
                this.calculate = this.calculate + parseFloat(this.addeditems[i].amount);
                //price to display to the view and format
                this.amount = parseFloat(this.calculate).toFixed(2);
                console.log("total is", this.calculate);
            }
        }
        /////////////////////////////////////////////////////////
        ///loop array values for price
        this.viewname = this.item.name;
        this.api.getProducts(this.item.id).subscribe(function (DATA) {
            console.log("testing", DATA);
            _this.productitems = DATA;
        });
    }
    // // //checked item
    // selected(productitem){
    //   console.log('product', productitem)
    //        if (productitem.checked == true) {
    //       console.log("add") 
    //         }
    //         else{
    //          console.log("add") 
    //         }
    // }
    // checked item
    ProductitemsPage.prototype.selected = function (productitem) {
        if (productitem.checked == true) {
            console.log("object", productitem);
            /////////////////////////////////////////////////////////////
            ////                  if object not added             //////
            ////////////////////////////////////////////////////////////
            if (this.addeditems != undefined) {
                console.log(productitem);
                console.log(this.addeditems);
                var checkarray = __WEBPACK_IMPORTED_MODULE_6_lodash__["some"](this.addeditems, productitem);
                console.log(checkarray);
                this.checkarrayone = checkarray;
                if (checkarray === true) {
                    this.checkboxtofalse = productitem.checked = false;
                    var alert_1 = this.alertCtrl.create({
                        title: 'Exist',
                        subTitle: 'Already added',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    //formula to calculate added items
                    this.calculate = this.calculate + parseFloat(productitem.amount);
                    //price to display to the view and format
                    this.amount = parseFloat(this.calculate).toFixed(2);
                    console.log("total is", this.calculate);
                    this.total = this.calculate;
                    console.log("total", this.total);
                    //
                    this.addeditems.push(productitem);
                    this.addObjects = this.addeditems;
                    console.log("Second value added", this.addeditems);
                    this.addedobje = this.addObjects;
                    console.log("if needed to remove this objects", this.addeditems);
                }
            }
            else {
                console.log("object", productitem);
                //formula to calculate added items
                this.calculate = this.calculate + parseFloat(productitem.amount);
                //price to display to the view and format
                this.amount = parseFloat(this.calculate).toFixed(2);
                console.log("total is", this.calculate);
                this.total = this.calculate;
                console.log("total", this.total);
                this.addedobje = this.addObjects;
                this.addedobje.push(productitem);
                console.log("new values going to be added", this.addedobje);
            }
        }
        else {
            console.log(productitem);
            console.log(this.addeditems);
            if (this.addeditems == undefined) {
                //original object
                console.log("Items", this.addObjects);
                this.addObjects.splice(productitem, 1);
                //left objects after removing. 
                console.log("removed", this.addObjects);
                //total after removing object
                this.calculate = this.calculate - parseFloat(productitem.amount);
                console.log("calculate", this.calculate);
                //total
                this.total = this.calculate;
                console.log("total", this.total);
                //price to display to the view and format
                this.amount = parseFloat(this.calculate).toFixed(2);
            }
            else {
                var arrayexist = __WEBPACK_IMPORTED_MODULE_6_lodash__["some"](this.addeditems, productitem);
                console.log("true", arrayexist);
                if (arrayexist == false) {
                    console.log("remove");
                }
                else {
                    //original object
                    console.log("Items", this.addObjects);
                    this.addObjects.splice(productitem, 1);
                    //left objects after removing. 
                    console.log("removed", this.addObjects);
                    //total after removing object
                    this.calculate = this.calculate - parseFloat(productitem.amount);
                    console.log("calculate", this.calculate);
                    //total
                    this.total = this.calculate;
                    console.log("total", this.total);
                    //price to display to the view and format
                    this.amount = parseFloat(this.calculate).toFixed(2);
                }
            }
        }
    };
    ProductitemsPage.prototype.addquote = function () {
        console.log("array", this.addedobje);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], {
            addedItems: this.addedobje
        });
    };
    ProductitemsPage.prototype.View = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_view__["a" /* ViewPage */], {
            itemcheck: this.addObjects,
            amount: this.amount,
            vat: this.vat,
            total: this.total
        });
    };
    ProductitemsPage.prototype.qty = function () {
        console.log("navigate to another page---1");
        // modify an object and add a property inside an array
        for (var iadd = 0; iadd < this.addObjects.length; iadd++) {
            console.log(this.addObjects[iadd]);
            this.addObjects[iadd].quantity = 1;
            this.addObjects[iadd].price = this.addObjects[iadd].amount;
            this.addObjects[iadd].total = this.addObjects[iadd].amount;
            console.log("hello", this.addObjects);
            console.log("modified", this.addObjects[iadd]);
            console.log(this.addObjects);
        }
        if (this.addObjects.length == 0) {
            var alert_2 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'No Item add please add an item',
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__addqty_addqty__["a" /* AddqtyPage */], {
                itemcheck: this.addObjects,
                subtotal: this.amount,
                vat: this.vat,
                total: this.total
            });
        }
    };
    // discount(){
    //   // modify an object and add a property inside an array
    //   for (var iadd = 0; iadd < this.addObjects.length; iadd++) {
    //     console.log(this.addObjects[iadd]);
    //     this.addObjects[iadd].quantity = 1
    //     this.addObjects[iadd].price = this.addObjects[iadd].amount
    //     this.addObjects[iadd].total = this.addObjects[iadd].amount
    //     console.log("hello", this.addObjects)
    //     console.log("modified", this.addObjects[iadd])
    //     console.log(this.addObjects)
    //   }
    //   this.navCtrl.push(AdddiscountPage, {
    //     itemcheck: this.addObjects,
    //     subtotal: this.amount,
    //     vat: this.vat,
    //     total: this.total
    //   })
    // }
    ProductitemsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductitemsPage');
    };
    ProductitemsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productitems',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/productitems/productitems.html"*/'\n<ion-header>\n\n  <ion-navbar color="FDMcolor">\n    <ion-title text-wrap></ion-title>\n  </ion-navbar>\n\n  <button class="price" ion-button block  clear>\n     R{{amount}}\n </button>\n\n</ion-header>\n\n\n<ion-content >\n\n\n    <ion-list>\n\n        <ion-list-header  class="headers-product" text-uppercase text-center>\n          {{viewname}}\n        </ion-list-header>\n\n       \n    \n        <ion-item  block *ngFor="let productitem of productitems;let i = index;" >\n           \n            <ion-label  text-wrap>{{productitem.name}}</ion-label>\n            <ion-label text-right >R {{productitem.amount}}</ion-label>\n            <ion-checkbox   color="danger" checked="false" [(ngModel)]="productitem.checked" (ionChange)="selected(productitem)"></ion-checkbox>        \n          </ion-item>   \n      </ion-list>\n\n      <div class="button-padding" >\n\n      <button ion-button block color="danger" (click)="qty()">\n        Add Qty\n      </button>\n      </div>\n\n\n      <div class="button-padding">\n        <button ion-button block color="danger" (click)="addquote()">\n          add another Quote\n        </button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/productitems/productitems.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductitemsPage);
    return ProductitemsPage;
}());

//# sourceMappingURL=productitems.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddqtyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__adddiscount_adddiscount__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__outstanding_outstanding__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import{InvoicePage} from '../invoice/invoice';

var AddqtyPage = /** @class */ (function () {
    function AddqtyPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.vat = 0;
        this.countqty = 1;
        this.vatamount = 0;
        this.productitems = navParams.get('itemcheck');
        console.log("items", this.productitems);
        this.subtotal = navParams.get('subtotal');
        console.log("items", this.subtotal);
    }
    AddqtyPage.prototype.changeadd = function (item) {
        console.log("items", item);
        if (item.quantity >= 10) {
            console.log("error");
        }
        else {
            item.quantity = item.quantity + 1;
            item.amount = item.quantity;
            item.amount = item.amount * parseFloat(item.price);
            console.log("total", item.amount);
            console.log("total", this.subtotal);
            //convert to double 
            this.subtotal = parseFloat(this.subtotal);
            this.subtotal = this.subtotal + parseFloat(item.price);
            // this.subtotalsum = parseFloat(this.subtotal) + parseFloat(item.price)
            console.log("subtotal", this.subtotal);
            console.log("", item.quantity);
            this.countqty = item.quantity;
        }
    };
    AddqtyPage.prototype.changeRemove = function (item) {
        var _this = this;
        console.log("hello", item);
        if (item.quantity != 1) {
            item.quantity = item.quantity - 1;
            item.amount = item.quantity;
            item.amount = item.amount * parseFloat(item.price);
            console.log("check", item.amount);
            item.amount = item.amount;
            this.total = this.total - parseFloat(item.price);
            console.log("item.price", parseFloat(item.price));
            //convert to double 
            this.subtotal = parseFloat(this.subtotal);
            this.subtotal = this.subtotal - parseFloat(item.price);
            this.countqty = item.quantity;
        }
        else {
            // nfhjfhghjg 
            console.log("hello", item);
            console.log("error");
            // this.productitems.splice(0,item)
            console.log("removed", this.productitems);
            var alert_1 = this.alertCtrl.create({
                title: 'Warning!!',
                subTitle: 'Are you sure you want to remove this item',
                buttons: [{
                        text: 'ok',
                        role: 'cancel',
                        handler: function () {
                            // console.log('Cancel clicked');
                            // var arr = [4, 5, 6];
                            var idx = _this.productitems.indexOf(item); // 1
                            // be careful, .indexOf() will return -1 if the item is not found
                            if (idx !== -1) {
                                _this.productitems.splice(idx, 1);
                                console.log("hello", _this.productitems);
                                item.amount = item.amount;
                                _this.subtotal = _this.subtotal - parseFloat(item.price);
                                console.log("item.price", parseFloat(item.price));
                                console.log("", item.quantity);
                                console.log("", item.quantity);
                                _this.countqty = item.quantity;
                            }
                        }
                    },
                    {
                        text: 'cancel',
                        handler: function () {
                            console.log('Buy clicked');
                        }
                    }]
            });
            alert_1.present();
        }
    };
    AddqtyPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        console.log(item);
        console.log(i);
        // this.total = this.subtotal
        var idx = this.productitems.indexOf(item); // 1
        console.log("idx", idx);
        var alert = this.alertCtrl.create({
            title: 'Warning!!',
            subTitle: 'Are you sure you want to remove this item',
            buttons: [
                {
                    text: 'ok',
                    handler: function () {
                        console.log('Disagree clicked');
                        //rm total quantity from price
                        console.log("total remaining", _this.subtotal);
                        console.log("total remaining", (item.amount));
                        _this.subtotal = _this.subtotal - parseFloat(item.amount);
                        console.log("total remaining", _this.total);
                        _this.productitems.splice(idx, 1);
                        localStorage.setItem('cartDetails', JSON.stringify(_this.productitems));
                        console.log("rm", _this.productitems);
                        // this.subtotal = this.total 
                    }
                }
            ]
        });
        alert.present();
    };
    AddqtyPage.prototype.Invoice = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Invoice',
            message: 'Select to view invoice or add Outstanding balance',
            buttons: [
                {
                    text: 'invoice',
                    handler: function () {
                        var invoice = true;
                        //vat
                        _this.percentage = 0.15;
                        console.log("total is", _this.total);
                        //vat
                        _this.vatamount = 0;
                        console.log("vat is", _this.vatamount);
                        //total
                        _this.total = parseFloat(_this.subtotal) + parseFloat(_this.vatamount);
                        console.log("total price check", _this.total);
                        console.log("this.total check", _this.total);
                        console.log("prodcuts", _this.productitems);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], {
                            itemcheck: _this.productitems,
                            subtotal: _this.subtotal,
                            vat: _this.vatamount,
                            invoice: invoice,
                            total: _this.total,
                        });
                    }
                },
                {
                    text: 'Outstanding',
                    handler: function () {
                        // this.percentage = 0.15
                        //vat
                        _this.vatamount = 0.00;
                        console.log("vat is", _this.vatamount);
                        //total
                        _this.total = _this.subtotal;
                        console.log("total price check", _this.total);
                        console.log("this.total check", _this.total);
                        console.log("prodcuts", _this.productitems);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__outstanding_outstanding__["a" /* OutstandingPage */], {
                            itemcheck: _this.productitems,
                            subtotal: _this.subtotal,
                            vat: _this.vatamount,
                            total: _this.total,
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AddqtyPage.prototype.ViewOrDiscountQuote = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Quote',
            message: 'Select to view quote or add a discount',
            buttons: [
                {
                    text: 'View',
                    handler: function () {
                        //vat
                        _this.percentage = 0.15;
                        console.log("total is", _this.total);
                        //vat
                        _this.vatamount = 0;
                        console.log("vat is", _this.vatamount);
                        //total
                        _this.total = parseFloat(_this.subtotal) + parseFloat(_this.vatamount);
                        console.log("total price check", _this.total);
                        console.log("this.total check", _this.total);
                        var quote = true;
                        console.log("prodcuts", _this.productitems);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], {
                            itemcheck: _this.productitems,
                            subtotal: _this.subtotal,
                            vat: _this.vatamount,
                            total: _this.total,
                            quote: quote
                        });
                    }
                },
                {
                    text: 'Discount',
                    handler: function () {
                        // this.percentage = 0.15
                        //vat
                        _this.vatamount = 0.00;
                        console.log("vat is", _this.vatamount);
                        //total
                        _this.total = _this.subtotal;
                        console.log("total price check", _this.total);
                        console.log("this.total check", _this.total);
                        console.log("prodcuts", _this.productitems);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__adddiscount_adddiscount__["a" /* AdddiscountPage */], {
                            itemcheck: _this.productitems,
                            subtotal: _this.subtotal,
                            vat: _this.vatamount,
                            total: _this.total,
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    AddqtyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddqtyPage');
    };
    AddqtyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addqty',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/addqty/addqty.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="login-content">\n\n\n    <ion-list>\n        <ion-item-divider text-center color="fourtwentylight">\n          Items In My Cart\n        </ion-item-divider>\n        <ion-item-divider color="light" [hidden]="!showEmptyCartMessage">\n          <small>There are no products in your cart.</small>\n        </ion-item-divider>\n    \n        <ion-card color="danger"  *ngFor="let item of productitems; let i = index">\n          <ion-item color="danger"  >\n    \n            <ion-thumbnail item-right>\n              <!-- <img [src]="viewimages" /> -->\n            </ion-thumbnail>\n            \n            <h2 text-center> {{ item.name }}</h2>\n\n\n            <p ><span  > R{{item.amount}}&nbsp;</span></p>\n          </ion-item>\n\n          <ion-item class="compact">\n            <ion-row no-padding>\n              <ion-col col-8 no-padding>\n                <button clear color="danger" ion-button icon-only (click)="changeRemove(item)">\n                  <ion-icon name="remove-circle"></ion-icon>\n                </button>\n                <button ion-button color="dark" clear>{{item.quantity}}</button>\n                <button clear color="danger" ion-button icon-only (click)="changeadd(item)">\n                  <ion-icon name="add-circle"></ion-icon>\n                </button>\n              </ion-col>\n              <ion-col col-4 style="text-align: right;">\n                <button ion-button small outline (click)="removeFromCart(item, i)" style="width: 64px;" color="danger">Remove</button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-card>\n      </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color="danger">\n      <ion-row no-padding >\n        <ion-col no-padding>\n          <button ion-button color="light" block outline (click)="ViewOrDiscountQuote()">Quote</button>\n        </ion-col>\n        <ion-col no-padding>\n          <button ion-button color="light"  block clear>TOTAL {{subtotal }}</button>\n        </ion-col>\n        <ion-col no-padding>\n          <button ion-button color="light" block outline  (click)="Invoice()">Invoice</button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/addqty/addqty.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AddqtyPage);
    return AddqtyPage;
}());

//# sourceMappingURL=addqty.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OutstandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutstandingPage = /** @class */ (function () {
    function OutstandingPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.totaldiscount = 0;
        // onediscount:any = 0.05
        this.totaldiscountvalue = 0;
        this.discount = 0;
        this.disabledone = false;
        this.disabledtwo = false;
        this.disabledthree = false;
        this.disabledfour = false;
        this.EnableSend = true;
        this.PaidAmount = [{ Amount: "" }];
        this.discountformated = this.discount;
        this.itemcheck = navParams.get('itemcheck');
        console.log("", this.itemcheck);
        this.subtotal = navParams.get('subtotal');
        console.log("", this.subtotal);
        this.sub = this.subtotal;
        this.subformat = Number.parseFloat(this.subtotal).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        this.vat = navParams.get('vat');
        console.log("", this.vat);
        this.total = navParams.get('total');
        this.totalview = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("", this.total);
        this.paidView = 0.00;
    }
    OutstandingPage.prototype.calculate = function (PaidAmount) {
        var _this = this;
        console.log("amount", PaidAmount.Amount);
        var confirm = this.alertCtrl.create({
            title: 'Paid Amount',
            message: PaidAmount.Amount + '' + 'will be removed from the original invoice',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.EnableSend = false;
                        _this.total = parseFloat(_this.total) - parseFloat(PaidAmount.Amount);
                        console.log("paid", _this.total);
                        console.log("sub", _this.sub);
                        console.log("paid", PaidAmount.Amount);
                        _this.paidView = Number.parseFloat(_this.PaidAmount.Amount).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                        _this.totalview = Number.parseFloat(_this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
                    }
                }
            ]
        });
        confirm.present();
    };
    OutstandingPage.prototype.send = function () {
        var outstanding = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], {
            itemcheck: this.itemcheck,
            subtotal: this.sub,
            paid: this.PaidAmount.Amount,
            total: this.total,
            outstanding: outstanding,
        });
    };
    OutstandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OutstandingPage');
    };
    OutstandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-outstanding',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/outstanding/outstanding.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>outstanding</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n  <ion-list>\n  \n    <ion-item-divider text-center color="fourtwentylight">\n      Client discount\n    </ion-item-divider>\n  \n    <ion-card color="danger">\n      <ion-item color="danger">\n  \n        <ion-grid>\n          <ion-row>\n            <ion-col col-12 text-center>\n              <button detail-none color="danger" ion-item>\n                <ion-icon name="ios-trending-up-outline" item-start></ion-icon>\n                <strong>Subtotal</strong> <span> R{{subformat}} &nbsp;</span>\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-12>\n              <button detail-none color="danger" ion-item>\n                <ion-icon name="cut" item-start></ion-icon>\n                <strong>Paid</strong> <span> R{{paidView }} &nbsp;</span>\n              </button>\n            </ion-col>\n          </ion-row>\n  \n  \n          <ion-row>\n            <ion-col col-12>\n              <button detail-none color="danger" ion-item>\n                <ion-icon name="ios-trophy-outline" item-start></ion-icon>\n                <strong>Total</strong> <span> R{{totalview}} &nbsp;</span>\n              </button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </ion-item>\n\n    <ion-item>\n      <ion-label position="floating">Input paid Amount</ion-label>\n      <ion-input type="number" [(ngModel)]="PaidAmount.Amount"  ></ion-input>\n    </ion-item>\n\n        <button ion-button block color="danger"  (click)="calculate(PaidAmount)">\n        \n          calculate\n        </button>\n  \n    </ion-card>\n\n  </ion-list>\n\n\n  \n  <button ion-button block color="danger" [disabled]="EnableSend" (click)="send()">\n  \n    Send\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/outstanding/outstanding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OutstandingPage);
    return OutstandingPage;
}());

//# sourceMappingURL=outstanding.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the LeaderboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LeaderboardPage = /** @class */ (function () {
    function LeaderboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LeaderboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LeaderboardPage');
    };
    LeaderboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-leaderboard',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/leaderboard/leaderboard.html"*/'<!--\n  Generated template for the LeaderboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>leaderboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/leaderboard/leaderboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LeaderboardPage);
    return LeaderboardPage;
}());

//# sourceMappingURL=leaderboard.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, Api, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userData = { "email": "", "password": "" };
        console.log("logion details", this.userData);
        // // watch network for a disconnect
        // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        //   console.log('network was disconnected :-(');
        // });
        // // stop disconnect watch
        // disconnectSubscription.unsubscribe();
        // // watch network for a connection
        // let connectSubscription = this.network.onConnect().subscribe(() => {
        //   console.log('network connected!');
        //   // We just got a connection but we need to wait briefly
        //   // before we determine the connection type. Might need to wait.
        //   // prior to doing any api requests as well.
        //   setTimeout(() => {
        //     if (this.network.type === 'wifi') {
        //       console.log('we got a wifi connection, woohoo!');
        //     }
        //   }, 3000);
        // });
        // // stop connect watch
        // connectSubscription.unsubscribe();
    }
    LoginPage.prototype.onlogin = function (userData) {
        var _this = this;
        console.log("testing", userData);
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.dismiss();
        loader.present().then(function () {
            var test = { "email": "masa@gmail.com", "password": "12345" };
            _this.Api.postLogin(userData).subscribe(function (DATA) {
                console.log("objects", DATA);
                _this.login = DATA;
                localStorage.setItem('USER-DATA', JSON.stringify(DATA));
                if (typeof _this.login.error == 'undefined' && _this.login.error == null) {
                    loader.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {});
                }
                else {
                    loader.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'login failed please try again',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }, function (err) {
                loader.dismiss();
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: 'User ' + err.statusText,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
        console.log("login");
    };
    // login(){
    //   // this.root.push(HomePage)
    //   this.navCtrl.setRoot(HomePage)
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/login/login.html"*/'\n\n\n\n\n\n<ion-content class="login-content" padding scroll="false">\n  <!-- <div ion-fixed> -->\n  <ion-row class="logo-row1" text-center>\n    <!-- <ion-col></ion-col> -->\n    <ion-col class="logo">\n      <img src="../../assets/imgs/favicon.jpg" />\n<!-- /imgs/bg.jpg" -->\n       \n    </ion-col>\n    <!-- <ion-col></ion-col> -->\n  </ion-row>\n  <div class="login-box">\n    <form >\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-input #email="ngModel" class="form-control"  [(ngModel)]="userData.email" type="text" placeholder="Email" name="email"  required></ion-input>\n            </ion-item>\n\n            <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-danger">\n            \n              <div *ngIf="email.errors.required">\n                Email is required.\n              </div>\n              <div *ngIf="email.errors.minlength">\n                Name must be at least 4 characters long.\n              </div>\n              <div *ngIf="email.errors.forbiddenName">\n                Name cannot be Bob.\n              </div>\n            \n            </div>\n\n            <ion-item>\n              <ion-input [(ngModel)]="userData.password" type="password" placeholder="Password" name="password" required></ion-input>\n            </ion-item>\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full type="submit" (click)="onlogin(userData)">Login</button>\n          <!-- <button ion-button class="register-btn" block clear (click)="createAccount()">Create New Account</button> -->\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n  <!-- </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { format } from 'path';



// FileUploadOptions, FileTransferObject
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, Api, loadingCtrl, alertCtrl, camera, transfer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Api = Api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.userData = {};
        var key = localStorage.getItem('USER-DATA');
        this.USERDATA = JSON.parse(key);
        this.Api.getProfilePic(this.USERDATA.success["0"].id).subscribe(function (DATA) {
            console.log("DATA", DATA);
            _this.userdata = DATA;
            console.log("data", _this.userdata);
            console.log("name", _this.userdata["0"].name);
            _this.name = _this.userdata["0"].name;
            _this.surname = _this.userdata["0"].surname;
            _this.email = _this.userdata["0"].email;
            _this.cellnumber = _this.userdata["0"].cellnumber;
            _this.password = _this.userdata["0"].password;
            _this.profile_pic = _this.userdata["0"].profile_pic;
            // console.log("pic", this.profile_pic)
        });
    }
    // Photo(){
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.FILE_URI,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //   this.camera.getPicture(options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64 (DATA_URL):
    //     this.profile_pic = 'data:image/jpeg;base64,' + imageData;
    //     console.log("error", this.profile_pic)
    //   }, (err) => {
    //       console.log("error", err)
    //     // Handle error
    //   });
    // }
    ProfilePage.prototype.Photo = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Option',
            buttons: [
                {
                    text: 'Take photo',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...1'
                        });
                        loading.present();
                        // console.log('Disagree clicked');
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            loading.dismiss();
                            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
                            console.log("image URL", _this.myphoto);
                            _this.profile_pic = _this.myphoto;
                            console.log("one", _this.profile_pic);
                        }, function (err) {
                            loading.dismiss();
                            console.log("hello", err);
                        });
                    }
                },
                {
                    text: 'Choose photo from Gallery',
                    handler: function () {
                        console.log('Agree clicked');
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        var options = {
                            quality: 100,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false
                        };
                        _this.camera.getPicture(options).then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64 (DATA_URL):
                            loading.dismiss();
                            _this.myphoto = 'data:image/jpeg;base64,' + imageData;
                            console.log("image URL", _this.myphoto);
                            _this.profile_pic = _this.myphoto;
                            console.log("one", _this.profile_pic);
                        }, function (err) {
                            loading.dismiss();
                            console.log("hello", err);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ProfilePage.prototype.save = function (name, surname, email, cellnumber, passwordone, profile_pic) {
        console.log("data", name, surname, email, cellnumber, passwordone, profile_pic);
        if (name == name) {
            this.name = name;
            console.log("if", this.name);
        }
        else {
            this.name;
            console.log("else", this.name);
        }
        if (surname == surname) {
            this.surname = surname;
        }
        else {
            this.surname;
        }
        if (email == email) {
            this.email = email;
        }
        else {
            this.email;
        }
        if (cellnumber == cellnumber) {
            this.cellnumber = cellnumber;
        }
        else {
            this.cellnumber;
        }
        if (profile_pic == profile_pic) {
            this.profile_pic = profile_pic;
        }
        else {
            this.profile_pic;
        }
        if (passwordone == undefined) {
            passwordone = this.password;
            this.password = passwordone;
            console.log("if-2", passwordone);
        }
        else {
            this.password = passwordone;
            console.log("", this.password);
        }
        this.update = { "id": this.userdata["0"].id, "name": this.name, "surname": this.surname, "email": this.email, "cellnumber": this.cellnumber, "password": this.password, "profile_pic": this.profile_pic };
        var formData = new FormData();
        formData.append("id", this.userdata["0"].id);
        formData.append("name", this.name);
        formData.append("surname", this.surname);
        formData.append("email", this.email);
        formData.append("cellnumber", this.cellnumber);
        formData.append("password", this.password);
        formData.append("profile_pic", this.profile_pic);
        console.log("view", formData);
        this.Api.postupdateuserprofile(formData).subscribe(function (DATA) {
            console.log("updated", DATA);
        }, function (error) {
            console.log("error updating", error);
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/profile/profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <!-- <form #formCtrl="ngForm" > -->\n\n    <div align="center" >\n\n      <h1> Profile</h1>\n      <img class="profile-image" [src]="profile_pic"> <ion-icon (click)="Photo()"  class="iconone"  color="default" name="add" item-right></ion-icon>\n\n    </div>\n\n    <ion-list>\n\n\n      <ion-item>\n      <ion-label color="danger">Name</ion-label><ion-icon color="danger" name="create" item-right></ion-icon>\n        <ion-input class="text-input" type="text" value="{{name}}" [(ngModel)]="name" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="danger">surname</ion-label>\n        <ion-icon color="danger" name="create" item-right></ion-icon>\n        <ion-input class="text-input" type="text" value="{{surname}}" [(ngModel)]="surname"></ion-input>\n      </ion-item>\n\n        <ion-item>\n          <ion-label color="danger">email</ion-label>\n          <ion-icon color="danger" name="create" item-right></ion-icon>\n          <ion-input class="text-input" type="text" value="{{email}}" [(ngModel)]="email"></ion-input>\n        </ion-item>\n\n                <ion-item>\n                  <ion-label color="danger">Cell Number</ion-label>\n                  <ion-icon color="danger" name="create" item-right></ion-icon>\n                  <ion-input class="text-input" type="text" value="{{cellnumber}}" [(ngModel)]="cellnumber"></ion-input>\n                </ion-item>\n\n          <ion-item>\n            <ion-label color="danger">Password</ion-label>\n            <ion-icon color="danger" name="create" item-right></ion-icon>\n            <ion-input class="text-input" type="text"  [(ngModel)]="passwordone"></ion-input>\n          </ion-item>\n\n\n\n    </ion-list>\n    \n    <button color="danger"  ion-button block (click)="save(name,surname,email,cellnumber,passwordone,profile_pic )">Update</button>\n    <!-- <button color="danger" ion-button block (click)="reset()">Reset</button> -->\n  <!-- </form> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adddiscount/adddiscount.module": [
		294,
		10
	],
	"../pages/addqty/addqty.module": [
		295,
		9
	],
	"../pages/invoice/invoice.module": [
		296,
		8
	],
	"../pages/leaderboard/leaderboard.module": [
		297,
		7
	],
	"../pages/login/login.module": [
		298,
		6
	],
	"../pages/outstanding/outstanding.module": [
		299,
		5
	],
	"../pages/product/product.module": [
		300,
		4
	],
	"../pages/productitems/productitems.module": [
		303,
		3
	],
	"../pages/profile/profile.module": [
		301,
		2
	],
	"../pages/sendquote/sendquote.module": [
		304,
		1
	],
	"../pages/view/view.module": [
		302,
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
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = /** @class */ (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/notifications/notifications.html"*/'<ion-list class="no-margin">\n\n    <ion-list-header class="no-margin">\n      <ion-icon name="notifications" color="FDMcolor"></ion-icon>\n      <span ion-text  color="FDMcolor" >Notifications</span>\n    </ion-list-header>\n\n    <button ion-item color="FDMcolor" class="text-1x" tappable (click)="close()">\n      <ion-icon name="paper"></ion-icon>\n      Sent quote\n    </button>\n\n  </ion-list>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoicePage = /** @class */ (function () {
    function InvoicePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //object checked
        this.itemcheck = navParams.get('itemcheck');
        console.log("item", this.itemcheck);
        //total subtotal
        this.subtotal = navParams.get('subtotal');
        console.log("subtotal", this.subtotal);
        //vat
        this.vat = navParams.get('vat');
        //convert to 2decimal place
        this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("vat", this.vat);
        //total
        this.total = navParams.get('total');
        //convert to 2decimal place
        this.total = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
        console.log("total", this.total);
    }
    InvoicePage.prototype.emailQuote = function () {
        console.log("send no discount");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__["a" /* SendquotePage */], {
            products: this.itemcheck,
            subtotal: this.subtotal,
            vat: this.vat,
            total: this.total
        });
    };
    InvoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvoicePage');
    };
    InvoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invoice',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/invoice/invoice.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>invoice</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page" padding>\n\n  <img src="assets/imgs/home2.jpg">\n\n\n  <div *ngIf="!discount">\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <strong>Name</strong>\n        </ion-col>\n        <ion-col col-2>\n          <strong>Qty</strong>\n        </ion-col>\n\n        <ion-col col-4>\n          <strong>Total</strong>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row *ngFor="let item of itemcheck">\n        <ion-col col-6>\n          {{item.name}}\n        </ion-col>\n        <ion-col col-2>\n          {{item.quantity}}\n        </ion-col>\n        <ion-col col-4>\n          R {{item.amount}}\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col offset-4>\n          Sub Total\n        </ion-col>\n        <ion-col col-4>\n          R {{subtotal}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n          15% VAT\n        </ion-col>\n        <ion-col col-4>\n          R {{vat}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-4>\n          Total\n        </ion-col>\n        <ion-col col-4>\n          R {{total}}\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div> \n\n\n\n  <button ion-button block color="danger" (click)="emailQuote()">\n    <!-- <ion-icon name=\'send\'></ion-icon> -->\n    Email Quote\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/invoice/invoice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InvoicePage);
    return InvoicePage;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_leaderboard_leaderboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_product_product__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_productitems_productitems__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_view_view__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sendquote_sendquote__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addqty_addqty__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_adddiscount_adddiscount__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_outstanding_outstanding__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AngularFireModule } from "angularfire2";
// import { AngularFireDatabaseModule } from "angularfire2/database";










// import { Network } from '@ionic-native/network';










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productitems_productitems__["a" /* ProductitemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendquote_sendquote__["a" /* SendquotePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addqty_addqty__["a" /* AddqtyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_adddiscount_adddiscount__["a" /* AdddiscountPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_outstanding_outstanding__["a" /* OutstandingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adddiscount/adddiscount.module#AdddiscountPageModule', name: 'AdddiscountPage', segment: 'adddiscount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addqty/addqty.module#AddqtyPageModule', name: 'AddqtyPage', segment: 'addqty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invoice/invoice.module#InvoicePageModule', name: 'InvoicePage', segment: 'invoice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/leaderboard/leaderboard.module#LeaderboardPageModule', name: 'LeaderboardPage', segment: 'leaderboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/outstanding/outstanding.module#OutstandingPageModule', name: 'OutstandingPage', segment: 'outstanding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productitems/productitems.module#ProductitemsPageModule', name: 'ProductitemsPage', segment: 'productitems', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendquote/sendquote.module#SendquotePageModule', name: 'SendquotePage', segment: 'sendquote', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_productitems_productitems__["a" /* ProductitemsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_view_view__["a" /* ViewPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_sendquote_sendquote__["a" /* SendquotePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addqty_addqty__["a" /* AddqtyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_adddiscount_adddiscount__["a" /* AdddiscountPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_outstanding_outstanding__["a" /* OutstandingPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_invoice_invoice__["a" /* InvoicePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_api_api__["a" /* ApiProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.defaultUrl = "http://flawlessdigitalmarketing.co.za/api/index.php/user/";
        //login
        this.Login = this.defaultUrl + "FDMLogin";
        //Category
        this.Categories = this.defaultUrl + "FDMcategory/parent_id";
        //Sub category
        this.SubCategory = this.defaultUrl + "FDMsubCategory/parent_id/";
        //Products
        this.Products = this.defaultUrl + "/FDMproducts/id/";
        //send quote
        this.SendQuote = this.defaultUrl + "/FDMsendquote";
        // send quote discount
        this.SendQuotediscount = this.defaultUrl + "/FDMsendquotediscount";
        // send outstanding balance   FDMsendinvoice
        this.SendOutstanding = this.defaultUrl + "/FDMsendOutstanding";
        //send invoice  FDMsendinvoice
        this.SendInvoice = this.defaultUrl + "/FDMsendinvoice";
        //post quote path and total quote
        this.Usersendquote = this.defaultUrl + "Usersendquote";
        //post quote path and total quote
        this.UserProfilePic = this.defaultUrl + "userprofile/id/";
        //update user details
        this.UpdateUserProfile = this.defaultUrl + "userupdate";
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.postupdateuserprofile = function (data) {
        this.respond = this.http.post(this.UpdateUserProfile, data).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.getProfilePic = function (id) {
        this.respond = this.http.get(this.UserProfilePic + id).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.postUsersendquote = function (quote) {
        this.respond = this.http.post(this.Usersendquote, quote).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.postSendInvoice = function (send) {
        this.respond = this.http.post(this.SendInvoice, send).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.postSendOutstanding = function (send) {
        this.respond = this.http.post(this.SendOutstanding, send).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.postSendQuotediscount = function (send) {
        this.respond = this.http.post(this.SendQuotediscount, send).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.postSendQuote = function (send) {
        this.respond = this.http.post(this.SendQuote, send).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.getProducts = function (id) {
        this.respond = this.http.get(this.Products + id).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider.prototype.getSubCategory = function (id) {
        this.respond = this.http.get(this.SubCategory + id).map(function (res) { return res.json(); });
        return this.respond;
    };
    //category get function
    ApiProvider.prototype.getCategories = function () {
        this.respond = this.http.get(this.Categories).map(function (res) { return res.json(); });
        return this.respond;
    };
    //login post function
    ApiProvider.prototype.postLogin = function (Login) {
        this.respond = this.http.post(this.Login, Login).map(function (res) { return res.json(); });
        return this.respond;
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_leaderboard_leaderboard__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import {ProductPage} from '../pages/product/product';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, Api) {
        this.Api = Api;
        //  rootPage:any = ProfilePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        this.appMenuItems = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'LeaderBoard', component: __WEBPACK_IMPORTED_MODULE_5__pages_leaderboard_leaderboard__["a" /* LeaderboardPage */], icon: 'clipboard' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        console.log("logout");
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/app/app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n        <ion-header>\n          <ion-toolbar class="user-profile">\n      \n            <ion-grid>\n\n              <ion-row>\n                \n                <ion-col col-4>\n                    <div class="user-avatar">\n                      <img src="assets/imgs/avatar.jpeg">\n                    </div>\n                </ion-col>\n\n                \n\n                <ion-col padding-top col-8>\n                  <h2 ion-text class="no-margin bold text-white">\n                    Masa\n                  </h2>\n                  <span ion-text color="FDMcolor">Customer</span>\n                </ion-col>\n              </ion-row>\n      \n              <ion-row no-padding class="other-data">\n                <ion-col no-padding class="column">\n                  <button ion-button icon-left small full color="FDMcolor" menuClose (click)="profile()">\n                    <ion-icon name="contact"></ion-icon>\n                    Edit Profile\n                  </button>\n                </ion-col>\n                <ion-col no-padding class="column">\n                  <button ion-button icon-left small full color="FDMcolor" menuClose (click)="logout()">\n                    <ion-icon name="log-out"></ion-icon>\n                    Log Out\n                  </button>\n                </ion-col>\n              </ion-row>\n      \n            </ion-grid>\n      \n          </ion-toolbar>\n        </ion-header>\n      \n        <ion-content color="FDMcolor">\n\n      \n          <ion-list class="user-list">\n            <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n              <ion-icon item-left [name]="menuItem.icon" color="FDMcolor"></ion-icon>\n              <span ion-text color="FDMcolor">{{menuItem.title}}</span>\n            </button>\n          </ion-list>\n\n        </ion-content>\n      \n      </ion-menu>\n      \n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n      '/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_api_api__["a" /* ApiProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.discount = navParams.get('discount');
        // console.log("discount", this.discount)
        this.quote = navParams.get('quote');
        // console.log("quote", this.quote )
        this.outstanding = navParams.get('outstanding');
        // console.log("outstanding", this.outstanding) 
        this.invoice = navParams.get('invoice');
        if (this.discount == true) {
            console.log("discount", this.discount);
            //object checked
            this.itemcheck = navParams.get('itemcheck');
            console.log("item", this.itemcheck);
            //total subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            this.percentage = navParams.get('percentage');
            console.log("perc", this.percentage);
            //discount-price
            this.discountprice = navParams.get('discountprice');
            this.discountpriceview = Number.parseFloat(this.discountprice).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            //total
            this.total = navParams.get('total');
            //convert to 2decimal place
            this.totalFormated = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("total", this.total);
        }
        else if (this.quote == true) {
            console.log("quote", this.quote);
            //object checked
            this.itemcheck = navParams.get('itemcheck');
            console.log("item", this.itemcheck);
            //total subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //vat
            this.vat = navParams.get('vat');
            //convert to 2decimal place
            this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("vat", this.vat);
            //total
            this.total = navParams.get('total');
            //convert to 2decimal place
            this.total = this.subtotal;
            console.log("total", this.total);
        }
        else if (this.outstanding == true) {
            console.log("outstanding", this.outstanding);
            //object checked
            this.itemcheck = navParams.get('itemcheck');
            console.log("item", this.itemcheck);
            //total subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal---inside", this.subtotal);
            //paid
            this.paid = navParams.get('paid');
            //convert to 2decimal place
            this.paid = Number.parseFloat(this.paid).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("vat", this.paid);
            //total
            this.total = navParams.get('total');
            //convert to 2decimal place
            this.total = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("total", this.total);
        }
        else if (this.invoice == true) {
            console.log("invoice", this.invoice);
            //object checked
            this.itemcheck = navParams.get('itemcheck');
            console.log("item", this.itemcheck);
            //total subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //vat
            this.vat = navParams.get('vat');
            //convert to 2decimal place
            this.vat = Number.parseFloat(this.vat).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("vat", this.vat);
            //total
            this.total = navParams.get('total');
            //convert to 2decimal place
            this.total = Number.parseFloat(this.total).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
            console.log("total", this.total);
        }
    }
    ViewPage.prototype.emailQuote = function () {
        if (this.discount) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__["a" /* SendquotePage */], {
                products: this.itemcheck,
                subtotal: this.subtotal,
                total: this.total,
                discount: this.discountpriceview,
                percentage: this.percentage
            });
        }
        else if (this.quote) {
            console.log("send no discount");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__["a" /* SendquotePage */], {
                products: this.itemcheck,
                subtotal: this.subtotal,
                vat: this.vat,
                total: this.total,
                quote: this.quote
            });
        }
        else if (this.outstanding) {
            console.log("send no discount", this.subtotal);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__["a" /* SendquotePage */], {
                products: this.itemcheck,
                subtotal: this.subtotal,
                paid: this.paid,
                total: this.total,
                outstanding: this.outstanding
            });
        }
        else if (this.invoice) {
            console.log("send no discount", this.subtotal);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sendquote_sendquote__["a" /* SendquotePage */], {
                products: this.itemcheck,
                subtotal: this.subtotal,
                vat: this.vat,
                total: this.total,
                invoice: this.invoice
            });
        }
    };
    ViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewPage');
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/view/view.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="grid-basic-page" padding>\n\n  <img src="assets/imgs/home2.jpg">\n\n    <div *ngIf="discount">\n    \n      <ion-grid>\n    \n        <ion-row>\n          <ion-col col-6>\n            <strong>Name</strong>\n          </ion-col>\n    \n    \n          <ion-col col-2>\n            <strong>Qty</strong>\n          </ion-col>\n    \n          <ion-col col-4>\n            <strong>Total</strong>\n          </ion-col>\n    \n        </ion-row>\n    \n        <ion-row *ngFor="let item of itemcheck">\n          <ion-col col-6>\n            {{item.name}}\n          </ion-col>\n          <ion-col col-2>\n            {{item.quantity}}\n          </ion-col>\n          <ion-col col-4>\n            R {{item.amount}}\n          </ion-col>\n        </ion-row>\n    \n    \n        <ion-row>\n          <ion-col offset-4>\n            Sub Total\n          </ion-col>\n          <ion-col col-4>\n            R {{subtotal}}\n          </ion-col>\n        </ion-row>\n    \n        <ion-row>\n          <ion-col offset-4>\n            Discount {{percentage}}% \n          </ion-col>\n          <ion-col col-4>\n          R {{discountpriceview}}\n          </ion-col>\n        </ion-row>\n    \n        <!-- <ion-row>\n          <ion-col offset-4>\n            15% VAT\n          </ion-col>\n          <ion-col col-4>\n            R {{vat}}\n          </ion-col>\n        </ion-row> -->\n    \n        <ion-row>\n          <ion-col offset-4>\n            Total\n          </ion-col>\n          <ion-col col-4>\n            R {{totalFormated}}\n          </ion-col>\n        </ion-row>\n    \n      </ion-grid>\n    \n    \n    </div>\n\n\n\n\n  <div *ngIf="quote">\n\n  <ion-grid >\n\n    <ion-row>\n      <ion-col col-6>\n        <strong>Name</strong>\n      </ion-col>\n\n\n      <ion-col col-2>\n        <strong>Qty</strong>\n      </ion-col>\n\n      <ion-col col-4>\n        <strong>Total</strong>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let item of itemcheck">\n      <ion-col col-6>\n        {{item.name}}\n      </ion-col>\n        <ion-col col-2>\n         {{item.quantity}}\n        </ion-col>\n      <ion-col col-4>\n        R {{item.amount}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col offset-4>\n        Sub Total\n      </ion-col>\n      <ion-col col-4>\n        R {{subtotal}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        15% VAT\n      </ion-col>\n      <ion-col col-4>\n        R {{vat}}%\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        Total\n      </ion-col>\n      <ion-col col-4>\n        R {{total}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  </div>\n\n\n      <div *ngIf="outstanding">\n      \n      \n  <ion-grid >\n\n    <ion-row>\n      <ion-col col-6>\n        <strong>Name</strong>\n      </ion-col>\n\n\n      <ion-col col-2>\n        <strong>Qty</strong>\n      </ion-col>\n\n      <ion-col col-4>\n        <strong>Total</strong>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngFor="let item of itemcheck">\n      <ion-col col-6>\n        {{item.name}}\n      </ion-col>\n        <ion-col col-2>\n         {{item.quantity}}\n        </ion-col>\n      <ion-col col-4>\n        R {{item.amount}}\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col offset-4>\n        Sub Total\n      </ion-col>\n      <ion-col col-4>\n        R {{subtotal}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        Amount Paid\n      </ion-col>\n      <ion-col col-4>\n        R {{paid}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        Total\n      </ion-col>\n      <ion-col col-4>\n        R {{total}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n      \n      </div>\n\n\n\n  <div *ngIf="invoice">\n        \n          <ion-grid>\n        \n            <ion-row>\n              <ion-col col-6>\n                <strong>Name</strong>\n              </ion-col>\n        \n        \n              <ion-col col-2>\n                <strong>Qty</strong>\n              </ion-col>\n        \n              <ion-col col-4>\n                <strong>Total</strong>\n              </ion-col>\n        \n            </ion-row>\n        \n            <ion-row *ngFor="let item of itemcheck">\n              <ion-col col-6>\n                {{item.name}}\n              </ion-col>\n              <ion-col col-2>\n                {{item.quantity}}\n              </ion-col>\n              <ion-col col-4>\n                R {{item.amount}}\n              </ion-col>\n            </ion-row>\n        \n        \n            <ion-row>\n              <ion-col offset-4>\n                Sub Total\n              </ion-col>\n              <ion-col col-4>\n                R {{subtotal}}\n              </ion-col>\n            </ion-row>\n        \n            <ion-row>\n              <ion-col offset-4>\n                15% VAT\n              </ion-col>\n              <ion-col col-4>\n                R {{vat}}%\n              </ion-col>\n            </ion-row>\n        \n            <ion-row>\n              <ion-col offset-4>\n                Total\n              </ion-col>\n              <ion-col col-4>\n                R {{total}}\n              </ion-col>\n            </ion-row>\n        \n          </ion-grid>\n   </div>\n\n\n\n\n\n  <button ion-button block color="danger" (click)="emailQuote()">\n    <!-- <ion-icon name=\'send\'></ion-icon> -->\n    Email Quote\n  </button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(27);
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
    function HomePage(navCtrl, popoverCtrl, api) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.api = api;
        this.myDate = new Date().toString();
        var USER_DATA = localStorage.getItem('USER-DATA');
        console.log("User-DATA", JSON.parse(USER_DATA));
        this.User_data = JSON.parse(USER_DATA);
        console.log("1 ", this.User_data.success[0].cellnumber);
        console.log("", this.User_data.success["0"].email);
        console.log("perfect", this.myDate);
        console.log("", this.myDate);
        this.myDate = this.myDate.split(' ', 5).join(' ');
        console.log("date", this.myDate);
    }
    HomePage.prototype.ProductPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_product__["a" /* ProductPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color="FDMcolor">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title class="" text-wrap>\n          Flawless digital Marketing\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n<!-- \n        <button ion-button tappable (click)="goToAccount()">\n          <ion-icon name="cog"></ion-icon>\n        </button> -->\n\n      </ion-buttons>\n\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="assets/imgs/avatar.jpeg">\n          </ion-avatar>\n          <h2>Masa</h2>\n          <p>{{myDate | date: H:mm  }}</p>\n\n          \n\n       \n        </ion-item>\n\n        <!-- <ion-datetime displayFormat="MMM DD, YYYY HH:mm" pickerFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime> -->\n\n\n        <img src="assets/imgs/home2.jpg">\n      \n        <ion-card-content>\n          <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n        </ion-card-content>\n\n        <ion-item >\n            <button color="FDMcolor" ion-button icon-start clear text-uppercase>\n                <ion-icon name="send"></ion-icon>\n                <div>11</div>    \n            </button>                  \n\n            <button color="FDMcolor" ion-button icon-start clear item-end text-uppercase>\n              <ion-icon name="pricetags"></ion-icon>\n              R 100\n            </button>\n\n        </ion-item>\n\n        \n      \n        <!-- <ion-row class="tt" color="FDMcolor">\n\n          <ion-col>\n            <button ion-button icon-start clear small >\n              <ion-icon name="send"></ion-icon>\n              <div>11</div>\n              \n            </button>\n          </ion-col>\n\n          <ion-col>\n            <button ion-button icon-start clear small>\n              <ion-icon name="pricetags"></ion-icon>\n              <div>R 100 </div>\n            </button>\n          </ion-col>\n\n          <ion-col center text-center>\n              <ion-note>\n                Active\n              </ion-note>\n            </ion-col>\n\n        </ion-row> -->\n      \n      </ion-card>\n\n      <!-- gg -->\n\n\n      <button color="FDMcolor" ion-button block (click)="ProductPage()">\n        <ion-icon name="paper-plane"> </ion-icon>\n           <div>Quotation</div>\n      </button>\n\n      \n\n  \n\n\n\n</ion-content>\n\n\n\n<!--   \n<ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/marty-avatar.png">\n      </ion-avatar>\n      <h2>Marty McFly</h2>\n      <p>November 5, 1955</p>\n    </ion-item>\n  \n    <img src="img/advance-card-bttf.png">\n  \n    <ion-card-content>\n      <p>Flawless digital marketing app to send quotation to clients</p>\n    </ion-card-content>\n  \n    <ion-row>\n\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="person"></ion-icon>\n          <div>Number of Quotes   <ion-note>\n              R 1100111\n              </ion-note></div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-start clear small>\n          <ion-icon name="text"></ion-icon>\n          <div>Total Quotes Amount   <ion-note>\n              R 1100111\n              </ion-note></div>   \n        \n        </button>\n      </ion-col>\n       <ion-col center text-center>\n        <ion-note>\n          Total amount R1100111\n        </ion-note>\n      </ion-col> \n    </ion-row>\n  \n  </ion-card> -->\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendquotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SendquotePage = /** @class */ (function () {
    function SendquotePage(navCtrl, navParams, api, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.myDate = new Date().toString();
        this.invoiceNumber = 120;
        this.discount = navParams.get('discount');
        this.quote = navParams.get('quote');
        this.outstanding = navParams.get('outstanding');
        this.invoice = navParams.get('invoice');
        this.paid = navParams.get('paid');
        var USER_DATA = localStorage.getItem('USER-DATA');
        console.log("User-DATA", JSON.parse(USER_DATA));
        this.User_data = JSON.parse(USER_DATA);
        if (this.discount) {
            console.log("here discount");
            //Date
            this.myDate = this.myDate.split(' ', 5).join(' ');
            console.log("date", this.myDate);
            //invoice number
            console.log("invoice number", this.invoiceNumber);
            this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" };
            //objects
            this.products = navParams.get('products');
            console.log("products", this.products);
            //subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //discount
            this.percentage = navParams.get('percentage');
            console.log("perce", this.percentage);
            //total
            this.total = navParams.get('total');
            console.log("total", this.total);
        }
        else if (this.quote) {
            console.log("here discount error ");
            //Date
            this.myDate = this.myDate.split(' ', 5).join(' ');
            console.log("date", this.myDate);
            //invoice number
            console.log("invoice number", this.invoiceNumber);
            this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" };
            //objects
            this.products = navParams.get('products');
            console.log("products", this.products);
            //subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //vat
            this.vat = navParams.get('vat');
            console.log("vat", this.vat);
            //total
            this.total = navParams.get('total');
            console.log("total", this.total);
        }
        else if (this.outstanding) {
            console.log("here discount error ");
            //Date
            this.myDate = this.myDate.split(' ', 5).join(' ');
            console.log("date", this.myDate);
            //invoice number
            console.log("invoice number", this.invoiceNumber);
            this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" };
            //objects
            this.products = navParams.get('products');
            console.log("products", this.products);
            //subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //paid
            this.paid = navParams.get('paid');
            console.log("paid", this.paid);
            //total
            this.total = navParams.get('total');
            console.log("total", this.total);
        }
        else if (this.invoice) {
            console.log("here discount error ");
            //Date
            this.myDate = this.myDate.split(' ', 5).join(' ');
            console.log("date", this.myDate);
            //invoice number
            console.log("invoice number", this.invoiceNumber);
            this.sendemailData = { "Name": "", "Surname": "", "Streetaddress": "", "Suburb": "", "city": "", "Postal": "", "to": "" };
            //objects
            this.products = navParams.get('products');
            console.log("products", this.products);
            //subtotal
            this.subtotal = navParams.get('subtotal');
            console.log("subtotal", this.subtotal);
            //vat
            this.vat = navParams.get('vat');
            console.log("vat", this.vat);
            //total
            this.total = navParams.get('total');
            console.log("total", this.total);
        }
    }
    SendquotePage.prototype.send = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.dismiss();
        loader.present().then(function () {
            if (_this.discount) {
                console.log("user details check", _this.sendemailData);
                _this.sendobject = { "User_details": _this.sendemailData, "Date": _this.myDate, "InvoiceNo": _this.invoiceNumber, "Main_products": _this.products, "Sub_total": _this.subtotal, "discount": _this.discount, "percentage": _this.percentage, "Total": _this.total };
                console.log("testing", _this.sendobject);
                _this.api.postSendQuotediscount(_this.sendobject).subscribe(function (DATA) {
                    console.log("DATA", DATA);
                    _this.sendDATA = DATA;
                    if (_this.sendDATA.success == "input") {
                        loader.dismiss();
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Your quote has been sent successfully to the email address you entered ',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }
                            ]
                        });
                        alert_1.present();
                    }
                    else {
                        console.log("", _this.sendDATA.fail);
                        loader.dismiss();
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Error',
                            message: '' + _this.sendDATA.fail,
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                }, function (err) {
                    loader.dismiss();
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'network was disconnected :-(' + err.statusText,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            else if (_this.quote) {
                console.log("user details check", _this.sendemailData);
                _this.sendobject = { "User_details": _this.sendemailData, "Date": _this.myDate, "InvoiceNo": _this.invoiceNumber, "Main_products": _this.products, "Sub_total": _this.subtotal, "Vat": _this.vat, "Total": _this.total };
                console.log("testing", _this.sendobject);
                _this.api.postSendQuote(_this.sendobject).subscribe(function (DATA) {
                    // console.log("DATA", DATA)
                    console.log("DATA", DATA);
                    _this.sendDATA = DATA;
                    if (_this.sendDATA.success == "input") {
                        //////////
                        var pdfpath = "http://flawlessdigitalmarketing.co.za/api/" + _this.sendDATA.attachments[0];
                        _this.Usersendquote = { "user_ID": _this.User_data.success[0].id, "quote_link": pdfpath, "Total_amount": _this.total, "Name": _this.User_data.success[0].name, "Email_address": _this.User_data.success[0].email, "Cell_number": _this.User_data.success[0].cellnumber, "Sent_quote_date": _this.myDate };
                        // this.Usersendquote = { "user_ID": "1", "quote_link": this.sendDATA.attachments[0], "Total_amount": this.total, "Name": "masa", "Email_address": "masa@applord.co.z", "Cell_number": "081 4563 664", "Sent_quote_date": this.myDate }
                        console.log("data==>", _this.Usersendquote);
                        _this.api.postUsersendquote(_this.Usersendquote).subscribe(function (DATA) {
                            console.log("data", DATA);
                        });
                        //////////
                        loader.dismiss();
                        var alert_3 = _this.alertCtrl.create({
                            message: 'Your quote has been sent successfully to the email address you entered ',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                        // this.navCtrl.push(HomePage)
                                    }
                                }
                            ]
                        });
                        alert_3.present();
                    }
                    else {
                        console.log("", _this.sendDATA.fail);
                        loader.dismiss();
                        var alert_4 = _this.alertCtrl.create({
                            title: 'Error',
                            message: '' + _this.sendDATA.fail,
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                }, function (err) {
                    loader.dismiss();
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'network was disconnected :-(' + err.statusText,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            else if (_this.outstanding) {
                console.log("outstanding", _this.outstanding);
                console.log("subtotal", _this.subtotal);
                console.log("user details check", _this.sendemailData);
                _this.sendobject = { "User_details": _this.sendemailData, "Date": _this.myDate, "InvoiceNo": _this.invoiceNumber, "Main_products": _this.products, "Sub_total": _this.subtotal, "paid": _this.paid, "Total": _this.total };
                console.log("testing", _this.sendobject);
                _this.api.postSendOutstanding(_this.sendobject).subscribe(function (DATA) {
                    console.log("DATA", DATA);
                    console.log("DATA", DATA);
                    _this.sendDATA = DATA;
                    if (_this.sendDATA.success == "input") {
                        loader.dismiss();
                        var alert_5 = _this.alertCtrl.create({
                            message: 'Your quote has been sent successfully to the email address you entered ',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }
                            ]
                        });
                        alert_5.present();
                    }
                    else {
                        console.log("", _this.sendDATA.fail);
                        loader.dismiss();
                        var alert_6 = _this.alertCtrl.create({
                            title: 'Error',
                            message: '' + _this.sendDATA.fail,
                            buttons: ['OK']
                        });
                        alert_6.present();
                    }
                }, function (err) {
                    loader.dismiss();
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'network was disconnected :-(' + err.statusText,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
            else if (_this.invoice) {
                console.log("outstanding", _this.outstanding);
                console.log("subtotal", _this.subtotal);
                console.log("user details check", _this.sendemailData);
                _this.sendobject = { "User_details": _this.sendemailData, "Date": _this.myDate, "InvoiceNo": _this.invoiceNumber, "Main_products": _this.products, "Sub_total": _this.subtotal, "Vat": _this.vat, "Total": _this.total };
                console.log("testing", _this.sendobject);
                _this.api.postSendInvoice(_this.sendobject).subscribe(function (DATA) {
                    console.log("DATA", DATA);
                    console.log("DATA", DATA);
                    _this.sendDATA = DATA;
                    if (_this.sendDATA.success == "input") {
                        loader.dismiss();
                        var alert_7 = _this.alertCtrl.create({
                            message: 'Your quote has been sent successfully to the email address you entered ',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }
                            ]
                        });
                        alert_7.present();
                    }
                    else {
                        console.log("", _this.sendDATA.fail);
                        loader.dismiss();
                        var alert_8 = _this.alertCtrl.create({
                            title: 'Error',
                            message: '' + _this.sendDATA.fail,
                            buttons: ['OK']
                        });
                        alert_8.present();
                    }
                }, function (err) {
                    loader.dismiss();
                    console.log(err);
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        subTitle: 'network was disconnected :-(' + err.statusText,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
        });
    };
    SendquotePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendquotePage');
    };
    SendquotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendquote',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/sendquote/sendquote.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sendquote</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<div *ngIf="discount">\n\n\n  <ion-list>\n  \n  \n    <ion-item>\n      <ion-label color="danger" floating>Name</ion-label>\n      <ion-icon color="danger" item-left name="contact"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Name"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Surname</ion-label>\n      <ion-icon color="danger" item-left name="contact"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Surname"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Street address</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Streetaddress"></ion-input>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label floating>Suburb</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Suburb"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>City/ Twon</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.city"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Postal Code</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Postal"></ion-input>\n    </ion-item>\n  \n  \n  \n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-icon color="danger" item-left name="mail"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.to"></ion-input>\n    </ion-item>\n  \n  \n  \n  \n  </ion-list>\n\n</div> \n\n<div *ngIf="!discount">\n\n\n  <ion-list>\n  \n  \n    <ion-item>\n      <ion-label color="danger" floating>Name</ion-label>\n      <ion-icon color="danger" item-left name="contact"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Name"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Surname</ion-label>\n      <ion-icon color="danger" item-left name="contact"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Surname"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Street address</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Streetaddress"></ion-input>\n    </ion-item>\n  \n  \n    <ion-item>\n      <ion-label floating>Suburb</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Suburb"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>City/ Twon</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.city"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label floating>Postal Code</ion-label>\n      <ion-icon color="danger" item-left name="home"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.Postal"></ion-input>\n    </ion-item>\n  \n  \n  \n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-icon color="danger" item-left name="mail"></ion-icon>\n  \n      <ion-input class="style-input" [(ngModel)]="sendemailData.to"></ion-input>\n    </ion-item>\n  \n  \n  \n  \n  </ion-list>\n\n\n</div>\n\n\n\n  <button ion-button block color="danger" (click)="send()">\n\n    Send\n  </button>'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/sendquote/sendquote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SendquotePage);
    return SendquotePage;
}());

//# sourceMappingURL=sendquote.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productitems_productitems__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductPage = /** @class */ (function () {
    function ProductPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.api.getCategories().subscribe(function (DATA) {
            console.log("data", DATA);
            _this.products = DATA;
        });
        this.addedItems = navParams.get('addedItems');
        console.log("inside", this.addedItems);
    }
    ProductPage.prototype.productitems = function (product) {
        var _this = this;
        console.log("added ", this.addedItems);
        console.log("object", product);
        this.api.getSubCategory(product.id).subscribe(function (DATA) {
            console.log("data", DATA);
            if (DATA.length === 0) {
                console.log("direct to another page", _this.addedItems);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__productitems_productitems__["a" /* ProductitemsPage */], {
                    item: product,
                    addeditems: _this.addedItems
                });
            }
            else {
                _this.products = DATA;
                console.log("Add more data", _this.products);
            }
        });
        // this.navCtrl.push(ProductitemsPage)
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductPage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/product/product.html"*/'\n<ion-header>\n\n  <ion-navbar color="FDMcolor">\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n\n\n\n  <ion-card >\n    <ion-card-header class="header-background-color" text-center>\n      Categories\n    </ion-card-header>\n  \n    <ion-list  inset>\n      <button detail-none text-wrap ion-item class="ion-card" *ngFor="let product of products " (click)="productitems(product)">\n        <ion-icon color="danger" name="md-apps" item-start></ion-icon>\n          <ion-icon color="danger" item-right name="ios-arrow-forward-outline"></ion-icon>\n          <h2>{{product.name}} </h2>\n      </button>\n  \n \n  \n    </ion-list>\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/rcm15/Documents/applord project/fdmApp/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map