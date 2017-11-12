webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messagecontainer_messagecontainer_component__ = __webpack_require__("../../../../../src/app/messagecontainer/messagecontainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__section_section_component__ = __webpack_require__("../../../../../src/app/section/section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container_container_component__ = __webpack_require__("../../../../../src/app/container/container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scrollcontainer_scrollcontainer_component__ = __webpack_require__("../../../../../src/app/scrollcontainer/scrollcontainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_roomadd_component__ = __webpack_require__("../../../../../src/app/chat/roomadd.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_contextmenu__ = __webpack_require__("../../../../ngx-contextmenu/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_virtual_scroll__ = __webpack_require__("../../../../angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_virtual_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_virtual_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_sticky_kit__ = __webpack_require__("../../../../ng2-sticky-kit/ng2-sticky-kit.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var ROUTES = [
    { path: '', redirectTo: 'chats', pathMatch: 'full' },
    { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_3__scrollcontainer_scrollcontainer_component__["a" /* ScrollcontainerComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_4__chat_roomadd_component__["a" /* RoomaddComponent */],
            __WEBPACK_IMPORTED_MODULE_3__scrollcontainer_scrollcontainer_component__["a" /* ScrollcontainerComponent */],
            __WEBPACK_IMPORTED_MODULE_2__container_container_component__["a" /* ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__section_section_component__["a" /* SectionComponent */],
            __WEBPACK_IMPORTED_MODULE_0__messagecontainer_messagecontainer_component__["a" /* MessageContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_18__angular_material__["A" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_sticky_kit__["a" /* StickyModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_contextmenu__["a" /* ContextMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_17_angular2_virtual_scroll__["VirtualScrollModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_bootstrap_modal__["DialogService"],
            { provide: __WEBPACK_IMPORTED_MODULE_10__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_10__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__chat_roomadd_component__["a" /* RoomaddComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
    }
    ChatService.prototype.getRooms = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/room')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.createRoom = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/room', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/chat/' + room)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.showChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/chat/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.saveChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/chat', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.updateChat = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/chat/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.deleteChat = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete('/chat/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return ChatService;
}());
ChatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;\r\n    /* height: 250px; */\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}\r\n[contenteditable=true]:empty:before{\r\n  content: attr(placeholder);\r\n  display: block; /* For Firefox */\r\n}\r\n\r\n/* */\r\n\r\ndiv[contenteditable=true] {\r\n  border: 1px solid #AAA;\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n\r\npre {\r\n  background:#EEE;\r\n  padding:5px;\r\n  width: 290px;\r\n}\r\n\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:95%\">\r\n<container [sections]=\"sections\" *ngIf=\"joinned; else joinroom\"></container>\r\n</div>\r\n<!-- <div class=\"input-group\" *ngIf=\"joinned\" style=\"padding-left:5px;padding-right:5px;\">\r\n    <span class=\"input-group-btn\" style=\"padding-right:2px;\">\r\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n          +\r\n        </button>\r\n    </span>\r\n    <div contenteditable=\"true\" placeholder=\"Enter text here...\" style=\"padding-right:2px;\"></div>\r\n    <span class=\"input-group-btn\">\r\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n            Send\r\n        </button>\r\n    </span>\r\n</div>\r\n<br> -->\r\n<!-- <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\r\n   Logout\r\n</button> -->\r\n<form (ngSubmit)=\"sendMessage()\" style=\"position: fixed;bottom:0;box-sizing: border-box;height:5%;margin-top:3%\" #msgForm=\"ngForm\" *ngIf=\"joinned\" (keyup.enter)=\"sendMessage()\">\r\n<msg-app [(cdMsg)] =\"msgData.message\" [(joinnedMsg)]=\"joinned\"> </msg-app> \r\n</form>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n            <!-- <div class=\"panel panel-primary\" *ngIf=\"joinned\"> -->\r\n                <!-- <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\r\n                            Logout\r\n                        </button>\r\n                    </div>\r\n                </div> -->\r\n                <!-- <div #scrollMe class=\"panel-body\">\r\n                    <container [sections]=\"sections\"></container>\r\n                     <ul class=\"chat\">\r\n                        <li *ngFor=\"let c of chats\">\r\n                            <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\r\n                                <span class=\"chat-img pull-left\">\r\n                              <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                            </span>\r\n                                <div class=\"chat-body clearfix\">\r\n                                    <div class=\"header\">\r\n                                        <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                    </div>\r\n                                    <p>{{ c.message }}</p>\r\n                                </div>\r\n                            </div>\r\n                            <ng-template #rightchat>\r\n                                <div class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                              </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                            <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\r\n                                        </div>\r\n                                        <p>{{ c.message }}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </li>\r\n                    </ul> \r\n                </div> -->\r\n                <!-- <div class=\"panel-footer\">\r\n                    <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\r\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\r\n                            <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\"\r\n                                required=\"\" />\r\n                            <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\r\n                                Send</button>\r\n                        </span>\r\n                        </div>\r\n                    </form>\r\n                </div> -->\r\n\r\n            <!-- </div> -->\r\n            <ng-template #joinroom>\r\n                <div class=\"panel panel-primary\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                        <div class=\"btn-group pull-right\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"showAddRoomDialog()\">\r\n                            Create New Room\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h1>Select Chat Room</h1>\r\n                        <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" placeholder=\"Nickname\" required=\"\"\r\n                                />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <select class=\"form-control\" [(ngModel)]=\"newUser.room\" name=\"room\" required=\"\">\r\n                        <!-- <option>Select Room</option> -->\r\n                        <option *ngFor='let room of rooms' [value]=\"room.roomname\">\r\n                          {{room.roomname}}\r\n                        </option>\r\n                      </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roomadd_component__ = __webpack_require__("../../../../../src/app/chat/roomadd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = (function () {
    // public sections = [
    //   {
    //     name: "Bird",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",
    //     messages: [
    //       {
    //         name: 'Photos asdasd ads <br> asdasdasd adad ',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       }
    //     ]
    //   },
    //   {
    //     name: "Wheel",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
    //     messages: [
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       }
    //     ]
    //   },
    //   {
    //     name: "Horses",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
    //     messages: [
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       }
    //     ]
    //   },
    //   {
    //     name: "Lamp",
    //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
    //     messages: [
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       },
    //       {
    //         name: 'Photos',
    //         updated: new Date('1/1/16'),
    //       },
    //       {
    //         name: 'Recipes',
    //         updated: new Date('1/17/16'),
    //       },
    //       {
    //         name: 'Work',
    //         updated: new Date('1/28/16'),
    //       }
    //     ]
    //   }
    // ];
    function ChatComponent(chatService, dialogService) {
        this.chatService = chatService;
        this.dialogService = dialogService;
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.message = "";
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]();
        this.sections = [];
    }
    ChatComponent.prototype.getdaysArray = function () {
        return [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    };
    ChatComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        this.getRooms();
        if (user !== null) {
            this.getChatByRoom(user.room);
            this.msgData = { room: user.room, nickname: user.nickname, message: '' };
            this.joinned = true;
            this.scrollToBottom();
        }
        this.socket.on('new-message', function (data) {
            console.log(data);
            var roomObj = JSON.parse(localStorage.getItem("user"));
            console.log(roomObj);
            if (roomObj != null && roomObj != undefined) {
                if (data.message.room === JSON.parse(localStorage.getItem("user")).room) {
                    // console.log(this.chats);
                    var lastKey;
                    if (this.chats != undefined && this.chats != null) {
                        for (var key in this.chats) {
                            if (this.chats.hasOwnProperty(key)) {
                                lastKey = key;
                            }
                        }
                        console.log(lastKey);
                        if (lastKey == 'Today') {
                            var lastKeyLength = this.chats[lastKey].length - 1;
                            var lastMessage = this.chats[lastKey][this.chats[lastKey].length - 1].messages;
                            var nowMessage = data.message;
                            if ((lastMessage.nickname == nowMessage.nickname) && (new Date(nowMessage.updated_at).getMinutes() - new Date(lastMessage.updated_at).getMinutes() <= 5)) {
                                console.log("Iam in same cont");
                                this.chats[lastKey][this.chats[lastKey].length - 1].messages.messagesArray.push({ "message": nowMessage.message, "timestamp": nowMessage.updated_at, "nickname": nowMessage.nickname });
                            }
                            if ((lastMessage.nickname != nowMessage.nickname) || (new Date(nowMessage.updated_at).getMinutes() - new Date(lastMessage.updated_at).getMinutes() > 5)) {
                                nowMessage.messagesArray = [];
                                nowMessage.messagesArray.push({ "message": nowMessage.message, "timestamp": nowMessage.updated_at, "nickname": nowMessage.nickname });
                                this.chats[lastKey].push({
                                    "name": lastKey,
                                    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",
                                    "messages": nowMessage,
                                    "messagesArray": nowMessage.messagesArray
                                });
                            }
                        }
                        if (lastKey != 'Today') {
                            lastKey = 'Today';
                            var nowMessage = data.message;
                            nowMessage.messagesArray = [];
                            nowMessage.messagesArray.push({ "message": nowMessage.message, "timestamp": nowMessage.updated_at, "nickname": nowMessage.nickname });
                            this.chats[lastKey] = [];
                            this.chats[lastKey].push({
                                "name": lastKey,
                                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",
                                "messages": nowMessage,
                                "messagesArray": nowMessage.messagesArray
                            });
                            console.log(this.chats);
                            this.sections.push({ "name": lastKey, "messages": this.chats[lastKey] });
                        }
                    }
                    this.msgData = { room: roomObj.room, nickname: roomObj.nickname, message: '' };
                    this.scrollToBottom();
                }
            }
        }.bind(this));
    };
    ChatComponent.prototype.ISOToDateFn = function (date) {
        date = new Date(date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        console.log(dt + '-' + month + '-' + year);
        var datereturn = dt + '-' + month + '-' + year;
        return datereturn;
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.chatService.getChatByRoom(room).then(function (res) {
            _this.sections = [];
            _this.chats = res;
            console.log(_this.chats);
            for (var property in _this.chats) {
                if (_this.chats.hasOwnProperty(property)) {
                    console.log(property);
                    console.log(_this.chats[property]);
                    _this.sections.push({ "name": property, "messages": _this.chats[property] });
                }
            }
            console.log(_this.sections);
        }, function (err) {
            _this.chats = [];
            console.log(err);
        });
    };
    ChatComponent.prototype.joinRoom = function () {
        var date = new Date();
        localStorage.setItem("user", JSON.stringify(this.newUser));
        this.getChatByRoom(this.newUser.room);
        this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
        this.joinned = true;
        this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
    };
    ChatComponent.prototype.getRooms = function () {
        var _this = this;
        this.chatService.getRooms().then(function (res) {
            _this.rooms = res;
            console.log(_this.rooms);
        }, function (err) {
            _this.rooms = [];
            console.log(err);
        });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.saveChat(this.msgData).then(function (result) {
            _this.socket.emit('save-message', result);
        }, function (err) {
            console.log(err);
        });
    };
    ChatComponent.prototype.logout = function () {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        localStorage.removeItem("user");
        this.joinned = false;
    };
    ChatComponent.prototype.showAddRoomDialog = function () {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__roomadd_component__["a" /* RoomaddComponent */], {
            title: 'Add Room'
        })
            .subscribe(function (tosendRoom) {
            //We get dialog result
            var body = document.getElementsByTagName("body")[0];
            body.style.overflow = "";
            if (tosendRoom) {
                console.log(tosendRoom);
                _this.chatService.createRoom(tosendRoom).then(function (result) {
                    console.log("New Room has been saved");
                    _this.getRooms();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/roomadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomaddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomaddComponent = (function (_super) {
    __extends(RoomaddComponent, _super);
    function RoomaddComponent(http, dialogService) {
        var _this = _super.call(this, dialogService) || this;
        _this.http = http;
        _this.RoomData = {};
        return _this;
    }
    RoomaddComponent.prototype.apply = function () {
        this.result = this.RoomData;
        this.close();
    };
    RoomaddComponent.prototype.closeBox = function () {
        var body = document.getElementsByTagName("body")[0];
        body.style.overflow = "";
        this.close();
    };
    return RoomaddComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
RoomaddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prompt',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <h4 class=\"modal-title\">{{title || 'Prompt'}}</h4>\n                     <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n                   </div>\n                   <div class=\"modal-body\">\n\n                <form role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"roomname\">Room Name</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomname\"  name=\"roomname\" [(ngModel)]=\"RoomData.roomname\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"roomdesc\">Room Description</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomdesc\" name=\"roomdesc\" [(ngModel)]=\"RoomData.roomdesc\"/>\n                  </div>                 \n                </form>\n                    \n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"closeBox()\" >Cancel</button>\n                   </div>\n                 </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], RoomaddComponent);

var _a, _b;
//# sourceMappingURL=roomadd.component.js.map

/***/ }),

/***/ "../../../../../src/app/container/container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n  position: fixed;\r\n  top: 0px;\r\n  width:100%;\r\n  z-index: 2;\r\n   background:transparent;  \r\n  color: black; \r\n  height:60px; \r\n  margin-left: 0px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center\r\n} \r\n.header1{\r\n  position: fixed;\r\n  top: 0px;\r\n  width:100%;\r\n  z-index: 2;\r\n   background:transparent;  \r\n  color: black; \r\n  margin-left: 0px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  /* border-bottom: 1px solid darkgrey; */\r\n  height:12px;\r\n  text-align:center;\r\n} \r\n      .ScrollStyle {\r\n            overflow-y: scroll;\r\n            height: 100%;\r\n      }\r\nul {\r\n  list-style-type: none; \r\n  padding: 5px;\r\n}\r\n \r\nh2 {\r\n    font: 33px sans-serif;\r\n    margin-top: 13px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n} \r\n#container{\r\n    overflow: hidden;\r\n}\r\n  #comments{\r\n    overflow-x: hidden;\r\n    height: 95vh;\r\n    width: 100%; \r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.mx_DateSeparator{clear:both;margin-top:32px;margin-bottom:8px;margin-left:63px;padding-bottom:6px;border-bottom:1px solid #e5e5e5}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"header\" *ngIf=\"currentSectionName!=null\">\r\n      <h4 class=\"background\" style=\"text-align:center\"><span>{{currentSectionName}}</span></h4>\r\n</div> -->\r\n<div id=\"comments\" (scroll)=\"onScroll($event)\">\r\n<div class=\"header1\" *ngIf=\"currentSectionName!=null\">\r\n      <span style=\"font-size: 25px; background-color: white; padding: 0 10px;border-radius:25px;\"><span>{{currentSectionName}}</span></span>\r\n</div>\r\n<ul>\r\n      <li *ngFor=\"let section of sections;let sectionindex=index\">\r\n            <section [content]=\"section\" [sectionindex]=\"sectionindex\" [sectionname]=\"section.name\" (sectionPosition)=\"sectionPosition($event)\"></section>\r\n      </li>\r\n</ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContainerComponent = (function () {
    function ContainerComponent(el) {
        this.el = el;
        this.currentSectionName = null;
        this.sectionsIndex = [];
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent.prototype.sectionPosition = function ($event) {
        //filter out the old position if it has been set
        this.sectionsIndex = this.sectionsIndex.filter(function (item) { return item.name != $event.name; });
        //set the new position
        this.sectionsIndex.push($event);
        //sort the section based on their apperance order 
        this.sectionsIndex.sort(function (a, b) {
            return b.position - a.position;
        });
        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.currentSectionName = this.getCurrentSectionName();
        }
    };
    ContainerComponent.prototype.onScroll = function ($event) {
        // console.log('scrolling');
        this.currentSectionName = this.getCurrentSectionName();
    };
    ContainerComponent.prototype.onWindowScroll = function () {
        this.currentSectionName = this.getCurrentSectionName();
    };
    ContainerComponent.prototype.getCurrentSectionName = function () {
        var offset = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
        // console.log(offset);
        // console.log(this.sectionsIndex);
        var sectionComments = document.getElementById("comments");
        // console.log(sectionComments);
        for (var _i = 0, _a = this.sectionsIndex; _i < _a.length; _i++) {
            var section = _a[_i];
            //Note: 13px is the margin-top value of the h2 element in the header
            if ((section.position + offset - sectionComments.scrollTop - 13) < 0) {
                return section.name;
            }
        }
        return null;
    };
    return ContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "sections", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContainerComponent.prototype, "onWindowScroll", null);
ContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'container',
        template: __webpack_require__("../../../../../src/app/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/container/container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ContainerComponent);

var _a;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/messagecontainer/messagecontainer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[contenteditable=true]:empty:before{\r\n  content: attr(placeholder);\r\n  display: block; /* For Firefox */\r\n}\r\n\r\n/* */\r\n\r\ndiv[contenteditable=true] {\r\n  border: 1px solid #AAA;\r\n  width: 100%;\r\n  padding: 5px;\r\n}\r\n\r\npre {\r\n  background:#EEE;\r\n  padding:5px;\r\n  width: 290px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messagecontainer/messagecontainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\" style=\"padding-left:5px;padding-right:5px;background:white\">\r\n    <span class=\"input-group-btn\" style=\"padding-right:5px;\">\r\n        <button (click)=\"logout()\" class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n          Logout\r\n        </button>\r\n    </span>\r\n    <div style=\"width:90%\" contenteditable=\"true\" placeholder=\"Enter text here...\" [textContent]=\"cdMsg\" (input)=\"update($event.target.textContent)\" ></div>\r\n    <span class=\"input-group-btn\" style=\"padding-left:5px;\">\r\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n            Send\r\n        </button>\r\n    </span>\r\n</div>\r\n<br>"

/***/ }),

/***/ "../../../../../src/app/messagecontainer/messagecontainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageContainerComponent = (function () {
    function MessageContainerComponent() {
        this.cdMsgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.joinnedMsgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    MessageContainerComponent.prototype.update = function (val) {
        this.cdMsg = val;
        this.cdMsgChange.emit(this.cdMsg);
    };
    MessageContainerComponent.prototype.logout = function () {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        localStorage.removeItem("user");
        this.joinnedMsg = false;
        this.joinnedMsgChange.emit(this.joinnedMsg);
    };
    return MessageContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], MessageContainerComponent.prototype, "cdMsg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessageContainerComponent.prototype, "cdMsgChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], MessageContainerComponent.prototype, "joinnedMsg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessageContainerComponent.prototype, "joinnedMsgChange", void 0);
MessageContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'msg-app',
        template: __webpack_require__("../../../../../src/app/messagecontainer/messagecontainer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messagecontainer/messagecontainer.component.css")]
    })
], MessageContainerComponent);

//# sourceMappingURL=messagecontainer.component.js.map

/***/ }),

/***/ "../../../../../src/app/scrollcontainer/roomadd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomaddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RoomaddComponent = (function (_super) {
    __extends(RoomaddComponent, _super);
    function RoomaddComponent(http, dialogService) {
        var _this = _super.call(this, dialogService) || this;
        _this.http = http;
        _this.RoomData = {};
        return _this;
    }
    RoomaddComponent.prototype.apply = function () {
        this.result = this.RoomData;
        this.close();
    };
    RoomaddComponent.prototype.closeBox = function () {
        var body = document.getElementsByTagName("body")[0];
        body.style.overflow = "";
        this.close();
    };
    return RoomaddComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));
RoomaddComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prompt',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <h4 class=\"modal-title\">{{title || 'Prompt'}}</h4>\n                     <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n                   </div>\n                   <div class=\"modal-body\">\n\n                <form role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"roomname\">Room Name</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomname\"  name=\"roomname\" [(ngModel)]=\"RoomData.roomname\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"roomdesc\">Room Description</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomdesc\" name=\"roomdesc\" [(ngModel)]=\"RoomData.roomdesc\"/>\n                  </div>                 \n                </form>\n                    \n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"closeBox()\" >Cancel</button>\n                   </div>\n                 </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], RoomaddComponent);

var _a, _b;
//# sourceMappingURL=roomadd.component.js.map

/***/ }),

/***/ "../../../../../src/app/scrollcontainer/scrollcontainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollcontainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roomadd_component__ = __webpack_require__("../../../../../src/app/scrollcontainer/roomadd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScrollcontainerComponent = (function () {
    function ScrollcontainerComponent(chatService, dialogService) {
        this.chatService = chatService;
        this.dialogService = dialogService;
        this.sections = [
            {
                name: "Bird",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg",
                messages: [
                    {
                        name: 'Photos asdasd ads <br> asdasdasd adad ',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    }
                ]
            },
            {
                name: "Wheel",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
                messages: [
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    }
                ]
            },
            {
                name: "Horses",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
                messages: [
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    }
                ]
            },
            {
                name: "Lamp",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg",
                messages: [
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    },
                    {
                        name: 'Photos',
                        updated: new Date('1/1/16'),
                    },
                    {
                        name: 'Recipes',
                        updated: new Date('1/17/16'),
                    },
                    {
                        name: 'Work',
                        updated: new Date('1/28/16'),
                    }
                ]
            }
        ];
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]();
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
    ScrollcontainerComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem("user"));
        this.getRooms();
        if (user !== null) {
            this.getChatByRoom(user.room);
            this.msgData = { room: user.room, nickname: user.nickname, message: '' };
            this.joinned = true;
            this.scrollToBottom();
        }
        this.socket.on('new-message', function (data) {
            console.log(data);
            var roomObj = JSON.parse(localStorage.getItem("user"));
            console.log(roomObj);
            if (roomObj != null && roomObj != undefined) {
                if (data.message.room === JSON.parse(localStorage.getItem("user")).room) {
                    console.log(this.chats);
                    if (this.chats != undefined && this.chats != null) {
                        this.chats.push(data.message);
                    }
                    this.msgData = { room: roomObj.room, nickname: roomObj.nickname, message: '' };
                    this.scrollToBottom();
                }
            }
        }.bind(this));
    };
    ScrollcontainerComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ScrollcontainerComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ScrollcontainerComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.chatService.getChatByRoom(room).then(function (res) {
            _this.chats = res;
        }, function (err) {
            _this.chats = [];
            console.log(err);
        });
    };
    ScrollcontainerComponent.prototype.joinRoom = function () {
        var date = new Date();
        localStorage.setItem("user", JSON.stringify(this.newUser));
        this.getChatByRoom(this.newUser.room);
        this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
        this.joinned = true;
        this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
    };
    ScrollcontainerComponent.prototype.getRooms = function () {
        var _this = this;
        this.chatService.getRooms().then(function (res) {
            _this.rooms = res;
            console.log(_this.rooms);
        }, function (err) {
            _this.rooms = [];
            console.log(err);
        });
    };
    ScrollcontainerComponent.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.saveChat(this.msgData).then(function (result) {
            _this.socket.emit('save-message', result);
        }, function (err) {
            console.log(err);
        });
    };
    ScrollcontainerComponent.prototype.logout = function () {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        localStorage.removeItem("user");
        this.joinned = false;
    };
    ScrollcontainerComponent.prototype.showAddRoomDialog = function () {
        var _this = this;
        var body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
        this.dialogService.addDialog(__WEBPACK_IMPORTED_MODULE_4__roomadd_component__["a" /* RoomaddComponent */], {
            title: 'Add Room'
        })
            .subscribe(function (tosendRoom) {
            //We get dialog result
            var body = document.getElementsByTagName("body")[0];
            body.style.overflow = "";
            if (tosendRoom) {
                console.log(tosendRoom);
                _this.chatService.createRoom(tosendRoom).then(function (result) {
                    console.log("New Room has been saved");
                    _this.getRooms();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    return ScrollcontainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ScrollcontainerComponent.prototype, "myScrollContainer", void 0);
ScrollcontainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        // templateUrl: './scrollcontainer.component.html',
        // styleUrls: ['./scrollcontainer.component.css']
        template: "<container [sections]=\"sections\"></container>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], ScrollcontainerComponent);

var _a, _b, _c;
//# sourceMappingURL=scrollcontainer.component.js.map

/***/ }),

/***/ "../../../../../src/app/section/bundle.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gm-scrollbar-disable-selection{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.gm-prevented{-webkit-overflow-scrolling:touch}.gm-prevented .gm-scrollbar{display:none}.gm-scrollbar-container{position:relative;overflow:hidden!important;width:100%;height:100%}.gm-scrollbar{position:absolute;right:2px;bottom:2px;z-index:1;border-radius:3px}.gm-scrollbar.-vertical{width:6px;top:2px}.gm-scrollbar.-horizontal{height:6px;left:2px}.gm-scrollbar .thumb{position:relative;display:block;width:0;height:0;cursor:pointer;border-radius:inherit;background-color:rgba(0,0,0,.2)}.gm-scrollbar .thumb:active,.gm-scrollbar .thumb:hover{background-color:rgba(0,0,0,.3)}.gm-scrollbar.-vertical .thumb{width:100%}.gm-scrollbar.-horizontal .thumb{height:100%}.gm-scrollbar-container .gm-scroll-view{width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch}.gm-scrollbar-container.gm-autoshow .gm-scrollbar{opacity:0;transition:opacity 120ms ease-out}.gm-scrollbar-container.gm-autoshow:active .gm-scrollbar,.gm-scrollbar-container.gm-autoshow:focus .gm-scrollbar,.gm-scrollbar-container.gm-autoshow:hover .gm-scrollbar{opacity:1;transition:opacity 340ms ease-out}.gm-resize-trigger{position:absolute;display:block;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0}.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#333;overflow:hidden;font-family:'Helvetica Neue',Helvetica,'Segoe UI',Arial,freesans,sans-serif;font-size:16px;line-height:1.6;word-wrap:break-word}.markdown-body *{box-sizing:border-box}.markdown-body>:first-child{margin-top:0!important}.markdown-body>:last-child{margin-bottom:0!important}.markdown-body a{background:0 0;color:#4183c4;text-decoration:none}.markdown-body a:active,.markdown-body a:hover{outline:0}.markdown-body a:active,.markdown-body a:focus,.markdown-body a:hover{text-decoration:underline}.markdown-body strong{font-weight:700}.markdown-body em{font-style:italic}.markdown-body blockquote,.markdown-body dl,.markdown-body ol,.markdown-body p,.markdown-body pre,.markdown-body table,.markdown-body ul{margin-top:0;margin-bottom:16px}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{font-family:'Helvetica Neue',Helvetica,'Segoe UI',Arial,freesans,sans-serif;position:relative;margin-top:1em;margin-bottom:16px;font-weight:700;line-height:1.4}.markdown-body h1,.markdown-body h2{padding-bottom:.3em;border-bottom:1px solid #eee}.markdown-body h1{font-size:2.25em;line-height:1.2}.markdown-body h2{font-size:1.75em;line-height:1.225}.markdown-body h3{font-size:1.5em}.markdown-body h4{font-size:1.25em}.markdown-body h5{font-size:1em}.markdown-body h6{font-size:1em;color:#777}.markdown-body code,.markdown-body kbd,.markdown-body pre{font-family:Consolas,'Liberation Mono',Menlo,Courier,monospace}.markdown-body code{padding:.2em 0;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.markdown-body code:after,.markdown-body code:before{letter-spacing:-.2em;content:'\\A0'}.markdown-body pre{word-wrap:normal;padding:16px;overflow:auto;font-size:85%;line-height:1.45;background-color:#f7f7f7;border-radius:3px}.markdown-body pre code{display:inline;max-width:initial;padding:0;margin:0;overflow:initial;line-height:inherit;word-wrap:normal;background:0 0}.markdown-body pre code:after,.markdown-body pre code:before{content:normal}.markdown-body pre>code{font-size:1em;word-break:normal;white-space:pre;border:0}.markdown-body kbd{background-color:#e7e7e7;background-image:linear-gradient(#fefefe,#e7e7e7);background-repeat:repeat-x;display:inline-block;padding:5px 5px 1px;margin:0 1px;font-size:11px;line-height:10px;color:#000;border:1px solid #cfcfcf;border-radius:2px;box-shadow:0 1px 0 #ccc}.markdown-body hr:after,.markdown-body hr:before{display:table;content:''}.markdown-body input{color:inherit;font:inherit;margin:0;font-size:13px;line-height:1.4;font-family:Helvetica,Arial,freesans,clean,sans-serif,'Segoe UI Emoji','Segoe UI Symbol'}.markdown-body input[disabled]{cursor:default}.markdown-body input[type=checkbox]{box-sizing:border-box;padding:0}.markdown-body blockquote{margin:0 0 16px;padding:0 15px;color:#777;border-left:4px solid #ddd}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body img{border:0;max-width:100%;box-sizing:border-box}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:#e7e7e7;height:4px;padding:0;margin:16px 0;border:0}.markdown-body hr:after{clear:both}.markdown-body td,.markdown-body th{padding:0}.markdown-body table{border-collapse:collapse;border-spacing:0;display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all}.markdown-body table td,.markdown-body table th{padding:6px 13px;border:1px solid #ddd}.markdown-body table th{font-weight:700}.markdown-body table tr{background-color:#fff;border-top:1px solid #ccc}.markdown-body table tr:nth-child(2n){background-color:#f8f8f8}.markdown-body ol,.markdown-body ul{padding:0 0 0 2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:0;margin-bottom:0}.markdown-body ol ol ol,.markdown-body ol ul ol,.markdown-body ul ol ol,.markdown-body ul ul ol{list-style-type:lower-alpha}.markdown-body li>p{margin-top:16px}.markdown-body dd{margin-left:0}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:16px;font-size:1em;font-style:italic;font-weight:700}.markdown-body dl dd{padding:0 16px;margin-bottom:16px}.hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-meta,.hljs-strong{font-weight:700}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.DraftEditor-root,.public-DraftEditor-block{position:relative}.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-editorContainer{background-color:rgba(255,255,255,0);border-left:.1px solid transparent;position:relative;z-index:1}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:1}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/riot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container_186vsl5\" on-mouseleave=\"hoveredIndex=null\">\r\n    <ol class=\"mx_RoomView_MessageList\" aria-live=\"polite\">\r\n        <li>\r\n            <h2 class=\"mx_DateSeparator\">{{content.name}} </h2>\r\n        </li>\r\n        <li data-scroll-tokens=\"$15099841154004583psaCa:matrix.org\" *ngFor=\"let message of content.messages; let index=index;\" on-mouseover=\"hoveredIndex=index\">\r\n            <div class=\"mx_EventTile\">\r\n\r\n                <div class=\"mx_EventTile_avatar\"><img class=\"mx_BaseAvatar mx_BaseAvatar_image mx_AccessibleButton\" src=\"https://matrix.org/_matrix/media/v1/thumbnail/matrix.org/GQARBLLbPNAsbDPVvKOzncQu?width=30&amp;height=30&amp;method=crop\"\r\n                        width=\"30\" height=\"30\" title=\"@riot-bot:matrix.org\" alt=\"\" tabindex=\"0\" role=\"button\"></div>\r\n                <div class=\"mx_SenderProfile\" dir=\"auto\">\r\n                    <span class=\"mx_SenderProfile_name\"><b>{{ message.messages.nickname }}</b> <span> {{ message.messages.updated_at | date:'shortTime' }}</span></span>\r\n                    <div></div>\r\n                </div>\r\n                <div *ngFor=\"let nmp of message.messages.messagesArray\" class=\"mx_EventTile_line\">\r\n                    <a href=\"https://matrix.to/#/!ktYANEKhYuRSNQeiKR:matrix.org/$15099841154004583psaCa:matrix.org\">\r\n                        <span class=\"mx_MessageTimestamp\"> {{ nmp.timestamp | date:'shortTime' }}\r\n                        </span>\r\n                    </a>\r\n                    <span class=\"mx_MTextBody mx_EventTile_content\"><span class=\"mx_EventTile_body\" dir=\"auto\" *ngIf=\"nmp.message!=''\" >{{ nmp.message }}</span></span>\r\n\r\n                    <span class=\"mx_EventTile_editButton\" title=\"Options\" [matMenuTriggerFor]=\"menu\" (click)=\"handleWheelEvent()\" >\r\n                    </span>\r\n                    <mat-menu #menu=\"matMenu\">\r\n                        <button mat-menu-item>\r\n                        <span>Remove</span>\r\n                    </button>\r\n                        <button mat-menu-item>\r\n                        <span>Forward Message</span>\r\n                    </button>\r\n                        <button mat-menu-item>\r\n                        <span>View Source</span>\r\n                    </button>\r\n                        <button mat-menu-item>\r\n                        <span>Copy Link</span>\r\n                    </button>\r\n                        <button mat-menu-item>\r\n                        <span>Quote</span>\r\n                    </button>\r\n                    </mat-menu>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li class=\"mx_RoomView_myReadMarker_container\"></li>\r\n    </ol>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/section/section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__("../../../../../src/app/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionComponent = SectionComponent_1 = (function () {
    function SectionComponent(element, chatService) {
        this.element = element;
        this.chatService = chatService;
        this.items = [
            { name: 'John', otherProperty: 'Foo' },
            { name: 'Joe', otherProperty: 'Bar' }
        ];
        this.sectionPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.value = 'false';
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    SectionComponent.prototype.showMenu = function () {
        this.value = 'true';
    };
    SectionComponent.prototype.onResize = function (event) {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    SectionComponent.prototype.handleClickEvent = function (event) {
        if (event.which == 1) {
            document.getElementById('comments').style.overflowY = 'scroll';
        }
    };
    SectionComponent.prototype.handleWheelEvent = function () {
        // var sectionComments = document.getElementById("comments");
        // document.getElementById('comments').style.overflowX = 'hidden';
        document.getElementById('comments').style.overflowY = 'hidden';
    };
    SectionComponent.prototype.copyTextToClipboard = function (text) {
        var textArea = document.createElement("textarea");
        // Place in top-left corner of screen regardless of scroll position.
        textArea.style.position = 'fixed';
        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        }
        catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
    };
    return SectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(SectionComponent_1),
    __metadata("design:type", SectionComponent)
], SectionComponent.prototype, "basicMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionindex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionname", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionComponent.prototype, "onResize", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionComponent.prototype, "handleClickEvent", null);
SectionComponent = SectionComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'section',
        // templateUrl: './section.component.html',
        // styleUrls: ['./section.component.css']
        template: __webpack_require__("../../../../../src/app/section/riot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/section/theme.css"), __webpack_require__("../../../../../src/app/section/bundle.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], SectionComponent);

var SectionComponent_1, _a, _b;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ "../../../../../src/app/section/theme.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mx_EventTile_msgOption a,.mx_FilePanel .mx_EventTile_senderDetailsLink{text-decoration:none}.mx_FilePanel .mx_EventTile,.mx_NotificationPanel .mx_EventTile{word-break:break-word}.mx_Dialog_content,.mx_GroupView_featuredThing_name,.mx_RoomView{word-wrap:break-word}.changelog_text,.mx_SearchBox_search,body,textarea{font-family:'Open Sans',Arial,Helvetica,Sans-Serif}.mx_AppLoading,.mx_AppsContainer,.mx_MatrixChat_wrapper,.mx_MessageComposer_row,.mx_RoomView,.mx_RoomView_messageListWrapper,.mx_UnknownDeviceDialog,.mx_UserSettings{-webkit-box-direction:normal}.mx_AddressTile_dismiss object,.mx_BaseAvatar_initial,.mx_BottomLeftMenu_options object,.mx_Dialog_cancelButton object,.mx_Dialog_lightbox .mx_Dialog,.mx_GroupHeader_button object,.mx_GroupView_featuredThings_addButton object,.mx_MImageBody_download object,.mx_MessageComposer_apps object,.mx_MessageComposer_hangup object,.mx_MessageComposer_upload object,.mx_MessageComposer_videocall object,.mx_MessageComposer_voicecall object,.mx_MyGroups_joinCreateButton object,.mx_RightPanel_headerButton object,.mx_RightPanel_invite .mx_RightPanel_icon object,.mx_RoleButton object,.mx_RoomHeader_button object,.mx_RoomHeader_settingsButton object,.mx_RoomSubList_chevron,.mx_RoomView_fileDropTarget,.mx_RoomView_voipButton object,.mx_SearchBox object,.mx_SearchBox_searchButton{pointer-events:none}html{height:100%;overflow:hidden}body{font-size:15px;background-color:#fff;color:#454545;border:0;margin:0;-webkit-font-smoothing:subpixel-antialiased}div.error{color:red}h2{color:#454545;font-weight:400;font-size:18px;margin-top:16px;margin-bottom:16px}a:hover,a:link,a:visited{color:#76CFA6}input[type=password],input[type=text],textarea{background-color:transparent;color:#454545}input[type=password].error,input[type=text].error{border:1px solid #ff0064}input[type=password]:focus,input[type=text]:focus,textarea:focus{border:1px solid #76CFA6;outline:0;box-shadow:none}::-moz-focus-inner{border:0}.mx_fadable{opacity:1;transition:opacity .2s ease-in-out}.gm-scrollbar-container .gm-scroll-view{position:absolute}.gm-scrollbar{border-radius:5px!important}.gm-scrollbar.-vertical{width:6px;transition:width 120ms ease-out!important}.gm-scrollbar.-vertical:active,.gm-scrollbar.-vertical:hover{width:8px;transition:width 120ms ease-out!important}.gm-scrollbar.-horizontal{height:6px;transition:height 120ms ease-out!important}.gm-scrollbar.-horizontal:active,.gm-scrollbar.-horizontal:hover{height:8px;transition:height 120ms ease-out!important}.mx_Dialog_wrapper{position:fixed;z-index:4000;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mx_Dialog_wrapper.mx_Dialog_spinner .mx_Dialog{width:auto;border-radius:8px;padding:0;box-shadow:none}.mx_Dialog_wrapper.mx_Dialog_viewsource .mx_Dialog{padding-left:10px;padding-right:10px}.mx_Dialog{background-color:#fff;color:#747474;z-index:4010;font-weight:300;font-size:15px;position:relative;padding-left:58px;padding-bottom:36px;width:60%;max-width:704px;box-shadow:0 1px 0 0 rgba(0,0,0,.2);max-height:80%;overflow-y:auto}.mx_Dialog_background{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#e9e9e9;opacity:.8}.mx_Dialog_lightbox .mx_Dialog_background{opacity:.85;background-color:#000}.mx_Dialog_lightbox .mx_Dialog{border-radius:0;background-color:transparent;width:100%;height:100%;max-width:100%;max-height:100%}.mx_Dialog_cancelButton{position:absolute;right:11px;top:13px;cursor:pointer}.mx_Dialog_content{margin:24px 58px 68px 0;font-size:14px;color:#454545}.mx_Dialog button,.mx_Dialog input[type=submit]{height:36px;border-radius:40px;border:1px solid #76CFA6;font-weight:600;font-size:14px;font-family:'Open Sans',Arial,Helvetica,Sans-Serif;margin-left:0;margin-right:8px;padding-left:1.5em;padding-right:1.5em;outline:0;cursor:pointer;color:#76CFA6;background-color:#fff;vertical-align:middle}.mx_Dialog button:focus,.mx_Dialog input[type=submit]:focus{-webkit-filter:brightness(125%);filter:brightness(125%)}.mx_Dialog button.mx_Dialog_primary,.mx_Dialog input[type=submit].mx_Dialog_primary{color:#fff;background-color:#76CFA6}.mx_Dialog button.danger,.mx_Dialog input[type=submit].danger{background-color:#ff0064;border:1px solid #ff0064}.mx_Dialog button:disabled,.mx_Dialog input[type=submit]:disabled{background-color:#747474;border:1px solid #747474;opacity:.7}.mx_Dialog_title{min-height:16px;padding-top:40px;font-weight:700;font-size:22px;line-height:1.4;color:#454545}.mx_Dialog_title.danger{color:#ff0064}.mx_TextInputDialog_label{text-align:left;padding-bottom:12px}.mx_TextInputDialog_input{font-size:15px;border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff}.mx_emojione{height:1em;vertical-align:middle}::-moz-selection{background-color:#76CFA6;color:#fff}::selection{background-color:#76CFA6;color:#fff}.mx_textButton{color:#fff;background-color:#76CFA6;border-radius:17px;text-align:center;padding-left:1em;padding-right:1em;cursor:pointer;display:inline}.mx_button_row{margin-top:69px}.mx_Beta{color:red;margin-right:10px;position:relative;top:-3px;background-color:#fff;padding:0 4px;border-radius:3px;border:1px solid #8b0000;cursor:help;transition-duration:.2s;font-size:smaller;-webkit-filter:opacity(.5);filter:opacity(.5)}.mx_Beta:hover{color:#fff;border:1px solid gray;background-color:#8b0000}.mx_ContextualMenu_wrapper{position:fixed;z-index:2000}.mx_ContextualMenu_background{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:2000}.mx_ContextualMenu{border:1px solid rgba(187,187,187,.5);border-radius:4px;background-color:#f6f6f6;color:#454545;position:absolute;padding:6px;font-size:14px;z-index:2001}.mx_ContextualMenu.mx_ContextualMenu_right{right:8px}.mx_ContextualMenu_chevron_right{position:absolute;right:-8px;top:0;width:0;height:0;border-top:8px solid transparent;border-left:8px solid rgba(187,187,187,.5);border-bottom:8px solid transparent}.mx_ContextualMenu_chevron_right:after{content:'';width:0;height:0;border-top:7px solid transparent;border-left:7px solid #f6f6f6;border-bottom:7px solid transparent;position:absolute;top:-7px;right:1px}.mx_ContextualMenu.mx_ContextualMenu_left{left:8px}.mx_ContextualMenu_chevron_left{position:absolute;left:-8px;top:0;width:0;height:0;border-top:8px solid transparent;border-right:8px solid rgba(187,187,187,.5);border-bottom:8px solid transparent}.mx_ContextualMenu_chevron_left:after{content:'';width:0;height:0;border-top:7px solid transparent;border-right:7px solid #f6f6f6;border-bottom:7px solid transparent;position:absolute;top:-7px;left:1px}.mx_ContextualMenu_field{padding:3px 6px;cursor:pointer;white-space:nowrap}.mx_ContextualMenu_spinner{display:block;margin:0 auto}.mx_CreateRoom{width:960px;margin-left:auto;margin-right:auto;color:#454545}.mx_CreateRoom input,.mx_CreateRoom textarea{border-radius:3px;border:1px solid #c7c7c7;font-weight:300;font-size:13px;padding:9px;margin-top:6px}.mx_CreateRoom_description{width:330px}.mx_FilePanel{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;width:100%;overflow-y:auto}.mx_FilePanel .mx_RoomView_messageListWrapper{margin-right:20px}.mx_FilePanel .mx_EventTile_avatar,.mx_FilePanel .mx_RoomView_MessageList h2{display:none}.mx_FilePanel .mx_EventTile .mx_MImageBody{margin-right:0}.mx_FilePanel .mx_EventTile .mx_MImageBody_download{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;color:#acacac}.mx_FilePanel .mx_EventTile .mx_MImageBody_downloadLink{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;color:#747474}.mx_FilePanel .mx_EventTile .mx_MImageBody_size{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;font-size:11px;text-align:right;white-space:nowrap}.mx_FilePanel .mx_EventTile_senderDetails{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:-2px}.mx_FilePanel .mx_EventTile .mx_SenderProfile{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;line-height:initial;padding:0;font-size:11px;opacity:1;color:#acacac}.mx_FilePanel .mx_EventTile .mx_MessageTimestamp{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;text-align:right;visibility:visible;position:initial;font-size:11px;opacity:1;color:#acacac}.mx_FilePanel .mx_EventTile_line{margin-right:0;padding-left:0}.mx_FilePanel .mx_EventTile:hover .mx_EventTile_line{background-color:#fff}.mx_FilePanel .mx_EventTile_selected .mx_EventTile_line{padding-left:0}.mx_GroupView{max-width:960px;width:100%;margin-left:auto;margin-right:auto}.mx_GroupView_error{margin:auto}.mx_GroupView_header{max-width:960px;margin:auto auto 20px;height:70px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.mx_GroupView_header_view{border-bottom:1px solid #e5e5e5}.mx_GroupView_header_avatar,.mx_GroupView_header_info{display:table-cell;vertical-align:middle}.mx_GroupHeader_button{margin-left:12px;cursor:pointer}.mx_GroupView_avatarPicker{position:relative}.mx_GroupView_avatarPicker_edit{position:absolute;top:50px;left:15px}.mx_GroupView_avatarPicker .mx_Spinner{width:48px;height:48px!important}.mx_GroupView_header_leftCol{-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_GroupView_header_rightCol{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mx_GroupView_textButton{display:inline-block}.mx_GroupView_header_groupid{font-weight:400;font-size:initial;padding-left:10px}.mx_GroupView_header_name,.mx_GroupView_header_shortDesc{padding-left:19px;overflow:hidden;border-bottom:1px solid transparent;text-overflow:ellipsis}.mx_GroupView_header_name{vertical-align:middle;width:100%;height:31px;color:#454545;font-weight:700;font-size:22px;padding-right:16px}.mx_GroupView_header_name input,.mx_GroupView_header_shortDesc input{width:400px}.mx_GroupView_header_shortDesc{vertical-align:bottom;float:left;max-height:42px;color:#a2a2a2;font-weight:300;font-size:13px;margin-right:16px}.mx_GroupView_avatarPicker_label{cursor:pointer}.mx_GroupView_cancelButton{padding-left:8px}.mx_GroupView_cancelButton img{position:relative;top:5px}.mx_GroupView_membershipSection{margin-left:auto;margin-right:auto;margin-bottom:11px;color:#888}.mx_GroupView_membershipSubSection{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:2px;margin-bottom:2px}.mx_GroupView_membershipSection_description{line-height:34px}.mx_GroupView_membershipSection .mx_GroupView_textButton{margin-right:0;margin-top:0;margin-left:8px}.mx_GroupView_featuredThings{margin-top:20px}.mx_GroupView_featuredThings_header{font-weight:700;font-size:120%;margin-bottom:20px}.mx_GroupView_featuredThings_category{font-weight:700;font-size:110%;margin-top:10px}.mx_GroupView_featuredThings_container{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_GroupView_featuredThing,.mx_GroupView_featuredThings_addButton{display:table-cell;text-align:center;width:100px;margin:0 20px}.mx_GroupView_featuredThing{position:relative}.mx_GroupView_featuredThing .mx_GroupView_featuredThing_deleteButton{position:absolute;top:-7px;right:11px;opacity:.4}.mx_GroupView_featuredThing .mx_BaseAvatar{vertical-align:initial}.mx_GroupView_uploadInput{display:none}.mx_MatrixChat,.mx_MatrixChat_wrapper{width:100%;display:-webkit-box;display:-ms-flexbox}.mx_GroupView_editLongDesc{width:100%;height:150px}.mx_LoginBox{min-height:24px;height:unset!important;padding-top:13px!important;padding-bottom:14px!important}.mx_LoginBox_loginButton_wrapper{text-align:center;width:100%}.mx_LoginBox_loginButton,.mx_LoginBox_registerButton{margin-top:3px;height:40px;border:0;border-radius:40px;margin-left:4px;margin-right:4px;min-width:80px;background-color:#76CFA6;color:#fff;cursor:pointer;font-size:15px;padding:0 11px;word-break:break-word}.mx_MatrixChat_splash{position:relative;height:100%}.mx_MatrixChat_splashButtons{text-align:center;width:100%;position:absolute;bottom:30px}.mx_MatrixChat_wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;height:100%}.mx_MatrixToolbar{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;height:40px}.mx_MatrixChat_toolbarShowing{height:auto}.mx_MatrixChat{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_MatrixChat .mx_LeftPanel{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;background-color:#eaf5f0;-webkit-box-flex:0;-ms-flex:0 0 235px;flex:0 0 235px}.mx_MatrixChat .mx_LeftPanel.collapsed{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px}.mx_MatrixChat .mx_MatrixChat_middlePanel{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;padding-left:20px;padding-right:22px;background-color:#fff;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-x:auto;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.mx_MatrixChat .mx_RightPanel{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;-webkit-box-flex:0;-ms-flex:0 0 235px;flex:0 0 235px}.mx_MatrixChat .mx_RightPanel.collapsed{-webkit-box-flex:0;-ms-flex:0 0 122px;flex:0 0 122px}.mx_MyGroups{max-width:960px;margin-left:auto;margin-right:auto}.mx_MyGroups .mx_RoomHeader_simpleHeader{margin-left:0}.mx_MyGroups_joinCreateBox{display:table;margin-bottom:30px}.mx_MyGroups_createBox,.mx_MyGroups_joinBox{display:table-cell;width:40%}.mx_MyGroups_joinBox{visibility:hidden}.mx_MyGroups_joinCreateHeader{font-weight:700;margin-bottom:10px}.mx_MyGroups_joinCreateButton{float:left;margin:10px}.mx_MyGroups_content{clear:left}.mx_NotificationPanel{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;width:100%;overflow-y:auto}.mx_NotificationPanel .mx_RoomView_messageListWrapper{margin-right:20px}.mx_NotificationPanel .mx_RoomView_MessageList h2{margin-left:0}.mx_NotificationPanel .mx_EventTile_roomName{font-weight:700;font-size:14px}.mx_NotificationPanel .mx_EventTile_roomName a{color:#454545}.mx_NotificationPanel .mx_EventTile_avatar{top:8px;left:0}.mx_NotificationPanel .mx_EventTile .mx_MessageTimestamp,.mx_NotificationPanel .mx_EventTile .mx_SenderProfile{color:#454545;font-size:12px;display:inline;padding-left:0}.mx_NotificationPanel .mx_EventTile_senderDetails{padding-left:32px;padding-top:8px;position:relative}.mx_NotificationPanel .mx_EventTile_roomName a,.mx_NotificationPanel .mx_EventTile_senderDetails a{text-decoration:none!important}.mx_NotificationPanel .mx_EventTile .mx_MessageTimestamp{visibility:visible;position:initial;display:inline}.mx_NotificationPanel .mx_EventTile_line{margin-right:0;padding:0 0 0 32px}.mx_NotificationPanel .mx_EventTile:hover .mx_EventTile_line{background-color:#fff}.mx_NotificationPanel .mx_EventTile_selected .mx_EventTile_line{padding-left:0}.mx_NotificationPanel .mx_EventTile_content{margin-right:0}.mx_RoomStatusBar{margin-left:65px;min-height:50px}.mx_RoomStatusBar_indicator{padding-left:17px;padding-right:12px;margin-left:-73px;margin-top:15px;float:left;width:24px;text-align:center}.mx_RoomStatusBar_callBar{height:50px;line-height:50px}.mx_RoomStatusBar_placeholderIndicator span{color:#454545;opacity:.5;position:relative;top:-4px}.mx_RoomStatusBar_placeholderIndicator span:nth-child(1){-webkit-animation-delay:.3s;animation-delay:.3s}.mx_RoomStatusBar_placeholderIndicator span:nth-child(2){-webkit-animation-delay:.6s;animation-delay:.6s}.mx_RoomStatusBar_placeholderIndicator span:nth-child(3){-webkit-animation-delay:.9s;animation-delay:.9s}@-webkit-keyframes bounce{from{opacity:.5;top:0}to{opacity:.2;top:-3px}}@keyframes bounce{from{opacity:.5;top:0}to{opacity:.2;top:-3px}}.mx_RoomStatusBar_typingIndicatorAvatars{width:52px;margin-top:-1px;text-align:left}.mx_RoomStatusBar_typingIndicatorAvatars .mx_BaseAvatar_image{margin-right:-12px;border:1px solid #fff}.mx_RoomStatusBar_typingIndicatorAvatars .mx_BaseAvatar_initial{padding-left:1px;padding-top:1px}.mx_RoomStatusBar_typingIndicatorRemaining{display:inline-block;color:#acacac;background-color:#ddd;border:1px solid #fff;border-radius:40px;width:24px;height:24px;line-height:24px;font-size:.8em;vertical-align:top;text-align:center;position:absolute}.mx_RoomStatusBar_scrollDownIndicator{cursor:pointer;padding-left:1px}.mx_RoomStatusBar_unreadMessagesBar{padding-top:10px;color:#ff0064;cursor:pointer}.mx_RoomStatusBar_connectionLostBar{margin-top:19px;min-height:58px}.mx_RoomStatusBar_connectionLostBar img{padding-left:10px;padding-right:22px;vertical-align:middle;float:left}.mx_RoomStatusBar_connectionLostBar_title{color:#ff0064}.mx_RoomStatusBar_connectionLostBar_desc{color:#454545;font-size:13px;opacity:.5}.mx_RoomStatusBar_resend_link{color:#454545!important;text-decoration:underline!important;cursor:pointer}.mx_RoomStatusBar_typingBar{height:50px;line-height:50px;color:#454545;opacity:.5;overflow-y:hidden;display:block}.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar{min-height:40px}.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar_indicator{margin-top:10px}.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar_callBar,.mx_MatrixChat_useCompactLayout .mx_RoomStatusBar_typingBar{height:40px;line-height:40px}.mx_RoomView{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.mx_RoomView .mx_RoomHeader{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 0 70px;flex:0 0 70px}.mx_RoomView_fileDropTarget{min-width:0;max-width:960px;width:100%;font-size:18px;text-align:center;padding-left:12px;padding-right:12px;margin-left:-12px;border-top-left-radius:10px;border-top-right-radius:10px;background-color:rgba(255,255,255,.5);border:2px solid #e1dddd;border-bottom:none;position:absolute;top:70px;bottom:0;z-index:3000}.mx_RoomView_fileDropTargetLabel{top:50%;width:100%;margin-top:-50px;position:absolute}.mx_RoomView_auxPanel{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;min-width:0;max-width:960px;width:100%;margin:auto;overflow:auto;border-bottom:1px solid #e5e5e5;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.mx_RoomView_auxPanel_apps{max-width:1920px!important}.mx_RoomView_topUnreadMessagesBar{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.mx_RoomView_messagePanel{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;width:100%;overflow-y:auto}.mx_RoomView_messageListWrapper{margin:auto;min-height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.mx_RoomView_searchResultsPanel .mx_RoomView_messageListWrapper{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.mx_RoomView_empty{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;font-size:13px;padding-left:3em;padding-right:3em;margin-right:20px;margin-top:33%;text-align:center}.mx_RoomView_MessageList{width:100%;list-style-type:none;padding:0}.mx_RoomView_MessageList li{clear:both}.mx_RoomView_invitePrompt{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;min-width:0;max-width:960px;width:100%;margin:12px auto}li.mx_RoomView_myReadMarker_container{height:0;margin:0;padding:0;border:0}hr.mx_RoomView_myReadMarker{border-top:solid 1px #76CFA6;border-bottom:solid 1px #76CFA6;margin-top:0;position:relative;top:-1px;z-index:1}.mx_RoomView_statusArea{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;width:100%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;max-height:0;background-color:#fff;z-index:1000;overflow:hidden;-webkit-transition:all .2s ease-out;-moz-transition:all .2s ease-out;-ms-transition:all .2s ease-out;-o-transition:all .2s ease-out}.mx_RoomView_statusArea_expanded{max-height:100px}.mx_RoomView_statusAreaBox{max-width:960px;margin:auto;min-height:50px}.mx_RoomView_statusAreaBox_line{margin-left:65px;border-top:1px solid #e5e5e5;height:1px}.mx_RoomView_callStatusBar .mx_UploadBar_uploadProgressInner{background-color:#fff}.mx_RoomView_callStatusBar .mx_UploadBar_uploadFilename{color:#fff;opacity:1}.mx_RoomView_inCall .mx_RoomView_statusAreaBox_line{margin-top:2px;border:none;height:0}.mx_RoomView_inCall .mx_MessageComposer_wrapper{border-top:2px hidden;padding-top:1px}.mx_RoomView_inCall .mx_RoomView_statusAreaBox{background-color:#76CFA6;color:#fff;position:relative}.mx_RoomView_voipChevron{position:absolute;bottom:-11px;right:11px}.mx_RoomView_voipButton{float:right;margin-right:13px;margin-top:10px;cursor:pointer}.mx_RoomView .mx_MessageComposer{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;width:100%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;margin-right:2px}.mx_RoomView_ongoingConfCallNotification{width:100%;text-align:center;background-color:#ff0064;color:#fff;font-weight:700;padding:6px 0;cursor:pointer}.mx_RoomView_ongoingConfCallNotification a{color:#fff!important}.mx_MatrixChat_useCompactLayout .mx_RoomView_MessageList{margin-bottom:4px}.mx_MatrixChat_useCompactLayout .mx_RoomView_statusAreaBox{min-height:42px}.mx_SearchBox{height:24px;margin-left:16px;margin-right:16px;padding-top:24px;padding-bottom:22px;display:-webkit-box;display:-ms-flexbox;display:flex}.mx_SearchBox_searchButton{margin-right:10px;margin-top:5px}.mx_SearchBox_closeButton{cursor:pointer;margin-top:-5px}.mx_SearchBox_search{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;width:0;font-size:12px;margin-top:-2px;height:24px;border:0!important}.mx_SearchBox_maximise,.mx_SearchBox_minimise{margin-top:3px;cursor:pointer}.mx_SearchBox_minimise{margin-left:10px}.mx_SearchBox_maximise{margin-left:9px}.mx_UploadBar{position:relative}.mx_UploadBar_uploadProgressOuter{height:5px;margin-left:63px;margin-top:-1px;padding-bottom:5px}.mx_UploadBar_uploadProgressInner{background-color:#76CFA6;height:5px}.mx_UploadBar_uploadFilename{margin-top:5px;margin-left:65px;opacity:.5;color:#454545}.mx_UploadBar_uploadIcon{float:left;margin-top:5px;margin-left:14px}.mx_UploadBar_uploadCancel{float:right;margin-top:5px;margin-right:10px;position:relative;opacity:.6;cursor:pointer;z-index:1}.mx_UploadBar_uploadBytes{float:right;margin-top:5px;margin-right:30px;color:#76CFA6}.mx_UserSettings{max-width:960px;width:100%;margin-left:auto;margin-right:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.mx_UserSettings .mx_RoomHeader{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:0;-ms-flex:0 0 70px;flex:0 0 70px}.mx_UserSettings_body{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;margin-top:-20px;overflow-y:auto}.mx_UserSettings h3{clear:both;margin-left:63px;text-transform:uppercase;color:#3d3b39;font-weight:600;font-size:13px;margin-top:26px;margin-bottom:10px}.mx_UserSettings_section h3{margin-left:0}.mx_UserSettings_spinner{display:inline-block;vertical-align:middle;margin-right:12px;width:32px;height:32px}.mx_UserSettings_button{display:inline;vertical-align:middle;border:0;border-radius:36px;font-weight:400;font-size:16px;color:#fff;background-color:#76CFA6;width:auto;margin:auto;padding:7px 1.5em;cursor:pointer}.mx_UserSettings_button.mx_UserSettings_buttonSmall{height:36px;padding:4px 7px;font-size:12px;margin-right:5px;line-height:12px}.mx_UserSettings_button.danger{background-color:#ff0064}.mx_UserSettings_section{margin-left:63px;margin-top:28px;margin-bottom:28px}.mx_UserSettings_cryptoSection ul{display:table}.mx_UserSettings_cryptoSection li{display:table-row}.mx_UserSettings_cryptoSection label,.mx_UserSettings_cryptoSection span{display:table-cell;padding-right:1em}.mx_UserSettings_passwordWarning{clear:both;color:#ff0064;margin-bottom:5px}.mx_UserSettings_importExportButtons{padding-top:10px;padding-left:40px}.mx_UserSettings_importExportButtons .mx_UserSettings_button{margin-right:1em}.mx_UserSettings_toggle input{width:16px;margin-right:8px;margin-bottom:8px}.mx_UserSettings_toggle label{padding-bottom:21px}.mx_UserSettings_accountTable .mx_UserSettings_notifTable{display:table}.mx_UserSettings_notifTable .mx_Spinner{position:absolute}.mx_BaseAvatar,.mx_Login_loader{position:relative}.mx_UserSettings_language,.mx_UserSettings_webRtcDevices_dropdown{width:200px}.mx_UserSettings_profileTable{display:table;float:left}.mx_UserSettings_profileTableRow{display:table-row}.mx_UserSettings_profileLabelCell{padding-bottom:21px;display:table-cell;font-weight:700;padding-right:24px}.mx_UserSettings_profileInputCell{display:table-cell;padding-bottom:21px;width:240px}.mx_UserSettings_profileInputCell .mx_EditableText,.mx_UserSettings_profileInputCell input{display:inline-block;border:0;border-bottom:1px solid rgba(151,151,151,.5);padding:0;width:240px;color:rgba(74,74,74,.9);font-family:'Open Sans',Helvetica,Arial,Sans-Serif;font-size:16px}.mx_UserSettings_threepidButton{display:table-cell;padding-left:.5em;position:relative;cursor:pointer}.mx_UserSettings_phoneSection{display:table}.mx_UserSettings_phoneCountry{width:70px;display:table-cell}input.mx_UserSettings_phoneNumberField{margin-left:3px;width:172px;border:1px solid transparent}.mx_UserSettings_avatarPicker,.mx_UserSettings_changePasswordButton,.mx_UserSettings_logout{margin-left:32px;margin-right:32px;float:right}.mx_UserSettings_avatarPicker{cursor:pointer}.mx_UserSettings_avatarPicker_img .mx_BaseAvatar_image{-o-object-fit:cover;object-fit:cover}.mx_UserSettings_avatarPicker_edit{text-align:center;margin-top:10px}.mx_UserSettings_avatarPicker_edit img{cursor:pointer}.mx_UserSettings_avatarPicker_edit>input{display:none}.mx_UserSettings_advanced_spoiler,.mx_UserSettings_link{cursor:pointer;color:#76CFA6;word-break:break-all}.mx_Login{width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:auto}.mx_Login h2{color:#454545;font-weight:300;margin-top:32px;margin-bottom:20px}.mx_Login_box{width:300px;min-height:450px;padding-top:50px;padding-bottom:50px;margin:auto}.mx_Login_logo{text-align:center;height:150px;margin-bottom:45px}.mx_Login_logo img{max-height:100%}.mx_Login_support{text-align:center;font-size:13px;margin-top:0;opacity:.7}.mx_Login_field{width:280px;border-radius:3px;border:1px solid #c7c7c7;font-weight:300;font-size:13px;padding:9px;margin-bottom:14px}.mx_Login_field_disabled{opacity:.3}.mx_Login_fieldLabel{margin-top:-10px;margin-left:8px;margin-bottom:14px;font-size:13px;opacity:.8}.mx_Login_submit{margin-top:35px;margin-bottom:24px;width:100%;border-radius:40px;height:40px;border:0;background-color:#76CFA6;font-size:15px;color:#fff}.mx_Login_create:link,.mx_Login_forgot:link,.mx_Login_links a:link{color:#454545}.mx_Login_submit:disabled{opacity:.3}.mx_Login_create,.mx_Login_forgot,.mx_Login_label,.mx_Login_links{font-size:13px;opacity:.8}.mx_Login_checkbox,.mx_Login_radio{margin-right:10px}.mx_Login_create{display:block;text-align:center;width:100%}.mx_Login_links{display:block;text-align:center;margin-top:15px;width:100%}.mx_Login_prompt{padding-top:15px;padding-bottom:15px;font-size:13px}.mx_Login_loader{display:inline;top:2px;left:8px}.mx_Login_loader .mx_Spinner{display:inline}.mx_Login_loader .mx_Spinner img{width:16px;height:16px}.mx_Login_field_prefix,.mx_Login_field_suffix{height:34px;padding:0 5px;background-color:#eee;text-align:center}.mx_Login_error{color:#ff0064;font-weight:700;text-align:center;margin-top:12px;margin-bottom:12px}.mx_Login_type_container{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:14px}.mx_Login_type_label{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;line-height:35px}.mx_Login_type_dropdown{display:inline-block;min-width:170px;-ms-flex-item-align:end;align-self:flex-end;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.mx_Login_field_group{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_Login_field_prefix{line-height:33px;border:1px solid #c7c7c7;border-right:0;border-radius:3px 0 0 3px}.mx_Login_field_suffix{line-height:33px;border:1px solid #c7c7c7;border-left:0;border-radius:0 3px 3px 0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.mx_Login_username{height:16px;-ms-flex-negative:1;flex-shrink:1;min-width:0;border-radius:3px}.mx_Login_phoneNumberField{height:16px}.mx_Login_field_has_prefix{border-top-left-radius:0;border-bottom-left-radius:0}.mx_Login_field_has_suffix{border-top-right-radius:0;border-bottom-right-radius:0}.mx_Login_phoneSection{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_Login_phoneCountry{margin-bottom:14px;width:150px;text-align:left;padding:0;background-color:#fff}.mx_Login_field_prefix .mx_Dropdown_input{border:0}.mx_Login_phoneCountry .mx_Dropdown_option{height:33px;line-height:33px}.mx_Login_phoneCountry .mx_Dropdown_option img{margin:3px;vertical-align:top}.mx_Login_language{margin-left:auto;margin-right:auto;min-width:60%}.mx_Login_language_div{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:12px;margin-bottom:12px}.mx_BaseAvatar_initial{position:absolute;left:0;color:#fff;text-align:center;speak:none;font-weight:400}.mx_BaseAvatar_image{border-radius:40px;vertical-align:top;background-color:#fff}.mx_BugReportDialog_input{width:100%;box-sizing:border-box}.mx_ChatCreateOrReuseDialog .mx_ChatCreateOrReuseDialog_tiles{margin-top:24px}.mx_ChatCreateOrReuseDialog .mx_Dialog_content{margin-bottom:24px;min-height:100px}.mx_ChatCreateOrReuseDialog .mx_RoomTile_badge{display:none}.mx_ChatCreateOrReuseDialog_profile{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_ChatCreateOrReuseDialog_profile_name{padding:14px}.mx_ChatInviteDialog_input,.mx_ChatInviteDialog_input:focus{height:26px;font-size:14px;font-family:'Open Sans',Arial,Helvetica,Sans-Serif;padding-left:12px;padding-right:12px;margin:0!important;border:0!important;outline:0!important;width:1000%;resize:none;overflow:hidden;vertical-align:middle;box-sizing:border-box;word-wrap:nowrap}.mx_ChatInviteDialog .mx_Dialog_content{min-height:50px}.mx_ChatInviteDialog_inputContainer{border-radius:3px;border:1px solid #f0f0f0;line-height:36px;max-height:150px;overflow-x:hidden;overflow-y:auto;padding:1px 4px}.mx_ChatInviteDialog_error{position:absolute;color:#ff0064;line-height:36px}.mx_ChatInviteDialog_cancel{position:absolute;right:11px;top:13px;cursor:pointer}.mx_ChatInviteDialog_cancel object{pointer-events:none}.mx_ConfirmUserActionDialog .mx_Dialog_content{min-height:48px;margin-bottom:24px}.mx_ConfirmUserActionDialog_avatar{float:left;margin-right:20px;margin-top:-2px}.mx_ConfirmUserActionDialog_name{font-size:18px}.mx_ConfirmUserActionDialog_userId{font-size:13px}.mx_ConfirmUserActionDialog_reasonField{font-family:'Open Sans',Arial,Helvetica,Sans-Serif;font-size:14px;color:#454545;background-color:#fff;border-radius:3px;border:1px solid #f0f0f0;line-height:36px;margin-bottom:24px;width:90%;padding:1px 16px}.mx_CreateGroupDialog_inputRow{margin-top:10px;margin-bottom:10px}.mx_CreateGroupDialog_label{text-align:left;padding-bottom:12px}.mx_CreateGroupDialog_input{font-size:15px;border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff}.mx_CreateRoomDialog_details_summary{outline:0}.mx_CreateRoomDialog_label{text-align:left;padding-bottom:12px}.mx_CreateRoomDialog_input{font-size:15px;border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff}.mx_EncryptedEventDialog .mx_MemberDeviceInfo{float:right;padding:0;margin-right:42px}.mx_EncryptedEventDialog .mx_MemberDeviceInfo_textButton,.mx_UnknownDeviceDialog .mx_MemberDeviceInfo_textButton{font-weight:600;font-family:'Open Sans',Arial,Helvetica,Sans-Serif;margin-left:0;margin-right:8px;background-color:#fff;cursor:pointer;outline:0}.mx_EncryptedEventDialog .mx_MemberDeviceInfo_textButton{height:36px;border-radius:40px;border:1px solid #76CFA6;font-size:14px;padding-left:1.5em;padding-right:1.5em;color:#76CFA6}.mx_QuestionDialog{padding-right:58px}.mx_SetMxIdDialog .mx_Dialog_title{padding-right:40px}.mx_SetMxIdDialog_input_group{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_SetMxIdDialog_input{border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff;font-size:15px;width:100%;max-width:280px}.mx_SetMxIdDialog_input.error,.mx_SetMxIdDialog_input.error:focus{border:1px solid #ff0064}.mx_SetMxIdDialog_input_group .mx_Spinner{height:37px;padding-left:10px;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.mx_SetMxIdDialog .success{color:#76CFA6}.mx_Dialog_unknownDevice .mx_Dialog{height:100%;padding-right:58px}.mx_UnknownDeviceDialog{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.mx_UnknownDeviceDialog .mx_Dialog_content{margin-bottom:24px}.mx_UnknownDeviceDialog .mx_MemberDeviceInfo{float:right;clear:both;padding:8px 0 0}.mx_UnknownDeviceDialog .mx_MemberDeviceInfo_textButton{height:24px;border-radius:40px;border:1px solid #76CFA6;font-size:13px;padding-left:.5em;padding-right:.5em;width:85px;color:#76CFA6}.mx_UnknownDeviceDialog .mx_UnknownDeviceDialog_deviceList li{height:40px;border-bottom:1px solid #e5e5e5}.mx_AccessibleButton:focus{outline:0;-webkit-filter:brightness(125%);filter:brightness(125%)}.mx_AccessibleButton{cursor:pointer}.mx_AddressSelector{position:absolute;width:485px;max-height:116px;overflow-y:auto;border-radius:3px;background-color:#fff;border:1px solid #76CFA6;cursor:pointer}.mx_AddressSelector.mx_AddressSelector_empty{display:none}.mx_AddressSelector_addressListElement .mx_AddressTile{background-color:#fff;border:1px solid #fff}.mx_AddressSelector_addressListElement.mx_AddressSelector_selected{background-color:#eaf5f0}.mx_AddressSelector_addressListElement.mx_AddressSelector_selected .mx_AddressTile{background-color:#eaf5f0;border:1px solid #eaf5f0}.mx_AddressTile{display:inline-block;border-radius:3px;background-color:rgba(74,73,74,.1);border:1px solid #f0f0f0;line-height:26px;color:#454545;font-size:14px;font-weight:400;margin-right:4px}.mx_AddressTile_email,.mx_AddressTile_unknownMx{font-weight:600}.mx_AddressTile.mx_AddressTile_error{background-color:rgba(255,0,100,.1);color:#ff0064;border-color:#ff0064}.mx_AddressTile_network{display:inline-block;position:relative;padding-left:2px;padding-right:4px;vertical-align:middle}.mx_AddressTile_avatar{display:inline-block;position:relative;padding-left:2px;padding-right:7px;vertical-align:middle}.mx_AddressTile_mx{display:inline-block;margin:0;border:0;padding:0}.mx_AddressTile_name{display:inline-block;padding-right:4px;font-weight:600;overflow:hidden;height:26px;vertical-align:middle}.mx_AddressTile_dismiss,.mx_AddressTile_email,.mx_AddressTile_id,.mx_AddressTile_unknown,.mx_AddressTile_unknownMx{display:inline-block;padding-right:11px}.mx_AddressTile_name.mx_AddressTile_justified{width:180px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.mx_AddressTile_id.mx_AddressTile_justified{width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.mx_AddressTile_unknownMxl.mx_AddressTile_justified{width:380px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.mx_AddressTile_email.mx_AddressTile_justified{width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.mx_AddressTile_unknown.mx_AddressTile_justified{width:380px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle}.mx_AddressTile_dismiss{padding-left:1px;cursor:pointer}.mx_DirectorySearchBox{position:relative;border-radius:3px;border:1px solid #c7c7c7}.mx_DirectorySearchBox_container{display:-webkit-box;display:-ms-flexbox;display:flex;padding-left:9px;padding-right:9px}.mx_DirectorySearchBox_input{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border:0;padding:0;font-weight:300;font-size:13px}input[type=text].mx_DirectorySearchBox_input:focus{border:0}.mx_DirectorySearchBox_joinButton{display:table-cell;padding:3px 10px;background-color:#eaf5f0;border-radius:3px;background-image:url(https://riot.im/app/img/icon-return.svg);background-position:8px 70%;background-repeat:no-repeat;text-indent:18px;font-weight:600;font-size:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.mx_DirectorySearchBox_clear_wrapper{display:table-cell}.mx_DirectorySearchBox_clear{display:inline-block;vertical-align:middle;background:url(https://riot.im/app/img/icon_context_delete.svg) 0 50% no-repeat;width:15px;height:15px;cursor:pointer}.mx_Dropdown{position:relative}.mx_Dropdown_disabled{opacity:.3}.mx_Dropdown_input{position:relative;border-radius:3px;border:1px solid #c7c7c7;font-weight:300;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mx_Dropdown_input:focus{border-color:#76CFA6}.mx_Dropdown_input.mx_AccessibleButton:focus{-webkit-filter:none;filter:none}.mx_Dropdown_arrow{border-color:#454545 transparent transparent;border-style:solid;border-width:5px 5px 0;display:block;height:0;position:absolute;right:10px;top:14px;width:0}.mx_Dropdown.left_aligned .mx_Dropdown_arrow{left:10px}.mx_Dropdown.left_aligned .mx_Dropdown_input>.mx_Dropdown_option{padding-left:25px}.mx_Dropdown_option{height:35px;line-height:35px;padding-left:8px;padding-right:8px}.mx_Dropdown_option div{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mx_Dropdown_option img{margin:5px;width:27px;vertical-align:middle}input.mx_Dropdown_option,input.mx_Dropdown_option:focus{border:0;padding-top:0;padding-bottom:0;width:60%}.mx_Dropdown_menu{position:absolute;left:-1px;right:-1px;top:100%;z-index:2;margin:0;padding:0;border-radius:3px;border:1px solid #76CFA6;background-color:#fff;max-height:200px;overflow-y:auto;font-weight:700}.mx_Dropdown_menu .mx_Dropdown_option_highlight{background-color:#ddd}.mx_Dropdown_searchPrompt{font-weight:400;margin-left:5px;margin-bottom:5px}.mx_EditableItemList{margin-top:12px;margin-bottom:0}.mx_EditableItem{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:56px}.mx_EditableItem .mx_EditableItem_editable{border:0;border-bottom:1px solid #c7c7c7;padding:0;min-width:240px;max-width:400px;margin-bottom:16px}.mx_EditableItem .mx_EditableItem_editable:focus{border-bottom:1px solid #76CFA6;outline:0;box-shadow:none}.mx_EditableItem .mx_EditableItem_editablePlaceholder{color:#a2a2a2}.mx_EditableItem .mx_EditableItem_addButton,.mx_EditableItem .mx_EditableItem_removeButton{padding-left:.5em;position:relative;cursor:pointer;visibility:hidden}.mx_EditableItem:hover .mx_EditableItem_addButton,.mx_EditableItem:hover .mx_EditableItem_removeButton{visibility:visible}.mx_EditableItemList_label{margin-bottom:8px}.mx_MemberEventListSummary{position:relative}.mx_TextualEvent.mx_MemberEventListSummary_summary{font-size:14px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.mx_MatrixChat_useCompactLayout .mx_MemberEventListSummary,.mx_MatrixChat_useCompactLayout .mx_TextualEvent.mx_MemberEventListSummary_summary{font-size:13px}.mx_MemberEventListSummary_avatars{display:inline-block;margin-right:8px;padding-top:8px;line-height:12px}.mx_MemberEventListSummary_avatars .mx_BaseAvatar{margin-right:-4px;cursor:pointer}.mx_MemberEventListSummary_toggle{color:#76CFA6;cursor:pointer;float:right;margin-right:10px;margin-top:8px}.mx_MemberEventListSummary_line{border-bottom:1px solid #e5e5e5;margin-left:63px;line-height:30px}.mx_MatrixChat_useCompactLayout .mx_MemberEventListSummary .mx_EventTile_line{line-height:20px}.mx_MatrixChat_useCompactLayout .mx_MemberEventListSummary_line{line-height:22px}.mx_MatrixChat_useCompactLayout .mx_MemberEventListSummary_toggle{margin-top:3px}.mx_ProgressBar{height:5px;border:1px solid #000}.mx_ProgressBar_fill{height:100%;background-color:#000}.mx_RoomPill,.mx_UserPill{border-radius:16px;display:inline-block;height:20px;line-height:20px;padding-left:5px}.mx_EventTile_body .mx_RoomPill,.mx_EventTile_body .mx_UserPill{cursor:pointer}.mx_EventTile_content .markdown-body a.mx_UserPill,.mx_UserPill{color:#454545;background-color:rgba(0,0,0,.1);padding-right:5px}.mx_EventTile_highlight .mx_EventTile_content .markdown-body a.mx_UserPill_me{color:#fff;background-color:#ff0064;padding-right:5px}.mx_EventTile_content .markdown-body a.mx_RoomPill,.mx_RoomPill{color:#fff;background-color:#aaa;padding-right:5px}.mx_RoomPill .mx_BaseAvatar,.mx_UserPill .mx_BaseAvatar{position:relative;left:-3px;top:2px}.mx_Markdown_BOLD{font-weight:700}.mx_Markdown_ITALIC{font-style:italic}.mx_Markdown_CODE{padding:.2em 0;margin:0;font-size:85%;background-color:rgba(0,0,0,.04);border-radius:3px}.mx_Markdown_HR{display:block;background:#e9e9e9}.mx_Markdown_STRIKETHROUGH{text-decoration:line-through}.mx_RoleButton{margin-left:4px;margin-right:4px;cursor:pointer;display:inline-block}.mx_RoleButton_tooltip{display:inline-block;position:relative;top:-25px;left:6px}.mx_GroupInviteTile{position:relative;cursor:pointer;font-size:13px;display:block;height:34px}.mx_GroupInviteTile_nameContainer{display:inline-block;width:180px;height:24px}.mx_GroupInviteTile_avatarContainer{display:inline-block;width:24px;height:24px;vertical-align:middle;padding:5px 6px 5px 16px}.mx_GroupInviteTile_name{display:inline-block;position:relative;width:165px;vertical-align:middle;color:rgba(69,69,69,.8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:2px 6px 3px}.mx_MEmoteBody,.mx_MNoticeBody,.mx_MTextBody,.mx_UnknownBody,.mx_ViewSource pre{white-space:pre-wrap}.mx_GroupInviteTile_badge{display:inline-block;min-width:15px;height:15px;position:absolute;right:8px;top:9px;border-radius:8px;color:#fff;background-color:#774f7e;font-weight:600;font-size:10px;text-align:center;padding-top:1px;padding-left:4px;padding-right:4px}.mx_GroupRoomTile{position:relative;color:#454545;cursor:pointer}.mx_GroupRoomTile_delete{opacity:.4;position:absolute;top:6px;right:10px;cursor:pointer;display:none}.mx_GroupRoomTile:hover>.mx_GroupRoomTile_delete{display:initial}.mx_InteractiveAuthEntryComponents_msisdnWrapper{text-align:center}.mx_InteractiveAuthEntryComponents_msisdnEntry{font-size:200%;font-weight:700;border:1px solid #c7c7c7;border-radius:3px;width:6em}.mx_InteractiveAuthEntryComponents_msisdnEntry:focus{border:1px solid #76CFA6}.mx_InteractiveAuthEntryComponents_msisdnSubmit{margin-top:4px;margin-bottom:5px}.mx_InteractiveAuthEntryComponents_msisdnSubmit:disabled{background-color:#747474;cursor:default}.mx_ServerConfig{margin-top:7px}.mx_ServerConfig .mx_Login_field{margin-top:4px;margin-bottom:5px}.mx_ServerConfig_help:link{opacity:.8;font-size:13px;font-weight:300;color:#454545}.mx_ServerConfig_selector{text-align:center;width:302px}.mx_MEmoteBody_sender{cursor:pointer}.mx_MImageBody{display:block;margin-right:34px}.mx_MImageBody_thumbnail{max-width:100%}.mx_AddWidget_button_full_width,.mx_AppTile{max-width:960px}.mx_MImageBody_download{color:#76CFA6}.mx_MImageBody_download a{color:#76CFA6;text-decoration:none}.mx_MImageBody_download object{margin-left:-16px;padding-right:4px;margin-top:-4px;vertical-align:middle}.mx_MImageBody_download iframe{margin:0;padding:0;border:none;width:100%;height:1.5em}.mx_MNoticeBody{opacity:.6}.mx_MTextBody pre{overflow-y:auto;max-height:30vh}.mx_RoomAvatarEvent,.mx_TextualEvent{opacity:.5;overflow-y:hidden}.mx_RoomAvatarEvent_avatar{display:inline;position:relative;top:5px}.mx_AppsDrawer{margin-bottom:3px}.mx_AppsContainer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mx_AddWidget_button{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;cursor:pointer;padding:0;margin:5px auto;color:#76CFA6;font-size:12px}.mx_SetAppURLDialog_input{border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#e5e5e5;background-color:#fff;font-size:15px}.mx_AppTile{width:50%;margin:0 5px 2px 0;border:1px solid #e5e5e5;border-radius:2px}.mx_AppTileFullWidth{max-width:960px;width:100%;margin:0;padding:0;border:1px solid #e5e5e5;border-radius:2px}.mx_AppTileMenuBar{margin:0;padding:2px 10px;font-size:10px}.mx_AppTileMenuBarWidgets{float:right}.mx_AppTileMenuBarWidget{cursor:pointer;width:10px;height:10px;padding:1px;transition-duration:.5s;border:1px solid transparent}.mx_AppTileBody,.mx_AppTileBody iframe{width:100%;height:350px;overflow:hidden}.mx_AppTileMenuBarWidgetDelete{-webkit-filter:none;filter:none}.mx_AppTileMenuBarWidget:hover{border:1px solid #e5e5e5;border-radius:2px}.mx_AppTileBody iframe{border:none;padding:0;margin:0;display:block}.mx_AppTileMenuBarWidgetPadding{margin-right:5px}.mx_AppIconTile{background-color:#454545;border:1px solid transparent;width:200px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);transition:.3s;border-radius:3px;margin:5px;display:inline-block}.mx_AppIconTile.mx_AppIconTile_active{color:#76CFA6;border-color:#76CFA6}.mx_AppIconTile:hover{border:1px solid #76CFA6;box-shadow:0 0 10px 5px rgba(200,200,200,.5)}.mx_AppIconTile_content{padding:2px 16px;height:60px;overflow:hidden}.mx_AppIconTile_content h4{margin-top:5px;margin-bottom:2px}.mx_AppIconTile_content p{margin-top:0;margin-bottom:5px;font-size:smaller}.mx_AppIconTile_image{padding:10px;max-width:100px;max-height:100px;width:auto;height:auto}.mx_AppIconTile_imageContainer{text-align:center;width:100%;background-color:#fff;border-radius:3px 3px 0 0;height:155px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}form.mx_Custom_Widget_Form div{margin-top:10px;margin-bottom:10px}.mx_AppPermissionWarning{text-align:center;padding:30px 0;background-color:#fff}.mx_AppPermissionWarningImage{margin:10px 0}.mx_AppPermissionWarningImage img{width:100px}.mx_AppPermissionWarningText{max-width:400px;margin:10px auto;color:#454545}.mx_Autocomplete_Completion_block *,.mx_Autocomplete_Completion_pill>*{margin:0 3px}.mx_AppPermissionWarningTextLabel{font-weight:700;display:block}.mx_AppPermissionWarningTextURL{color:#76CFA6}.mx_AppPermissionButton{padding:5px;border-radius:5px;color:#ff0064;background-color:#fff}.mx_AppPermissionButton:hover{background-color:#454545;cursor:pointer}.mx_AppLoading{min-height:305px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-weight:700}.mx_Autocomplete_Completion_block,.mx_Autocomplete_Completion_pill{display:-webkit-box;display:-ms-flexbox;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer}.mx_Autocomplete{position:absolute;bottom:0;z-index:1000;width:100%;border:1px solid #e5e5e5;background:#fff;border-bottom:none;border-radius:4px 4px 0 0;max-height:50vh;overflow:auto}.mx_Autocomplete_ProviderSection{border-bottom:1px solid #e5e5e5}.mx_Autocomplete_Completion_block{height:34px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#454545}.mx_Autocomplete_Completion_pill{border-radius:17px;height:34px;padding:0 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#454545}.mx_Autocomplete_Completion_container_truncate .mx_Autocomplete_Completion_description,.mx_Autocomplete_Completion_container_truncate .mx_Autocomplete_Completion_subtitle,.mx_Autocomplete_Completion_container_truncate .mx_Autocomplete_Completion_title{max-width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mx_Autocomplete_Completion_container_pill{margin:12px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-flow:wrap;flex-flow:wrap}.mx_Autocomplete_Completion.selected{background:#f6f6f6;outline:0}.mx_Autocomplete_provider_name{margin:12px;color:#454545;font-weight:400;opacity:.4}.mx_Autocomplete_Completion_subtitle{font-style:italic;-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_Autocomplete_Completion_description{color:gray}.mx_EntityTile{display:table-row;position:relative;color:#454545;cursor:pointer}.mx_EntityTile_invite{display:table-cell;vertical-align:middle;margin-left:10px;width:26px}.mx_EntityTile_avatar,.mx_GroupRoomTile_avatar{display:table-cell;vertical-align:middle;width:36px;height:36px;position:relative;padding:4px 12px 4px 3px}.mx_EntityTile_power{position:absolute;width:16px;height:17px;top:0;right:6px}.mx_EntityTile_name,.mx_GroupRoomTile_name{display:table-cell;vertical-align:middle;overflow:hidden;font-size:14px;text-overflow:ellipsis}.mx_EntityTile_details{display:table-cell;padding-right:14px;vertical-align:middle}.mx_EntityTile_name_hover{font-size:13px;overflow:hidden;text-overflow:ellipsis}.mx_EntityTile_chevron{margin-top:8px;margin-right:-4px;margin-left:6px;float:right}.mx_EntityTile_ellipsis .mx_EntityTile_name,.mx_EntityTile_invitePlaceholder .mx_EntityTile_name{font-style:italic;color:#454545}.mx_EntityTile_offline_beenactive .mx_EntityTile_avatar,.mx_EntityTile_offline_beenactive .mx_EntityTile_name,.mx_EntityTile_offline_beenactive .mx_EntityTile_name_hover,.mx_EntityTile_unavailable .mx_EntityTile_avatar,.mx_EntityTile_unavailable .mx_EntityTile_name,.mx_EntityTile_unavailable .mx_EntityTile_name_hover{opacity:.66}.mx_EntityTile_offline_neveractive .mx_EntityTile_avatar,.mx_EntityTile_offline_neveractive .mx_EntityTile_name,.mx_EntityTile_offline_neveractive .mx_EntityTile_name_hover,.mx_EntityTile_unknown .mx_EntityTile_avatar,.mx_EntityTile_unknown .mx_EntityTile_name,.mx_EntityTile_unknown .mx_EntityTile_name_hover{opacity:.25}.mx_EventTile{max-width:100%;clear:both;padding-top:18px;font-size:14px;position:relative}.mx_EventTile.mx_EventTile_info{padding-top:0}.mx_EventTile_avatar{position:absolute;top:14px;left:8px;cursor:pointer;z-index:2}.mx_EventTile.mx_EventTile_info .mx_EventTile_avatar{top:8px;left:65px}.mx_EventTile_continuation{padding-top:0!important}.mx_EventTile .mx_SenderProfile{color:#454545;font-size:14px;display:block;overflow-y:hidden;cursor:pointer;padding-left:65px;padding-bottom:0;padding-top:0;margin:0;line-height:22px}.mx_EventTile .mx_SenderProfile .mx_SenderProfile_aux,.mx_EventTile .mx_SenderProfile .mx_SenderProfile_name{opacity:.5}.mx_EventTile .mx_SenderProfile .mx_Flair{opacity:.7;margin-left:5px}.mx_EventTile .mx_SenderProfile .mx_Flair img{vertical-align:-3px;margin-right:2px}.mx_EventTile .mx_MessageTimestamp{display:block;visibility:hidden;white-space:nowrap;color:#acacac;font-size:10px;left:0;width:46px;text-align:center;position:absolute}.mx_EventTile_line{position:relative;padding-left:65px;padding-top:4px;padding-bottom:2px;border-radius:4px;min-height:24px;line-height:22px}.mx_EventTile_info .mx_EventTile_line{padding-left:83px}.mx_EventTile_bigEmoji.mx_EventTile_bigEmoji{font-size:48px!important;line-height:48px!important}.mx_EventTile_selected .mx_EventTile_line{border-left:#76CFA6 5px solid;padding-left:60px;background-color:#f7f7f7}.mx_EventTile.menu .mx_EventTile_line,.mx_EventTile:hover .mx_EventTile_line{background-color:#f7f7f7}.mx_EventTile_searchHighlight,.mx_EventTile_searchHighlight a{background-color:#76CFA6;color:#fff}.mx_EventTile_searchHighlight{border-radius:5px;padding-left:2px;padding-right:2px;cursor:pointer}.mx_EventTile_encrypting{color:#abddbc!important}.mx_EventTile_sending{color:#ddd}.mx_EventTile_sending .mx_RoomPill,.mx_EventTile_sending .mx_UserPill,.mx_EventTile_sending .mx_emojione{opacity:.5}.mx_EventTile_notSent{color:#f44}.mx_EventTile_redacted .mx_EventTile_line .mx_UnknownBody{display:block;width:100%;height:36px;background-image:url(https://riot.im/app/img/redacted.jpg);background-repeat:no-repeat;background-size:contain}.mx_EventTile.mx_EventTile_redacted .mx_EventTile_line{background-color:initial!important}.mx_EventTile_highlight,.mx_EventTile_highlight .markdown-body{color:#ff0064}.mx_EventTile_contextual{opacity:.4}.mx_EventTile_msgOption{float:right;text-align:right;z-index:1;position:relative;width:90px;height:1px;margin-right:10px}.mx_EventTile.menu .mx_MessageTimestamp,.mx_EventTile:hover .mx_MessageTimestamp,.mx_EventTile_last .mx_MessageTimestamp,.mx_MessagePanel_alwaysShowTimestamps .mx_MessageTimestamp{visibility:visible}.mx_EventTile_selected .mx_MessageTimestamp{left:3px;width:auto}.mx_EventTile_editButton{position:absolute;display:inline-block;visibility:hidden;cursor:pointer;top:6px;right:6px;width:19px;height:19px;background-image:url(https://riot.im/app/img/icon_context_message.svg)}.mx_EventTile.menu .mx_EventTile_editButton,.mx_EventTile.menu .mx_MessageTimestamp,.mx_EventTile:hover .mx_EventTile_editButton{visibility:visible}.mx_EventTile_readAvatars{position:relative;display:inline-block;width:14px;height:14px;top:29px}.mx_EventTile_continuation .mx_EventTile_readAvatars,.mx_EventTile_emote .mx_EventTile_readAvatars,.mx_EventTile_info .mx_EventTile_readAvatars{top:7px}.mx_EventTile_readAvatars .mx_BaseAvatar{position:absolute;display:inline-block}.mx_EventTile_readAvatarRemainder{color:#acacac;font-size:11px;position:absolute}.mx_EventTile_content{display:block;overflow-y:hidden;overflow-x:hidden;}.mx_EventTile_body{overflow-y:hidden}.mx_EventTile_e2eIcon{display:block;position:absolute;top:9px;left:46px;z-index:2;cursor:pointer}.mx_EventTile_12hr .mx_EventTile_e2eIcon{padding-left:5px}.mx_EventTile:hover.mx_EventTile_unverified .mx_EventTile_line,.mx_EventTile:hover.mx_EventTile_verified .mx_EventTile_line{padding-left:60px}.mx_EventTile:hover.mx_EventTile_unverified.mx_EventTile_info .mx_EventTile_line,.mx_EventTile:hover.mx_EventTile_verified.mx_EventTile_info .mx_EventTile_line,.mx_EventTile_selected.mx_EventTile_info .mx_EventTile_line{padding-left:78px}.mx_EventTile:hover.mx_EventTile_verified .mx_EventTile_line{border-left:#76cfa5 5px solid}.mx_EventTile:hover.mx_EventTile_unverified .mx_EventTile_line{border-left:#e8bf37 5px solid}.mx_EventTile:hover.mx_EventTile_unverified .mx_MessageTimestamp,.mx_EventTile:hover.mx_EventTile_verified .mx_MessageTimestamp{left:3px;width:auto}.mx_EventTile:hover.mx_EventTile_unverified .mx_EventTile_e2eIcon,.mx_EventTile:hover.mx_EventTile_verified .mx_EventTile_e2eIcon{display:block;left:41px}.mx_EventTile_content .markdown-body{font-family:inherit!important;white-space:normal!important;line-height:inherit!important;color:inherit;font-size:14px}.mx_EventTile_content .markdown-body pre{overflow-x:overlay;overflow-y:visible}.mx_EventTile_content .markdown-body code{background-color:#f8f8f8;color:#333}.mx_EventTile_copyButton{position:absolute;display:inline-block;visibility:hidden;cursor:pointer;top:6px;right:6px;width:19px;height:19px;background-image:url(https://riot.im/app/img/icon_copy_message.svg)}.mx_EventTile_body pre{position:relative;border:1px solid transparent}.mx_EventTile:hover .mx_EventTile_body pre{border:1px solid #e5e5e5}.mx_EventTile_body pre:hover .mx_EventTile_copyButton{visibility:visible}.mx_EventTile_content .markdown-body h1,.mx_EventTile_content .markdown-body h2,.mx_EventTile_content .markdown-body h3,.mx_EventTile_content .markdown-body h4,.mx_EventTile_content .markdown-body h5,.mx_EventTile_content .markdown-body h6{font-family:inherit!important;color:inherit}.mx_GroupMemberList_query,.mx_GroupRoomList_query,.mx_MemberList_query,.mx_MessageComposer_input textarea,.mx_SearchableEntityList_query{font-family:'Open Sans',Arial,Helvetica,Sans-Serif}.mx_EventTile_content .markdown-body h1,.mx_EventTile_content .markdown-body h2{font-size:1.5em}.mx_EventTile_content .markdown-body a{color:#76CFA6}.mx_EventTile_content .markdown-body .hljs{display:inline!important}.mx_MatrixChat_useCompactLayout .mx_EventTile{padding-top:4px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_info{padding-top:0;font-size:13px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_info .mx_EventTile_line{line-height:20px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_info .mx_EventTile_avatar{top:4px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote .mx_EventTile_avatar,.mx_MatrixChat_useCompactLayout .mx_EventTile_avatar{top:2px}.mx_MatrixChat_useCompactLayout .mx_EventTile .mx_SenderProfile{font-size:13px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote{padding-top:8px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote .mx_EventTile_line{padding-top:0;padding-bottom:1px}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote.mx_EventTile_continuation{padding-top:0}.mx_MatrixChat_useCompactLayout .mx_EventTile.mx_EventTile_emote.mx_EventTile_continuation .mx_EventTile_line,.mx_MatrixChat_useCompactLayout .mx_EventTile_line{padding-top:0;padding-bottom:0}.mx_MatrixChat_useCompactLayout .mx_EventTile_e2eIcon{top:7px}.mx_MatrixChat_useCompactLayout .mx_EventTile_editButton{top:3px}.mx_MatrixChat_useCompactLayout .mx_EventTile_readAvatars{top:27px}.mx_MatrixChat_useCompactLayout .mx_EventTile_continuation .mx_EventTile_readAvatars,.mx_MatrixChat_useCompactLayout .mx_EventTile_emote .mx_EventTile_readAvatars{top:5px}.mx_MatrixChat_useCompactLayout .mx_EventTile_info .mx_EventTile_readAvatars{top:4px}.mx_MatrixChat_useCompactLayout .mx_RoomView_MessageList h2{margin-top:6px}.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body blockquote,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body dl,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body ol,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body p,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body pre,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body table,.mx_MatrixChat_useCompactLayout .mx_EventTile_content .markdown-body ul{margin-bottom:4px}.mx_LinkPreviewWidget{margin-top:15px;margin-right:15px;margin-bottom:15px;display:-webkit-box;display:-ms-flexbox;display:flex;border-left:4px solid #ddd;color:#888}.mx_LinkPreviewWidget_image{-webkit-box-flex:0;-ms-flex:0 0 100px;flex:0 0 100px;margin-left:15px;text-align:center;cursor:pointer}.mx_LinkPreviewWidget_caption{margin-left:15px;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.mx_LinkPreviewWidget_title{display:inline;font-weight:700;white-space:normal}.mx_MemberInfo h3,.mx_MemberList_invited h2,.mx_RoomSettings h3{font-weight:600;text-transform:uppercase}.mx_LinkPreviewWidget_siteName{display:inline}.mx_LinkPreviewWidget_description{margin-top:8px;white-space:normal;word-wrap:break-word}.mx_LinkPreviewWidget_cancel{visibility:hidden;cursor:pointer;-webkit-box-flex:0;-ms-flex:0 0 40px;flex:0 0 40px}.mx_LinkPreviewWidget:hover .mx_LinkPreviewWidget_cancel{visibility:visible}.mx_MatrixChat_useCompactLayout .mx_LinkPreviewWidget{margin-top:6px;margin-bottom:6px}.mx_MemberDeviceInfo{padding:10px 0}.mx_MemberDeviceInfo.mx_DeviceVerifyButtons{padding:6px 0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.mx_MemberDeviceInfo_textButton{color:#fff;background-color:#76CFA6;border-radius:17px;text-align:center;padding-left:1em;padding-right:1em;border:0;font-size:14px;cursor:pointer;margin:2px;-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_MemberDeviceInfo_deviceId{font-size:13px}.mx_MemberDeviceInfo_deviceInfo{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.1)}.mx_EncryptedEventDialog .mx_MemberDeviceInfo_blacklist,.mx_EncryptedEventDialog .mx_MemberDeviceInfo_unblacklist{width:8em;padding-left:1em;padding-right:1em}.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_blacklisted,.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_unverified,.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_verified{float:right;padding-left:1em}.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_verified{color:#76cfa5}.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_unverified{color:#e8bf37}.mx_MemberDeviceInfo div.mx_MemberDeviceInfo_blacklisted{color:#ba6363}.mx_MemberInfo{margin-top:20px;padding-right:20px;height:100%;overflow-y:auto}.mx_MemberInfo h2{margin-top:6px}.mx_MemberInfo .mx_RoomTile_nameContainer{width:154px}.mx_MemberInfo .mx_RoomTile_badge{display:none}.mx_MemberInfo .mx_RoomTile_name{width:160px}.mx_MemberInfo_cancel{float:right;margin-right:10px;cursor:pointer}.mx_MemberInfo_avatar{clear:both}.mx_MemberInfo_avatar .mx_BaseAvatar.mx_BaseAvatar_image{cursor:zoom-in}.mx_MemberInfo_profile{margin-bottom:16px}.mx_MemberInfo h3{color:#3d3b39;font-size:13px;margin-top:16px;margin-bottom:14px}.mx_MemberInfo_profileField{font-size:13px;position:relative;background-color:#fff}.mx_MemberInfo_buttons{margin-bottom:16px}.mx_MemberInfo_field{cursor:pointer;font-size:13px;color:#76CFA6;margin-left:8px;line-height:23px}.mx_MemberInfo_createRoom{cursor:pointer}.mx_MemberInfo_createRoom_label{width:initial!important;cursor:pointer}.mx_GroupMemberList,.mx_GroupRoomList,.mx_MemberList{height:100%;margin-top:12px;margin-right:20px;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mx_MemberList .mx_Spinner{-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.mx_MemberList_chevron{position:absolute;right:35px;margin-top:-15px}.mx_MemberList_border{overflow-y:auto;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px}.mx_GroupMemberList_query,.mx_GroupRoomList_query,.mx_MemberList_query{border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff;margin-left:3px;font-size:14px;margin-bottom:8px;width:189px}.mx_GroupMemberList_query::-moz-placeholder,.mx_GroupRoomList_query::-moz-placeholder,.mx_MemberList_query::-moz-placeholder{color:#454545;opacity:.5;font-size:14px}.mx_GroupMemberList_query::-webkit-input-placeholder,.mx_GroupRoomList_query::-webkit-input-placeholder,.mx_MemberList_query::-webkit-input-placeholder{color:#454545;opacity:.5;font-size:14px}.mx_MemberList_joined{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0;overflow-y:auto}.mx_MemberList_invited h2{color:#3d3b39;font-size:13px;padding-left:3px;padding-right:12px;margin-top:8px;margin-bottom:4px}.mx_MemberList_wrapper{display:table;table-layout:fixed;width:100%}.mx_MemberList_outerWrapper{height:0}.mx_MessageComposer_wrapper{max-width:960px;vertical-align:middle;margin:auto;border-top:1px solid #e5e5e5;position:relative}.mx_MessageComposer_autocomplete_wrapper{position:relative;height:0}.mx_MessageComposer_row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.mx_MessageComposer_input,.mx_MessageComposer_input_wrapper{-webkit-box-flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal}.mx_MessageComposer .mx_MessageComposer_avatar{padding-left:10px;padding-right:28px}.mx_MessageComposer .mx_MessageComposer_avatar .mx_BaseAvatar{display:block}.mx_MessageComposer_composecontrols{width:100%}.mx_MessageComposer_e2eIcon{position:absolute;left:44px}.mx_MessageComposer_noperm_error{width:100%;height:60px;text-align:center;font-style:italic;color:#888}.mx_MessageComposer_input_wrapper{-ms-flex:1;-webkit-box-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.mx_MessageComposer_input{-ms-flex:1;-webkit-box-flex:1;flex:1;vertical-align:middle;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-height:60px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;font-size:14px;margin-right:6px}@-webkit-keyframes visualbell{from{background-color:#faa}to{background-color:#fff}}@keyframes visualbell{from{background-color:#faa}to{background-color:#fff}}.mx_MessageComposer_input_error{-webkit-animation:.2s visualbell;animation:.2s visualbell}.mx_MessageComposer_input_empty .public-DraftEditorPlaceholder-root{display:none}.mx_MessageComposer_input .DraftEditor-root{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;word-break:break-word}.mx_MessageComposer_input .DraftEditor-root .DraftEditor-editorContainer{padding-top:2px}.mx_MessageComposer_input .public-DraftEditor-content{max-height:120px;min-height:21px;overflow:auto}.mx_MessageComposer_input blockquote{color:#777;margin:0 0 16px;padding:0 15px;border-left:4px solid #ddd}.mx_MessageComposer_input pre.public-DraftStyleDefault-pre pre{background-color:rgba(0,0,0,.04);border-radius:3px;padding:10px}.mx_MessageComposer_input textarea{display:block;width:100%;padding:0;margin-top:6px;margin-bottom:6px;border:0;resize:none;outline:0;box-shadow:none;color:#454545;background-color:#fff;font-size:14px;max-height:120px;overflow:auto}.mx_MessageComposer_input textarea::-moz-placeholder{line-height:100%;color:#76CFA6;opacity:1}.mx_MessageComposer_input textarea::-webkit-input-placeholder{color:#76CFA6}.mx_MessageComposer_apps,.mx_MessageComposer_hangup,.mx_MessageComposer_upload,.mx_MessageComposer_videocall,.mx_MessageComposer_voicecall{padding-right:5px;cursor:pointer;padding-top:4px}.mx_MessageComposer_formatting{cursor:pointer;margin:0 11px}.mx_MessageComposer_formatbar_wrapper{width:100%;background-color:#f6f6f6;box-shadow:inset 0 1px 0 0 rgba(0,0,0,.08)}.mx_MessageComposer_formatbar{margin:auto;max-width:960px;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;box-sizing:border-box;padding-left:62px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:10px;color:#888}.mx_RoomPreviewBar,.mx_SearchableEntityList{-webkit-box-orient:vertical;-webkit-box-direction:normal}.mx_MessageComposer_formatbar *{margin-right:4px}.mx_MessageComposer_format_button,.mx_MessageComposer_formatbar_cancel,.mx_MessageComposer_formatbar_markdown{cursor:pointer}.mx_MessageComposer_formatbar_cancel{margin-right:22px}.mx_MessageComposer_formatbar_markdown{margin-right:64px}.mx_MessageComposer_input_markdownIndicator{cursor:pointer;height:10px;padding:4px 4px 4px 0;opacity:.8}.mx_MatrixChat_useCompactLayout .mx_MessageComposer_input{min-height:50px}.mx_MatrixChat_useCompactLayout .mx_MessageComposer_noperm_error{height:50px}.mx_PresenceLabel{font-size:11px;opacity:.5}.mx_RoomHeader_editing{-webkit-box-flex:0!important;-ms-flex:0 0 93px!important;flex:0 0 93px!important}.mx_RoomHeader_wrapper{max-width:960px;margin:auto;height:70px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.mx_RoomHeader_leftRow{margin-left:-2px;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}.mx_RoomHeader_spinner,.mx_RoomHeader_textButton{height:36px;-ms-flex-order:2;-webkit-box-ordinal-group:3;order:2;padding-left:12px;padding-right:12px}.mx_RoomHeader_textButton{background-color:#76CFA6;border-radius:36px;margin-right:8px;color:#fff;line-height:34px;margin-top:-2px;text-align:center;cursor:pointer}.mx_RoomHeader_name,.mx_RoomHeader_simpleHeader{width:100%;color:#454545;font-weight:700;font-size:22px;overflow:hidden;text-overflow:ellipsis}.mx_RoomHeader_cancelButton{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;cursor:pointer;padding-left:12px;padding-right:12px}.mx_RoomHeader_rightRow,.mx_RoomPreviewBar{-webkit-box-align:center;display:-webkit-box;display:-ms-flexbox}.mx_RoomHeader_rightRow{margin-top:4px;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.mx_RoomHeader_info{display:table-cell;width:100%;vertical-align:middle}.mx_RoomHeader_simpleHeader{line-height:70px;margin-left:63px}.mx_RoomHeader_simpleHeader .mx_RoomHeader_cancelButton{float:right}.mx_RoomHeader_simpleHeader .mx_RoomHeader_icon{margin-left:14px;margin-right:24px;vertical-align:-4px}.mx_RoomHeader_name{vertical-align:middle;height:31px;padding-left:19px;padding-right:16px;border-bottom:1px solid transparent}.mx_RoomHeader_nametext{display:inline-block}.mx_RoomHeader_settingsHint{color:#a2a2a2!important}.mx_RoomHeader_searchStatus{display:inline-block;font-weight:400;opacity:.6}.mx_RoomHeader_avatar,.mx_RoomHeader_avatarPicker,.mx_RoomHeader_avatarPicker_edit,.mx_RoomHeader_name{cursor:pointer}.mx_RoomHeader_name:hover div:not(.mx_RoomHeader_editable){color:#76CFA6}.mx_RoomHeader_placeholder{color:#a2a2a2!important}.mx_RoomHeader_editable{border-bottom:1px solid #c7c7c7!important;min-width:150px;cursor:text}.mx_RoomHeader_editable:focus{border-bottom:1px solid #76CFA6!important;outline:0;box-shadow:none}.mx_RoomHeader_topic{vertical-align:bottom;float:left;max-height:42px;color:#a2a2a2;font-weight:300;font-size:13px;margin-left:19px;margin-right:16px;overflow:hidden;text-overflow:ellipsis;border-bottom:1px solid transparent}.mx_RoomHeader_avatar{display:table-cell;width:48px;height:50px;vertical-align:middle}.mx_RoomHeader_avatar .mx_BaseAvatar_image{-o-object-fit:cover;object-fit:cover}.mx_RoomHeader_avatarPicker_edit{position:absolute;margin-left:16px;margin-top:4px}.mx_RoomHeader_avatarPicker_edit>label{cursor:pointer}.mx_RoomHeader_avatarPicker_edit>input{display:none}.mx_RoomHeader_button{margin-left:12px;cursor:pointer}.mx_RoomHeader_voipButton{display:table-cell}.mx_RoomHeader_voipButtons{margin-top:18px}.mx_RoomList{padding-bottom:12px;min-height:400px}.mx_RoomList_expandButton{margin-left:8px;cursor:pointer;padding-left:12px;padding-right:12px}.mx_RoomList_scrollbar .gm-scroll-view{overflow-x:hidden!important;overflow-y:scroll!important}.mx_RoomList_scrollbar .gm-scrollbar.-vertical{z-index:6}.mx_RoomList_emptySubListTip{font-size:13px;padding:5px;border:1px dashed #76CFA6;color:#454545;background-color:rgba(255,255,255,.5);border-radius:4px;margin:8px 18px 7px}.mx_RoomList_emptySubListTip .mx_RoleButton{vertical-align:-3px}.mx_RoomList_headerButtons{position:absolute;right:60px}.mx_RoomPreviewBar{text-align:center;height:176px;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#f7f7f7;-webkit-align-items:center}.mx_RoomPreviewBar_invite_text{color:#454545}.mx_RoomPreviewBar_join_text{color:#ff0064}.mx_RoomPreviewBar_preview_text{margin-top:25px;color:#a2a2a2}.mx_RoomPreviewBar_join_text a{text-decoration:underline;cursor:pointer}.mx_RoomPreviewBar_warning{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px}.mx_RoomPreviewBar_warningIcon{padding:12px}.mx_RoomSettings{margin-left:65px;margin-bottom:20px}.mx_RoomSettings_leaveButton,.mx_RoomSettings_unbanButton{position:relative;height:36px;background-color:#76CFA6;border-radius:36px;margin-right:8px;color:#fff;line-height:34px;text-align:center;cursor:pointer;padding-left:12px;padding-right:12px}.mx_RoomSettings_integrationsButton_error{position:relative;cursor:not-allowed}.mx_RoomSettings_integrationsButton_error img{position:absolute;right:-5px;top:-5px}.mx_RoomSettings_integrationsButton_error,.mx_RoomSettings_leaveButton{float:right}.mx_RoomSettings_integrationsButton_error .mx_RoomSettings_integrationsButton_errorPopup{display:none}.mx_RoomSettings_integrationsButton_error:hover .mx_RoomSettings_integrationsButton_errorPopup,.mx_RoomSettings_unbanButton{display:inline}.mx_RoomSettings_integrationsButton_errorPopup{position:absolute;top:110%;left:-125%;width:348%;padding:2%;font-size:10pt;line-height:1.5em;border-radius:5px;background-color:#76CFA6;color:#fff;text-align:center}.mx_RoomSettings_e2eIcon{padding-left:4px;padding-right:7px}.mx_RoomSettings_leaveButton{margin-right:32px}.mx_RoomSettings_powerLevels{display:table}.mx_RoomSettings_powerLevel{display:table-row}.mx_RoomSettings_powerLevel .mx_PowerSelector,.mx_RoomSettings_powerLevelKey{display:table-cell;padding-bottom:5px}.mx_RoomSettings_powerLevelKey{text-align:right;padding-right:.3em}.mx_RoomSettings h3{color:#3d3b39;font-size:13px;margin-top:36px;margin-bottom:10px}.mx_RoomSettings .mx_RoomSettings_aliasLabel,.mx_RoomSettings .mx_RoomSettings_tags{margin-bottom:8px}.mx_RoomSettings .mx_RoomSettings_toggles label{margin-bottom:8px;display:block}.mx_RoomSettings .mx_RoomSettings_toggles input[type=checkbox],.mx_RoomSettings .mx_RoomSettings_toggles input[type=radio]{margin-right:7px}.mx_RoomSettings .mx_RoomSettings_tags input[type=checkbox]{margin-left:1em;margin-right:7px}.mx_RoomSettings .mx_RoomSettings_roomColor{display:inline-block;position:relative;width:37px;height:37px;border:1px solid #979797;margin-right:13px;cursor:pointer}.mx_RoomSettings .mx_RoomSettings_roomColor_selected{position:absolute;left:10px;top:4px;cursor:default!important}.mx_RoomSettings .mx_RoomSettings_roomColorPrimary{height:10px;position:absolute;bottom:0;width:100%}.mx_RoomTile,.mx_RoomTile_avatar_container,.mx_RoomTile_tooltip{position:relative}.mx_RoomSettings .mx_RoomSettings_aliasesTable{margin-top:12px;margin-bottom:0;margin-left:56px;display:table}.mx_RoomSettings .mx_RoomSettings_aliasesTableRow{display:table-row;margin-bottom:16px}.mx_RoomSettings .mx_RoomSettings_alias{max-width:400px;margin-bottom:16px}.mx_RoomSettings .mx_RoomSettings_addAlias,.mx_RoomSettings .mx_RoomSettings_deleteAlias{display:table-cell;padding-left:.5em;position:relative;cursor:pointer}.mx_RoomSettings .mx_RoomSettings_addAlias img,.mx_RoomSettings .mx_RoomSettings_deleteAlias img{visibility:hidden}.mx_RoomSettings .mx_RoomSettings_aliasesTableRow:hover .mx_RoomSettings_addAlias img,.mx_RoomSettings .mx_RoomSettings_aliasesTableRow:hover .mx_RoomSettings_deleteAlias img,.mx_RoomSettings_addAlias:hover,.mx_RoomSettings_deleteAlias:hover{visibility:visible}.mx_RoomSettings_warning{color:#ff0064;font-weight:700;margin-top:8px;margin-bottom:8px}.mx_RoomSettings_editable{border:0;border-bottom:1px solid #c7c7c7;padding:0;min-width:240px}.mx_RoomSettings_editable:focus{border-bottom:1px solid #76CFA6;outline:0;box-shadow:none}.mx_RoomSettings_addAlias,.mx_RoomSettings_deleteAlias{display:table-cell;visibility:visible}.mx_RoomSettings_aliasPlaceholder{color:#a2a2a2}.mx_RoomSettings_buttons{text-align:right;margin-bottom:16px}.mx_RoomSettings_button{display:inline;border:0;height:36px;border-radius:36px;font-weight:400;font-size:15px;color:#fff;background-color:#76CFA6;width:auto;margin:auto;padding:6px 1em}.mx_RoomTile{cursor:pointer;font-size:13px;display:block;height:34px}.mx_RoomTile_tooltip{display:inline-block;top:-54px;left:-12px}.mx_RoomTile_nameContainer{display:inline-block;width:180px;height:24px}.mx_RoomTile_avatar{display:inline-block;width:24px;height:24px;vertical-align:middle;padding:5px 6px 5px 16px}.mx_RoomTile_dm{display:block;position:absolute;bottom:0;right:-5px;z-index:2}.mx_RoomTile_name{display:inline-block;position:relative;width:165px;vertical-align:middle;color:rgba(69,69,69,.8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:2px 6px 3px}.collapsed .mx_RoomTile_highlight .mx_RoomTile_badge:after,.collapsed .mx_RoomTile_name{display:none}.collapsed .mx_RoomTile_nameContainer{width:60px}.mx_RoomSubList_badgeHighlight:after,.mx_RoomTile_highlight .mx_RoomTile_badge:after{content:\"\";width:0;height:0;border-right:7px solid transparent}.collapsed .mx_RoomTile_badge{top:0;min-width:12px;border-radius:16px;padding:0 4px;z-index:3}.mx_RoomTile_highlight .mx_RoomTile_badge:after{position:absolute;display:block;margin-left:5px;border-top:5px solid #ff0064}.mx_RoomTile_badge{display:inline-block;min-width:15px;height:15px;position:absolute;right:8px;top:9px;border-radius:8px;color:#fff;font-weight:600;font-size:10px;text-align:center;padding-top:1px;padding-left:4px;padding-right:4px}.mx_RoomTile .mx_RoomTile_badge.mx_RoomTile_badgeButton,.mx_RoomTile.mx_RoomTile_menuDisplayed .mx_RoomTile_badge{letter-spacing:.1em;opacity:1}.mx_RoomTile.mx_RoomTile_menuDisplayed.mx_RoomTile_noBadges .mx_RoomTile_badge,.mx_RoomTile.mx_RoomTile_noBadges .mx_RoomTile_badge.mx_RoomTile_badgeButton{background-color:#dbdbdb}.mx_RoomTile_unreadNotify .mx_RoomTile_badge{background-color:#76CFA6}.mx_RoomTile_highlight .mx_RoomTile_badge{background-color:#ff0064}.mx_RoomTile_highlight,.mx_RoomTile_unread{font-weight:800}.mx_RoomTile_selected{background-color:rgba(255,255,255,.8)}.mx_RoomTile:focus{-webkit-filter:none!important;filter:none!important;background-color:rgba(255,255,255,.9)}.mx_RoomTile .mx_RoomTile_name.mx_RoomTile_badgeShown{width:140px}.mx_RoomTile_arrow{position:absolute;right:0}.mx_SearchableEntityList{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.mx_SearchableEntityList_query{border-radius:3px;border:1px solid #f0f0f0;padding:9px;color:#454545;background-color:#fff;margin-left:3px;font-size:15px;margin-bottom:8px;width:189px}.mx_SearchableEntityList_query::-moz-placeholder{color:#454545;opacity:.5;font-size:12px}.mx_SearchableEntityList_query::-webkit-input-placeholder{color:#454545;opacity:.5;font-size:12px}.mx_SearchableEntityList_listWrapper{-webkit-box-flex:1;-ms-flex:1;flex:1;overflow-y:auto}.mx_SearchableEntityList_list{display:table;table-layout:fixed;width:100%}.mx_SearchableEntityList_list .mx_EntityTile_chevron{display:none}.mx_SearchableEntityList_hrWrapper{width:100%;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.mx_SearchableEntityList hr{height:1px;border:0;color:#454545;background-color:#454545;margin-right:15px;margin-top:11px;margin-bottom:11px}.mx_TopUnreadMessagesBar{margin:auto;max-width:960px;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #e5e5e5}.mx_TopUnreadMessagesBar_scrollUp{display:inline;cursor:pointer;text-decoration:underline}.mx_TopUnreadMessagesBar_scrollUp img{padding-left:10px;padding-right:31px;vertical-align:middle}.mx_TopUnreadMessagesBar_scrollUp span{opacity:.5}.mx_TopUnreadMessagesBar_close{float:right;padding-right:14px;padding-top:3px;cursor:pointer}.mx_MatrixChat_useCompactLayout .mx_TopUnreadMessagesBar{padding-top:4px;padding-bottom:4px}.mx_DevicesPanel{display:table;table-layout:fixed;width:880px;border-spacing:2px}.mx_DevicesPanel_header{display:table-header-group;font-weight:700}.mx_DevicesPanel_header>div{display:table-cell}.mx_DevicesPanel_header .mx_DevicesPanel_deviceLastSeen{width:30%}.mx_DevicesPanel_header .mx_DevicesPanel_deviceButtons{width:20%}.mx_DevicesPanel_device{display:table-row}.mx_DevicesPanel_device>div{display:table-cell}.mx_DevicesPanel_myDevice{font-weight:700}.mx_IntegrationsManager .mx_Dialog{width:60%;height:70%;overflow:hidden;padding:0;max-width:initial;max-height:initial}.mx_IntegrationsManager iframe{background-color:#fff;border:0;width:100%;height:100%}.mx_CallView_voice{background-color:#76CFA6;color:#fff;cursor:pointer;text-align:center;padding:6px;font-weight:700;font-size:13px}.mx_IncomingCallBox{text-align:center;border:1px solid #a4a4a4;border-radius:8px;background-color:#fff;position:fixed;z-index:1000;padding:6px;margin-top:-3px;margin-left:-20px;width:200px}.mx_IncomingCallBox_chevron{padding:12px;position:absolute;left:-21px;top:0}.mx_IncomingCallBox_title{padding:6px;font-weight:700}.mx_IncomingCallBox_buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.mx_IncomingCallBox_buttons_cell{vertical-align:middle;padding:6px;-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_IncomingCallBox_buttons_accept,.mx_IncomingCallBox_buttons_decline{vertical-align:middle;width:80px;height:36px;line-height:36px;border-radius:36px;color:#fff;margin:auto}.mx_IncomingCallBox_buttons_decline{background-color:#f48080}.mx_IncomingCallBox_buttons_accept{background-color:#80f480}.mx_VideoView{width:100%;position:relative;z-index:30}.mx_VideoView video{width:100%}.mx_VideoView_remoteVideoFeed{width:100%;background-color:#000;z-index:50}.mx_VideoView_localVideoFeed{width:25%;height:25%;position:absolute;left:10px;bottom:10px;z-index:100}.mx_VideoView_localVideoFeed video{width:auto;height:100%}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-Italic.ttf) format('truetype');font-weight:400;font-style:italic}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-Semibold.ttf) format('truetype');font-weight:600;font-style:normal}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-SemiboldItalic.ttf) format('truetype');font-weight:600;font-style:italic}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-Bold.ttf) format('truetype');font-weight:700;font-style:normal}@font-face{font-family:'Open Sans';src:url(/assets/fonts/Open_Sans/OpenSans-BoldItalic.ttf) format('truetype');font-weight:700;font-style:italic}@font-face{font-family:'Fira Mono';src:url(/assets/fonts/Fira_Mono/FiraMono-Regular.ttf) format('truetype');font-weight:400;font-style:normal}@font-face{font-family:'Fira Mono';src:url(/assets/fonts/Fira_Mono/FiraMono-Bold.ttf) format('truetype');font-weight:700;font-style:normal}.mx_CompatibilityPage{width:100%;height:100%;background-color:#e55}.mx_CompatibilityPage_box{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;width:500px;height:300px;border:1px solid;padding:10px;background-color:#fcc}.mx_HomePage{max-width:960px;width:100%;height:100%;margin-left:auto;margin-right:auto}.mx_HomePage iframe{display:block;width:100%;height:100%;border:0}.mx_LeftPanel,.mx_RightPanel{display:-webkit-box;display:-ms-flexbox;-webkit-box-orient:vertical;-webkit-box-direction:normal}.mx_LeftPanel{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.mx_LeftPanel_hideButton{position:absolute;top:10px;right:0;padding:8px;cursor:pointer}.mx_LeftPanel .mx_RoomList_scrollbar{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0;overflow-y:auto;z-index:6}.mx_LeftPanel.collapsed .mx_BottomLeftMenu{-webkit-box-flex:0;-ms-flex:0 0 160px;flex:0 0 160px}.mx_LeftPanel .mx_BottomLeftMenu{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;border-top:1px solid rgba(118,207,166,.2);margin-left:16px;margin-right:16px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;z-index:1}.mx_LeftPanel .mx_BottomLeftMenu_options{margin-top:18px}.collapsed .mx_RoleButton{margin-right:0!important;padding-top:3px!important;padding-bottom:3px!important}.mx_BottomLeftMenu_options>div{display:inline-block}.mx_BottomLeftMenu_options .mx_RoleButton{margin-left:0;margin-right:10px}.mx_BottomLeftMenu_options .mx_BottomLeftMenu_settings{float:right}.mx_BottomLeftMenu_options .mx_BottomLeftMenu_settings .mx_RoleButton{margin-right:0}.mx_LeftPanel.collapsed .mx_BottomLeftMenu_settings{float:none}.mx_MatrixChat_useCompactLayout .mx_LeftPanel .mx_BottomLeftMenu{-webkit-box-flex:0;-ms-flex:0 0 50px;flex:0 0 50px}.mx_MatrixChat_useCompactLayout .mx_LeftPanel.collapsed .mx_BottomLeftMenu{-webkit-box-flex:0;-ms-flex:0 0 160px;flex:0 0 160px}.mx_MatrixChat_useCompactLayout .mx_LeftPanel .mx_BottomLeftMenu_options{margin-top:12px}.mx_RightPanel{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.mx_RightPanel_header{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-bottom:1px solid #e5e5e5;margin-right:20px;-webkit-box-flex:0;-ms-flex:0 0 70px;flex:0 0 70px}.mx_RightPanel_headerButtonGroup{margin-top:6px;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;background-color:#fff;margin-left:0}.mx_RightPanel_headerButton{cursor:pointer;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;vertical-align:top;padding-left:4px;padding-right:5px;text-align:center;position:relative}.mx_RightPanel_headerButton object{padding-bottom:3px}.mx_RightPanel_headerButton_highlight{width:25px;height:5px;border-radius:5px;background-color:#76CFA6;opacity:.2}.mx_RightPanel_headerButton_badge{font-size:11px;color:#76CFA6;font-weight:700;padding-bottom:2px}.mx_RightPanel_collapsebutton{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:right;margin-top:20px}.mx_RightPanel .mx_GroupRoomList,.mx_RightPanel .mx_MemberInfo,.mx_RightPanel .mx_MemberList,.mx_RightPanel_blank{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0}.mx_RightPanel_footer{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;border-top:1px solid #e5e5e5;margin-right:20px;-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px}.mx_RightPanel_footer .mx_RightPanel_invite{line-height:35px;font-size:14px;color:#454545;padding-top:13px;padding-left:5px;cursor:pointer}.collapsed .mx_RightPanel_footer .mx_RightPanel_invite{display:none}.mx_RightPanel_invite .mx_RightPanel_icon{display:inline-block}.mx_RightPanel_invite .mx_RightPanel_message{display:inline-block;vertical-align:top;padding-left:10px}.mx_MatrixChat_useCompactLayout .mx_RightPanel_footer{-webkit-box-flex:0;-ms-flex:0 0 50px;flex:0 0 50px}.mx_MatrixChat_useCompactLayout .mx_RightPanel_footer .mx_RightPanel_invite{line-height:25px;padding-top:8px}.mx_RoomDirectory{max-width:960px;width:100%;margin-left:auto;margin-right:auto;margin-bottom:12px;color:#454545;word-break:break-word;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mx_RoomDirectory .mx_RoomHeader_simpleHeader{margin-left:0}.mx_RoomDirectory_list{-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.mx_RoomDirectory_list .mx_RoomView_messageListWrapper{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.mx_RoomDirectory_listheader{display:table;table-layout:fixed;width:100%;margin-top:12px;margin-bottom:12px;border-spacing:5px}.mx_RoomDirectory_searchbox{display:table-cell;vertical-align:middle}.mx_RoomDirectory_listheader .mx_NetworkDropdown{display:table-cell;width:200px}.mx_RoomDirectory_tableWrapper{overflow-y:auto;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0}.mx_RoomDirectory_table{font-size:14px;color:#454545;width:100%;text-align:left;table-layout:fixed}.mx_RoomDirectory_roomAvatar{width:24px;padding-left:12px;padding-right:24px;vertical-align:top}.mx_RoomDirectory_roomDescription{padding-bottom:16px}.mx_RoomDirectory_name{display:inline-block;font-weight:600}.mx_RoomDirectory_perms{display:inline-block}.mx_RoomDirectory_perm{display:inline;padding-left:5px;padding-right:5px;height:15px;border-radius:11px;background-color:#eaf5f0;text-transform:uppercase;font-weight:600;font-size:11px;color:#76CFA6}.mx_RoomDirectory_topic{cursor:initial}.mx_RoomDirectory_alias{font-size:12px;color:#a2a2a2}.mx_RoomDirectory_roomMemberCount{text-align:right;width:100px;padding-right:10px}.mx_RoomDirectory_table tr{padding-bottom:10px;cursor:pointer}.mx_RoomSubList{display:table;table-layout:fixed;width:100%}.mx_RoomSubList_labelContainer{height:31px;width:235px;position:relative}.mx_RoomSubList_label{position:relative;text-transform:uppercase;color:#3d3b39;font-weight:600;font-size:12px;width:203px;height:17px;cursor:pointer;background-color:#d3efe1;border-top:solid 2px #eaf5f0;padding:6px 16px}.mx_RoomSubList_badge,.mx_RoomSubList_moreBadge{min-width:15px;border-radius:8px;padding-top:1px}.mx_RoomSubList_label.mx_RoomSubList_fixed{position:fixed;top:0;z-index:5}.collapsed .mx_RoomSubList_label{height:17px;width:28px}.collapsed .mx_RoomSubList_labelContainer{width:28px}.mx_RoomSubList_roomCount{display:inline-block;font-size:12px;font-weight:400;color:#76CFA6;padding-left:5px;text-transform:none}.collapsed .mx_RoomSubList_roomCount{display:none}.mx_RoomSubList_badge{display:inline-block;height:15px;position:absolute;right:8px;top:7px;color:#fff;font-weight:600;font-size:10px;text-align:center;padding-left:4px;padding-right:4px;background-color:#76CFA6}.mx_RoomSubList_badgeHighlight{background-color:#ff0064}.mx_RoomSubList_badgeHighlight:after{position:absolute;display:block;margin-left:5px;border-top:5px solid #ff0064}.mx_RoomSubList_chevronDown,.mx_RoomSubList_chevronUp{border-left:5px solid transparent;border-right:5px solid transparent;width:0;height:0}.collapsed .mx_RoomSubList_badgeHighlight:after{display:none}.mx_RoomSubList_chevron{position:absolute;right:41px;top:11px}.mx_RoomSubList_chevronDown{border-top:6px solid #76CFA6}.mx_RoomSubList_chevronUp{border-bottom:6px solid #76CFA6}.mx_RoomSubList_chevronRight{width:0;height:0;border-top:5px solid transparent;border-left:6px solid #76CFA6;border-bottom:5px solid transparent}.mx_RoomSubList_ellipsis{display:block;line-height:11px;height:18px;position:relative;cursor:pointer;font-size:13px}.mx_RoomSubList_more,.mx_RoomSubList_moreBadge{font-weight:600;font-size:10px;vertical-align:middle}.collapsed .mx_RoomSubList_ellipsis{height:20px}.mx_RoomSubList_line{display:inline-block;width:159px;border-top:dotted 2px #76CFA6;vertical-align:middle}.collapsed .mx_RoomSubList_line{display:none}.mx_RoomSubList_more{display:inline-block;text-transform:uppercase;text-align:left;color:#76CFA6;padding-right:7px;padding-left:7px}.collapsed .mx_RoomSubList_more{display:none}.mx_RoomSubList_moreBadge{display:inline-block;height:13px;position:absolute;right:8px;top:-2px;border:1px solid #76CFA6;color:#fff;text-align:center;padding-left:3px;padding-right:3px;background-color:#fff}.mx_MessageContextMenu_field.mx_MessageContextMenu_fieldSet,.mx_RoomTileContextMenu_notif_field.mx_RoomTileContextMenu_notif_fieldSet,.mx_RoomTileContextMenu_tag_field.mx_RoomTileContextMenu_tag_fieldSet{font-weight:700}.mx_RoomSubList_moreBadge.mx_RoomSubList_moreBadgeNotify{background-color:#76CFA6;border:0;padding-top:3px;padding-left:4px;padding-right:4px}.mx_RoomSubList_moreBadge.mx_RoomSubList_moreBadgeHighlight{background-color:#ff0064;border:0;padding-top:3px;padding-left:4px;padding-right:4px}.collapsed .mx_RoomSubList_moreBadge{position:static;margin-left:16px;margin-top:2px}.mx_RoomSubList_ellipsis .mx_RoomSubList_chevronDown{position:relative;top:4px;left:2px}.mx_ViewSource pre{text-align:left;font-size:12px;padding:.5em 1em;word-wrap:break-word}.mx_MessageContextMenu_field{padding:3px 6px;cursor:pointer;white-space:nowrap}.mx_RoomTileContextMenu_leave,.mx_RoomTileContextMenu_tag_field{padding-top:8px;padding-right:20px;padding-bottom:8px;cursor:pointer;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:16px}.mx_RoomTileContextMenu_tag_field.mx_RoomTileContextMenu_tag_fieldSet .mx_RoomTileContextMenu_tag_icon{display:none}.mx_RoomTileContextMenu_tag_field.mx_RoomTileContextMenu_tag_fieldSet .mx_RoomTileContextMenu_tag_icon_set{display:inline-block}.mx_RoomTileContextMenu_tag_field.mx_RoomTileContextMenu_tag_fieldDisabled{color:rgba(0,0,0,.2)}.mx_RoomTileContextMenu_tag_icon{padding-right:8px;padding-left:4px;display:inline-block}.mx_RoomTileContextMenu_tag_icon_set{padding-right:8px;padding-left:4px;display:none}.mx_RoomTileContextMenu_separator{margin-top:0;margin-bottom:0;border-top-width:1px;border-color:rgba(187,187,187,.5);border-style:solid none none}.mx_RoomTileContextMenu_leave{color:#ff0064}.mx_RoomTileContextMenu_notif_picker{position:absolute;top:16px;left:5px}.mx_RoomTileContextMenu_notif_field{cursor:pointer;white-space:nowrap;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 6px 10px 8px}.mx_RoomTileContextMenu_notif_field.mx_RoomTileContextMenu_notif_fieldDisabled{color:rgba(0,0,0,.2)}.mx_RoomTileContextMenu_notif_icon{padding-right:4px;padding-left:4px}.mx_RoomTileContextMenu_notif_activeIcon{display:inline-block;opacity:0;position:relative;left:-5px}.mx_RoomTileContextMenu_notif_fieldSet .mx_RoomTileContextMenu_notif_activeIcon{opacity:1}.mx_ChangelogDialog_content{max-height:300px;overflow:auto}.mx_ChangelogDialog_li{padding:.2em}.mx_SetEmailDialog_email_input,.mx_SetPasswordDialog_change_password input{border-radius:3px;padding:9px;font-size:15px;width:100%;max-width:280px;margin-bottom:10px;background-color:#fff}.mx_DevTools_RoomStateExplorer_button,.mx_DevTools_RoomStateExplorer_query{margin-bottom:10px}.mx_SetEmailDialog_email_input{border:1px solid #f0f0f0;color:rgba(74,74,74,.9)}.mx_SetEmailDialog_email_input:focus{outline:0;box-shadow:none;border:1px solid #76CFA6}.mx_SetPasswordDialog_change_password input{border:1px solid #f0f0f0;color:#454545}.mx_SetPasswordDialog_change_password_button{margin-top:68px}.mx_SetPasswordDialog .mx_Dialog_content{margin-bottom:0}.mx_NetworkDropdown{position:relative}.mx_NetworkDropdown_input{position:relative;border-radius:3px;border:1px solid #c7c7c7;font-weight:300;font-size:13px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mx_NetworkDropdown_arrow{border-color:#454545 transparent transparent;border-style:solid;border-width:5px 5px 0;display:block;height:0;position:absolute;right:10px;top:14px;width:0}.mx_ImageView,.mx_ImageView_content{display:-webkit-box;display:-ms-flexbox}.mx_NetworkDropdown_networkoption{height:35px;line-height:35px;padding-left:8px;padding-right:8px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mx_NetworkDropdown_networkoption img{margin:5px;width:25px;vertical-align:middle}.mx_ImageView,.mx_Spinner{-webkit-box-align:center;width:100%}input.mx_NetworkDropdown_networkoption,input.mx_NetworkDropdown_networkoption:focus{border:0;padding-top:0;padding-bottom:0}.mx_NetworkDropdown_menu{position:absolute;left:-1px;right:-1px;top:100%;z-index:2;margin:0;padding:0;border-radius:3px;border:1px solid #76CFA6;background-color:#fff}.mx_NetworkDropdown_menu .mx_NetworkDropdown_networkoption:hover{background-color:#ddd}.mx_NetworkDropdown_menu_network{font-weight:700}.mx_ImageView{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-ms-flex-align:center;-webkit-box-align:center;align-items:center}.mx_ImageView_lhs{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-box-flex:1;-ms-flex:1 1 10%;flex:1 1 10%;min-width:60px}.mx_ImageView_content{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;min-width:0;height:90%;-webkit-box-flex:15;-ms-flex:15 15 0px;flex:15 15 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.mx_ImageView_label,.mx_Spinner{display:-webkit-box;display:-ms-flexbox}.mx_ImageView_content img{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain;pointer-events:all}.mx_ImageView_labelWrapper{position:absolute;top:0;right:0;height:100%;overflow:auto;pointer-events:all}.mx_ImageView_label{text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:30px;padding-right:30px;min-height:100%;max-width:240px;color:#fff}.mx_ImageView_cancel{position:absolute;top:0;right:0;padding:35px;cursor:pointer}.mx_ImageView_name{font-size:18px;margin-bottom:6px;word-wrap:break-word}.mx_ImageView_metadata{font-size:15px;opacity:.5}.mx_ImageView_download{display:table;margin-top:24px;margin-bottom:6px;border-radius:5px;background-color:#454545;font-size:14px;padding:9px;border:1px solid #fff}.mx_ImageView_size{font-size:11px}.mx_ImageView_link{color:#fff!important;text-decoration:none!important}.mx_ImageView_button{font-size:15px;opacity:.5;margin-top:18px;cursor:pointer}.mx_ImageView_shim{height:30px}.mx_ImageView_rhs{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;-webkit-box-flex:1;-ms-flex:1 1 10%;flex:1 1 10%;min-width:300px}.mx_Spinner{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_MatrixChat_middlePanel .mx_Spinner{height:auto}.mx_MatrixToolbar{background-color:#76CFA6;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mx_MatrixToolbar_warning{margin-left:16px;margin-right:8px;margin-top:-2px}.mx_MatrixToolbar_content{-webkit-box-flex:1;-ms-flex:1;flex:1}.mx_MatrixToolbar_link{color:#fff!important;text-decoration:underline!important;cursor:pointer}.mx_MatrixToolbar_clickable,.mx_MatrixToolbar_close{cursor:pointer}.mx_MatrixToolbar_close img{display:block;float:right;margin-right:10px}.mx_MatrixToolbar_action{margin-right:16px}.mx_DateSeparator{clear:both;margin-top:32px;margin-bottom:8px;margin-left:63px;padding-bottom:6px;border-bottom:1px solid #e5e5e5}.mx_RoomDropTarget,.mx_SearchBar{padding-top:5px;padding-bottom:5px}.mx_RoomDropTarget{font-size:13px;border:1px dashed #76CFA6;color:#454545;background-color:rgba(255,255,255,.5);border-radius:4px;margin:8px 18px 7px}.collapsed .mx_RoomDropTarget{margin-right:10px;margin-left:10px}.mx_RoomDropTarget_label{position:relative;margin-top:3px;line-height:21px;z-index:1;text-align:center}.collapsed .mx_RoomDropTarget_avatar{float:none}.collapsed .mx_RoomDropTarget_label{display:none}.mx_RoomTooltip_chevron{position:absolute;left:-8px;top:4px;width:0;height:0;border-top:8px solid transparent;border-right:8px solid rgba(187,187,187,.5);border-bottom:8px solid transparent}.mx_RoomTooltip_chevron:after{content:'';width:0;height:0;border-top:7px solid transparent;border-right:7px solid #fff;border-bottom:7px solid transparent;position:absolute;top:-7px;left:1px}.mx_RoomTooltip{display:none;position:fixed;border:1px solid rgba(187,187,187,.5);border-radius:5px;background-color:#fff;z-index:2000;padding:5px;pointer-events:none;line-height:14px;font-size:13px;color:#454545}.mx_SearchBar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.mx_SearchBar_input{display:inline block;border-radius:3px 0 0 3px;border:1px solid #f0f0f0;font-size:15px;padding:9px 9px 9px 11px;width:auto;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0}.mx_SearchBar_searchButton{cursor:pointer;margin-right:10px;width:37px;height:37px;border-radius:0 3px 3px 0;background-color:#76CFA6}@-webkit-keyframes pulsate{0%,100%{opacity:1}50%{opacity:.1}}@keyframes pulsate{0%,100%{opacity:1}50%{opacity:.1}}.mx_SearchBar_searching img{-webkit-animation:pulsate .5s ease-out;animation:pulsate .5s ease-out;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.mx_SearchBar_button{display:inline;border:0;border-radius:36px;font-weight:400;font-size:15px;color:#fff;background-color:#76CFA6;width:auto;margin:auto auto auto 7px;cursor:pointer;padding:6px 24px 4px}.mx_SearchBar_unselected{background-color:#fff;color:#76CFA6;border:1px solid #76CFA6}.mx_SearchBar_cancel{padding-left:14px;padding-right:14px;cursor:pointer}.mx_UserNotifSettings_tableRow{display:table-row}.mx_UserNotifSettings_inputCell{display:table-cell;padding-bottom:8px;padding-right:8px;width:16px}.mx_UserNotifSettings_labelCell{padding-bottom:8px;width:400px;display:table-cell}.mx_UserNotifSettings_pushRulesTableWrapper{padding-bottom:8px}.mx_UserNotifSettings_pushRulesTable{width:100%;table-layout:fixed}.mx_UserNotifSettings_pushRulesTable thead{font-weight:700;font-size:15px}.mx_UserNotifSettings_pushRulesTable tbody th{font-weight:400;font-size:15px}.mx_UserNotifSettings_pushRulesTable tbody th:first-child{text-align:left}.mx_UserNotifSettings_keywords{cursor:pointer;color:#76CFA6}.mx_UserSettings_devicesTable td{padding-left:20px;padding-right:20px}.mx_UserSettings_devicesTable_nodevices{font-style:italic}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map