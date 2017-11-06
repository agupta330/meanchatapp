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

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_sticky_kit__ = __webpack_require__("../../../../ng2-sticky-kit/ng2-sticky-kit.es5.js");
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
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["w" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["B" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["C" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["D" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["E" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_material__["A" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_16_ng2_sticky_kit__["a" /* StickyModule */]
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
exports.push([module.i, ".chat\n{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.chat li\n{\n    margin-bottom: 10px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n    margin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n    margin-right: 60px;\n}\n\n\n.chat li .chat-body p\n{\n    margin: 0;\n    color: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n    margin-right: 5px;\n}\n\n.panel-body\n{\n    overflow-y: scroll;\n    /* height: 250px; */\n}\n\n::-webkit-scrollbar-track\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n    width: 12px;\n    background-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n    background-color: #555;\n}\n[contenteditable=true]:empty:before{\n  content: attr(placeholder);\n  display: block; /* For Firefox */\n}\n\n/* */\n\ndiv[contenteditable=true] {\n  border: 1px solid #AAA;\n  width: 100%;\n  padding: 5px;\n}\n\npre {\n  background:#EEE;\n  padding:5px;\n  width: 290px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<container [sections]=\"sections\" *ngIf=\"joinned; else joinroom\"></container>\n<!-- <div class=\"input-group\" *ngIf=\"joinned\" style=\"padding-left:5px;padding-right:5px;\">\n    <span class=\"input-group-btn\" style=\"padding-right:2px;\">\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n          +\n        </button>\n    </span>\n    <div contenteditable=\"true\" placeholder=\"Enter text here...\" style=\"padding-right:2px;\"></div>\n    <span class=\"input-group-btn\">\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n            Send\n        </button>\n    </span>\n</div>\n<br> -->\n<!-- <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\n   Logout\n</button> -->\n<form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\" *ngIf=\"joinned\" (keyup.enter)=\"sendMessage()\">\n<msg-app [(cdMsg)] =\"msgData.message\" [(joinnedMsg)]=\"joinned\"> </msg-app> \n</form>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n            <!-- <div class=\"panel panel-primary\" *ngIf=\"joinned\"> -->\n                <!-- <div class=\"panel-heading\">\n                    <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\n                    <div class=\"btn-group pull-right\">\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\n                            Logout\n                        </button>\n                    </div>\n                </div> -->\n                <!-- <div #scrollMe class=\"panel-body\">\n                    <container [sections]=\"sections\"></container>\n                     <ul class=\"chat\">\n                        <li *ngFor=\"let c of chats\">\n                            <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\n                                <span class=\"chat-img pull-left\">\n                              <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\n                            </span>\n                                <div class=\"chat-body clearfix\">\n                                    <div class=\"header\">\n                                        <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\n                                    </div>\n                                    <p>{{ c.message }}</p>\n                                </div>\n                            </div>\n                            <ng-template #rightchat>\n                                <div class=\"right clearfix\">\n                                    <span class=\"chat-img pull-right\">\n                                <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\n                              </span>\n                                    <div class=\"chat-body clearfix\">\n                                        <div class=\"header\">\n                                            <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\n                                            <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\n                                        </div>\n                                        <p>{{ c.message }}</p>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n                    </ul> \n                </div> -->\n                <!-- <div class=\"panel-footer\">\n                    <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\n                        <div class=\"input-group\">\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\n                            <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\"\n                                required=\"\" />\n                            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\n                                Send</button>\n                        </span>\n                        </div>\n                    </form>\n                </div> -->\n\n            <!-- </div> -->\n            <ng-template #joinroom>\n                <div class=\"panel panel-primary\">\n                    <div class=\"panel-heading\">\n                        <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\n                        <div class=\"btn-group pull-right\">\n                            <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"showAddRoomDialog()\">\n                            Create New Room\n                        </button>\n                        </div>\n                    </div>\n                    <div class=\"panel-body\">\n                        <h1>Select Chat Room</h1>\n                        <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\n                            <div class=\"form-group\">\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" placeholder=\"Nickname\" required=\"\"\n                                />\n                            </div>\n                            <div class=\"form-group\">\n                                <select class=\"form-control\" [(ngModel)]=\"newUser.room\" name=\"room\" required=\"\">\n                        <!-- <option>Select Room</option> -->\n                        <option *ngFor='let room of rooms' [value]=\"room.roomname\">\n                          {{room.roomname}}\n                        </option>\n                      </select>\n                            </div>\n                            <div class=\"form-group\">\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </ng-template>\n        </div>\n    </div>\n</div>"

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
                    console.log(this.chats);
                    var lastKey;
                    if (this.chats != undefined && this.chats != null) {
                        for (var key in this.chats) {
                            if (this.chats.hasOwnProperty(key)) {
                                lastKey = key;
                            }
                        }
                        console.log(lastKey);
                        this.chats[lastKey].push({ "name": this.ISOToDateFn(data.message.updated_at), "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg", "messages": data.message });
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
exports.push([module.i, ".header{\n  position: fixed;\n  top: 0px;\n  width:100%;\n  z-index: 2;\n  background: #252830; \n  color: white; \n  height:60px; \n  margin-left: 0px;\n  -ms-flex-line-pack: center;\n      align-content: center\n} \nul {\n  list-style-type: none; \n  padding: 5px;\n}\n \nh2 {\n    font: 33px sans-serif;\n    margin-top: 13px;\n    text-align: center;\n    text-transform: uppercase;\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" *ngIf=\"currentSectionName!=null\">\n      <h2 class=\"background\"><span>{{currentSectionName}}</span></h2>\n</div>\n<ul>\n     <li *ngFor=\"let section of sections\"> \n        <section [content]=\"section\" (sectionPosition)=\"sectionPosition($event)\"></section>\n     </li> \n</ul>"

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
    ContainerComponent.prototype.onWindowScroll = function () {
        this.currentSectionName = this.getCurrentSectionName();
    };
    ContainerComponent.prototype.getCurrentSectionName = function () {
        var offset = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
        for (var _i = 0, _a = this.sectionsIndex; _i < _a.length; _i++) {
            var section = _a[_i];
            //Note: 13px is the margin-top value of the h2 element in the header
            if ((section.position + offset - window.scrollY - 13) < 0) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
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
exports.push([module.i, "[contenteditable=true]:empty:before{\n  content: attr(placeholder);\n  display: block; /* For Firefox */\n}\n\n/* */\n\ndiv[contenteditable=true] {\n  border: 1px solid #AAA;\n  width: 100%;\n  padding: 5px;\n}\n\npre {\n  background:#EEE;\n  padding:5px;\n  width: 290px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messagecontainer/messagecontainer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\" style=\"padding-left:5px;padding-right:5px;\">\n    <span class=\"input-group-btn\" style=\"padding-right:5px;\">\n        <button (click)=\"logout()\" class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n          Logout\n        </button>\n    </span>\n    <div style=\"width:90%\" contenteditable=\"true\" placeholder=\"Enter text here...\" [textContent]=\"cdMsg\" (input)=\"update($event.target.textContent)\" ></div>\n    <span class=\"input-group-btn\" style=\"padding-left:5px;\">\n        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\n            Send\n        </button>\n    </span>\n</div>\n<br>"

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

/***/ "../../../../../src/app/section/section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n  height: 320px;} \nhr{\n   margin-bottom: 21px;\n   border: 0;\n  border-top: 1px solid #434857;\n}\n.subheaderdemoBasicUsage .face {\n  border-radius: 30px;\n  border: 1px solid #ddd;\n  width: 48px;\n  margin: 16px;\n}\n/* .message-pane {\n  display: inline-block;\n  vertical-align: top;\n  height: 100%;\n  width: 100%;\n  overflow-y: scroll;\n  padding: 55px 15px 65px 15px;\n  -webkit-overflow-scrolling: touch;\n} */\n\n.message-pane {\n  display:inline-block;\n  vertical-align: top;\n  height:100%;\n  width:100%;\n  overflow-y:hidden;\n  overflow-x:hidden;\n  padding:0px 15px 10px 15px;\n  -webkit-overflow-scrolling: touch;\n}\n\n.message-pane .header {\n  position:fixed;\n  top:0;\n  background:#fff;\n  width:100%;\n  z-index:2;\n}\n\n.message-pane .header h1 {\n  padding:12px 0 10px 0;\n  margin-top:0px;\n  margin-bottom:0px;\n  font-size:24px;\n  color:#555459;\n  font-weight:900;\n}\n\n.message-pane .message-form {\n  position:fixed;\n  bottom:0;\n  padding:0 15px 15px 0;\n  background:#fff;\n  width:100%;\n}\n\n.message-pane .message-wrap {\n  position:relative;\n  margin-top:15px;\n}\n\n.message-pane .message-wrap .user-pic {\n  width:36px;\n  height:36px;\n  border-radius:4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.message-pane .message-wrap .message-info {\n  display: inline-block;\n  vertical-align: top;\n  padding-left:5px;\n}\n\n.message-pane .message-wrap .message-info .user-name {\n  color:#555459;\n  font-weight:900;\n}\n\n.message-pane .message-wrap .message-info .user-name span{\n  color:#ccc;\n  font-weight: normal;\n  font-size:10px;\n}\n\n[contenteditable=true]:empty:before{\n  content: attr(placeholder);\n  display: block; /* For Firefox */\n}\n\n/* */\n\ndiv[contenteditable=true] {\n  border: 1px solid #AAA;\n  width: 100%;\n  padding: 5px;\n}\n\npre {\n  background:#EEE;\n  padding:5px;\n  width: 290px;\n}\n\n.container_186vsl5 {\n    -webkit-box-flex: 1 !important;\n            flex: 1 !important;\n    padding: 10px 10px 0 10px !important;\n    background: #fff !important;\n    overflow-y: auto !important;\n    -webkit-flex: 1 !important;\n    -ms-flex: 1 !important;\n    -webkit-overflow-scrolling: touch;\n}\n\n.dayDivider_1yqkpak {\n    position: relative !important;\n    margin: 1rem 0 !important;\n    text-align: center !important;\n}\n\n.dayText_zrlbv3 {\n    z-index: 1 !important;\n    position: relative !important;\n    background: #fff !important;\n    padding: 0 12px !important;\n}\n\n.dayDivider_1yqkpak::after {\n    position: absolute !important;\n    top: 50% !important;\n    right: 0 !important;\n    left: 0 !important;\n    height: 1px !important;\n    background: rgb(240,240,240) !important;\n    content: \"\" !important;\n}\n\n/* div,* {\n    box-sizing: none;\n} */\n#iddisplay{\n display: -webkit-flex; margin-bottom: 10px;\n}\n.divbutton mat-icon {\n    display: none;\n    float:right\n}\n\n.divbutton:hover mat-icon {\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/section/section.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2>{{content.name}}</h2> -->\n<!-- <mat-divider></mat-divider> -->\n<!-- <img src=\"{{content.img}}\"/> -->\n<!-- <div class=\"message-pane subheaderdemoBasicUsage\" layout=\"column\" flex=\"\" layout-fill=\"\" ng-cloak=\"\" class=\"\">\n<mat-list layout-padding=\"\">\n    <mat-list-item *ngFor=\"let message of content.messages\">\n        <mat-icon matListIcon>folder</mat-icon>\n        <h4 matLine>{{message.name}}</h4>\n        <p matLine class=\"demo-2\"> {{message.updated}} </p>\n    </mat-list-item>\n</mat-list>\n</div> -->\n<!-- <div class=\"message-pane\">\n  <span><b>{{content.name}}</b></span>\n  <div class=\"message-wrap\" *ngFor=\"let message of content.messages\">\n    <img class=\"user-pic\" src=\"{{message.img}}\">\n    <div class=\"message-info\">\n      <div class=\"user-name\">\n        {{ message.messages.nickname }}\n        <span class=\"timestamp\">{{ message.messages.updated_at | date:'short' }}</span>\n      </div>\n      <div>\n        {{ message.messages.message }}\n      </div>\n    </div>\n  </div>\n</div> -->\n<div class=\"container_186vsl5\">\n  <div>\n    <div class=\"dayDivider_1yqkpak\">\n      <span class=\"dayText_zrlbv3\">\n        <span><b>{{content.name}}</b></span>\n      </span>\n    </div>\n    <div id=\"iddisplay\" *ngFor=\"let message of content.messages\">\n      <img src=\"{{message.img}}\" style=\"width: 40px; height: 40px; border-radius: 4px; margin-right: 10px;\">\n      <div class=\"divbutton\">\n        <div>\n          <b style=\"margin-right: 8px; font-size: 14px;\">\n             {{ message.messages.nickname }}\n          </b>\n          <time style=\"margin-right: 12px;font-size: 12px; color: rgb(192, 192, 192);\">\n            {{ message.messages.updated_at | date:'shortTime' }}\n          </time>\n          <mat-icon title=\"Add Reaction\" style=\"cursor:pointer\">face</mat-icon>\n          <mat-icon title=\"Copy Message\" style=\"cursor:pointer\" (click)=\"copyTextToClipboard(message.messages.message)\">assignment</mat-icon>\n        </div>\n        <div style=\"display: -webkit-flex;width:100%\" >\n          {{ message.messages.message }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div id=\"msg_input\" class=\"ql-container\"><div class=\"ql-editor ql-blank\" contenteditable=\"true\" tabindex=\"1\" role=\"textbox\" aria-multiline=\"true\" aria-haspopup=\"true\" spellcheck=\"true\" autocorrect=\"off\" autocomplete=\"off\" aria-label=\"Message @Priyansh Dwivedi\"><p><br></p></div><div class=\"ql-clipboard\" contenteditable=\"true\" tabindex=\"-1\" aria-hidden=\"true\" role=\"presentation\" spellcheck=\"true\" autocorrect=\"off\" autocomplete=\"off\"></div><div class=\"ql-placeholder\" aria-hidden=\"true\" role=\"presentation\" tabindex=\"-1\">Message @Priyansh Dwivedi</div></div> -->"

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


var SectionComponent = (function () {
    function SectionComponent(element, chatService) {
        this.element = element;
        this.chatService = chatService;
        this.sectionPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    SectionComponent.prototype.onResize = function (event) {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionPosition", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionComponent.prototype, "onResize", null);
SectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'section',
        template: __webpack_require__("../../../../../src/app/section/section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/section/section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], SectionComponent);

var _a, _b;
//# sourceMappingURL=section.component.js.map

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