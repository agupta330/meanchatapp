webpackJsonp([1,4],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomaddComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prompt',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <h4 class=\"modal-title\">{{title || 'Prompt'}}</h4>\n                     <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n                   </div>\n                   <div class=\"modal-body\">\n\n                <form role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"roomname\">Room Name</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomname\"  name=\"roomname\" [(ngModel)]=\"RoomData.roomname\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"roomdesc\">Room Description</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomdesc\" name=\"roomdesc\" [(ngModel)]=\"RoomData.roomdesc\"/>\n                  </div>                 \n                </form>\n                    \n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"closeBox()\" >Cancel</button>\n                   </div>\n                 </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], RoomaddComponent);

var _a, _b;
//# sourceMappingURL=roomadd.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(329);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(409),
        styles: [__webpack_require__(396)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__section_section_component__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container_container_component__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollcontainer_scrollcontainer_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_roomadd_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__chat_chat_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_sticky_kit__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ROUTES = [
    { path: '', redirectTo: 'chats', pathMatch: 'full' },
    { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_13__chat_chat_component__["a" /* ChatComponent */] },
    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_2__scrollcontainer_scrollcontainer_component__["a" /* ScrollcontainerComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_3__chat_roomadd_component__["a" /* RoomaddComponent */],
            __WEBPACK_IMPORTED_MODULE_2__scrollcontainer_scrollcontainer_component__["a" /* ScrollcontainerComponent */],
            __WEBPACK_IMPORTED_MODULE_1__container_container_component__["a" /* ContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_0__section_section_component__["a" /* SectionComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["w" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["x" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["A" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["B" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["C" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["D" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_material__["E" /* MatStepperModule */],
            __WEBPACK_IMPORTED_MODULE_15_ng2_sticky_kit__["a" /* StickyModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_10_ng2_bootstrap_modal__["DialogService"],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__chat_roomadd_component__["a" /* RoomaddComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roomadd_component__ = __webpack_require__(147);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
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
    function ChatComponent(chatService, dialogService) {
        this.chatService = chatService;
        this.dialogService = dialogService;
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__["connect"]();
        this.folders = [
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
        ];
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
                    if (this.chats != undefined && this.chats != null) {
                        this.chats.push(data.message);
                    }
                    this.msgData = { room: roomObj.room, nickname: roomObj.nickname, message: '' };
                    this.scrollToBottom();
                }
            }
        }.bind(this));
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
            _this.chats = res;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__(410),
        styles: [__webpack_require__(397)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContainerComponent.prototype, "sections", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ContainerComponent.prototype, "onWindowScroll", null);
ContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'container',
        template: __webpack_require__(411),
        styles: [__webpack_require__(398)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ContainerComponent);

var _a;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomaddComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prompt',
        template: "<div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                   <div class=\"modal-header\">\n                     <h4 class=\"modal-title\">{{title || 'Prompt'}}</h4>\n                     <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\n                   </div>\n                   <div class=\"modal-body\">\n\n                <form role=\"form\">\n                  <div class=\"form-group\">\n                    <label for=\"roomname\">Room Name</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomname\"  name=\"roomname\" [(ngModel)]=\"RoomData.roomname\"/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"roomdesc\">Room Description</label>\n                      <input type=\"text\" class=\"form-control\"\n                      id=\"roomdesc\" name=\"roomdesc\" [(ngModel)]=\"RoomData.roomdesc\"/>\n                  </div>                 \n                </form>\n                    \n                   </div>\n                   <div class=\"modal-footer\">\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">OK</button>\n                     <button type=\"button\" class=\"btn btn-default\" (click)=\"closeBox()\" >Cancel</button>\n                   </div>\n                 </div>\n                </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]) === "function" && _b || Object])
], RoomaddComponent);

var _a, _b;
//# sourceMappingURL=roomadd.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__roomadd_component__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollcontainerComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ScrollcontainerComponent.prototype, "myScrollContainer", void 0);
ScrollcontainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionComponent; });
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
    function SectionComponent(element) {
        this.element = element;
        this.sectionPosition = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    SectionComponent.prototype.onResize = function (event) {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    return SectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "sectionPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SectionComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SectionComponent.prototype, "onResize", null);
SectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'section',
        template: __webpack_require__(412),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SectionComponent);

var _a;
//# sourceMappingURL=section.component.js.map

/***/ }),

/***/ 329:
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

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, ".chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, ".header{\r\n  position: fixed;\r\n  top: 0px;\r\n  width:100%;\r\n  z-index: 2;\r\n  background: #252830;\r\n  color: white; \r\n  height:70px; \r\n  margin-left: 40px;\r\n} \r\nul {\r\n  list-style-type: none; \r\n  padding: 40px;\r\n}\r\nh2{\r\n  margin-top: 13px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "img{\r\n  height: 320px;} \r\nhr{\r\n   margin-bottom: 21px;\r\n   border: 0;\r\n  border-top: 1px solid #434857;\r\n}\r\n.subheaderdemoBasicUsage .face {\r\n  border-radius: 30px;\r\n  border: 1px solid #ddd;\r\n  width: 48px;\r\n  margin: 16px;\r\n}\r\n.message-pane {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  padding: 55px 15px 65px 15px;\r\n  -webkit-overflow-scrolling: touch;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"panel panel-primary\" *ngIf=\"joinned; else joinroom\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\r\n                            Logout\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div #scrollMe class=\"panel-body\">\r\n                    <ul class=\"chat\">\r\n                        <li *ngFor=\"let c of chats\">\r\n                            <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\r\n                                <span class=\"chat-img pull-left\">\r\n                              <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                            </span>\r\n                                <div class=\"chat-body clearfix\">\r\n                                    <div class=\"header\">\r\n                                        <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                    </div>\r\n                                    <p>{{ c.message }}</p>\r\n                                </div>\r\n                            </div>\r\n                            <ng-template #rightchat>\r\n                                <div class=\"right clearfix\">\r\n                                    <span class=\"chat-img pull-right\">\r\n                                <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                              </span>\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                            <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\r\n                                        </div>\r\n                                        <p>{{ c.message }}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                    <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\r\n                            <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\r\n                            <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\"\r\n                                required=\"\" />\r\n                            <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\r\n                                Send</button>\r\n                        </span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <ng-template #joinroom>\r\n                <div class=\"panel panel-primary\">\r\n                    <div class=\"panel-heading\">\r\n                        <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                        <div class=\"btn-group pull-right\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"showAddRoomDialog()\">\r\n                            Create New Room\r\n                        </button>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <h1>Select Chat Room</h1>\r\n                        <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" placeholder=\"Nickname\" required=\"\"\r\n                                />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <select class=\"form-control\" [(ngModel)]=\"newUser.room\" name=\"room\" required=\"\">\r\n                        <!-- <option>Select Room</option> -->\r\n                        <option *ngFor='let room of rooms' [value]=\"room.roomname\">\r\n                          {{room.roomname}}\r\n                        </option>\r\n                      </select>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" *ngIf=\"currentSectionName!=null\">\r\n      <h2 >{{currentSectionName}}</h2>\r\n</div>\r\n<ul>\r\n    <li *ngFor=\"let section of sections\">\r\n        <section [content]=\"section\" (sectionPosition)=\"sectionPosition($event)\"></section>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<h2>{{content.name}}</h2>\r\n<mat-divider></mat-divider>\r\n<!-- <img src=\"{{content.img}}\"/> -->\r\n<div class=\"message-pane subheaderdemoBasicUsage\" layout=\"column\" flex=\"\" layout-fill=\"\" ng-cloak=\"\" class=\"\">\r\n<mat-list layout-padding=\"\">\r\n    <mat-list-item *ngFor=\"let message of content.messages\">\r\n        <mat-icon matListIcon>folder</mat-icon>\r\n        <h4 matLine>{{message.name}}</h4>\r\n        <p matLine class=\"demo-2\"> {{message.updated}} </p>\r\n    </mat-list-item>\r\n</mat-list>\r\n</div>"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ })

},[688]);
//# sourceMappingURL=main.bundle.js.map