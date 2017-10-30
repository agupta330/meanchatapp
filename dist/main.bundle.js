webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
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

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
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

/***/ 288:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 288;


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(324);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        template: __webpack_require__(401),
        styles: [__webpack_require__(391)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_roomadd_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chat_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__(304);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ROUTES = [
    { path: '', redirectTo: 'chats', pathMatch: 'full' },
    { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_0__chat_roomadd_component__["a" /* RoomaddComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(ROUTES),
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["BootstrapModalModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["f" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["h" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["i" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["k" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["l" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["m" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["n" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["o" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["p" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["q" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["r" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["s" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["t" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["u" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["v" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["w" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["x" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["y" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["z" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["A" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["B" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["C" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["D" /* MatTooltipModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_material__["E" /* MatStepperModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap_modal__["DialogService"],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__chat_roomadd_component__["a" /* RoomaddComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(670);
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
        template: __webpack_require__(402),
        styles: [__webpack_require__(392)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_bootstrap_modal__["DialogService"]) === "function" && _c || Object])
], ChatComponent);

var _a, _b, _c;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 324:
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

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(74)();
// imports


// module
exports.push([module.i, "/* .chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n} */\r\n\r\nbody {\r\n  padding: 0;\r\n}\r\n\r\n.page-wrapper {\r\n  max-width: 550px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n  padding: 15px;\r\n}\r\n\r\n.page-wrapper .logo-img {\r\n  margin-top: -10px;\r\n}\r\n\r\n.main {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.sidebar {\r\n  display: inline-block;\r\n  width: 19.5%;\r\n  vertical-align: top;\r\n  height: 100%;\r\n  background: #4d394b;\r\n  position: relative;\r\n  overflow-y: scroll;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.sidebaropposite {\r\n  display: inline-block;\r\n  width: 75%;\r\n  vertical-align: top;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.sidebar .slack-name {\r\n  background: #3E313C;\r\n  padding: 15px 0px 15px 15px;\r\n}\r\n\r\n.sidebar .slack-name h2 {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.sidebar .channel-list {\r\n  margin-top: 20px;\r\n  background: #4d394b;\r\n  position: relative;\r\n}\r\n\r\n.sidebar .channel-list .channel a {\r\n  display: block;\r\n  color: rgba(255, 255, 255, 0.6);\r\n  padding: 3px 0px 3px 15px;\r\n  width: 90%;\r\n  font-weight: 300;\r\n  -webkit-border-top-right-radius: 4px;\r\n  -webkit-border-bottom-right-radius: 4px;\r\n  -moz-border-radius-topright: 4px;\r\n  -moz-border-radius-bottomright: 4px;\r\n  border-top-right-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.sidebar .channel-list .channel a:hover {\r\n  text-decoration: none;\r\n  background: #3E313C;\r\n}\r\n\r\n.sidebar .channel-list .channel a.selected {\r\n  background: #4c9689;\r\n  color: #fff;\r\n  text-decoration: none !important;\r\n}\r\n\r\n.sidebar .channel-list .channel.create {\r\n  font-style: italic;\r\n}\r\n\r\n.sidebar .channel-list .list-head {\r\n  margin-top: 10px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  margin-left: 10px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.sidebar .my-info {\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding: 15px;\r\n  background: #3E313C;\r\n  width: 19.5%;\r\n}\r\n\r\n.sidebar .my-info .user-pic {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.sidebar .my-info .user-info {\r\n  padding-left: 5px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.sidebar .my-info .user-info .user-name {\r\n  color: #fff;\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n\r\n.sidebar .my-info .user-info .options {\r\n  color: #999;\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar .my-info .user-info .options a {\r\n  color: #999;\r\n  font-size: 12px;\r\n}\r\n\r\n.sidebar .presence {\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background: #ab9ba9;\r\n  vertical-align: middle;\r\n}\r\n\r\n.sidebar .presence.online {\r\n  background: #99d04a;\r\n}\r\n\r\n.message-pane {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  height: 100%;\r\n  width: 79%;\r\n  overflow-y: scroll;\r\n  padding: 55px 15px 65px 15px;\r\n}\r\n\r\n.message-pane .header {\r\n  position: fixed;\r\n  top: 0;\r\n  background: #fff;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.message-pane .header h1 {\r\n  padding: 12px 0 10px 0;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  font-size: 24px;\r\n  color: #555459;\r\n  font-weight: 900;\r\n}\r\n\r\n.message-pane .message-form {\r\n  position: fixed;\r\n  bottom: 0;\r\n  padding: 0 15px 15px 0;\r\n  background: #fff;\r\n  width: 79%;\r\n}\r\n\r\n.message-pane .message-wrap {\r\n  position: relative;\r\n  margin-top: 15px;\r\n}\r\n\r\n.message-pane .message-wrap .user-pic {\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n.message-pane .message-wrap .message-info {\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  padding-left: 5px;\r\n}\r\n\r\n.message-pane .message-wrap .message-info .user-name {\r\n  color: #555459;\r\n  font-weight: 900;\r\n}\r\n\r\n.message-pane .message-wrap .message-info .user-name span {\r\n  color: #ccc;\r\n  font-weight: normal;\r\n  font-size: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 402:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n    <div class=\"sidebar\">\r\n\r\n        <div class=\"slack-name\">\r\n            <h2>FireSlack</h2>\r\n        </div>\r\n\r\n        <div class=\"channel-list\">\r\n            <div class=\"list-head\">Channels</div>\r\n            <div class=\"channel\">\r\n                <a href=\"#a\" href-active=\"selected\"># A</a>\r\n                <a href=\"#b\" href-active=\"selected\"># B</a>\r\n                <a href=\"#c\" href-active=\"selected\"># C</a>\r\n            </div>\r\n\r\n            <div class=\"channel create\">\r\n                <a href=\"#create\">+ Create Channel</a>\r\n            </div>\r\n\r\n            <!-- <div class=\"list-head\">Direct Messages</div>\r\n      <div class=\"channel\" ng-repeat=\"user in channelsCtrl.users\">\r\n        <a ng-if=\"user.$id !== channelsCtrl.profile.$id\" href=\"channels.direct({uid: user.$id})\" href-active=\"selected\">\r\n          <span class=\"presence\" ng-class=\"{online: user.online}\"></span> {{ user.displayName }}\r\n        </a>\r\n      </div> -->\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"message-pane\">\r\n        <!-- <ui-view></ui-view> -->\r\n        <mat-list>\r\n            <h3 mat-subheader>Folders</h3>\r\n            <mat-list-item *ngFor=\"let folder of folders\">\r\n                <mat-icon mat-list-icon>folder</mat-icon>\r\n                <h4 mat-line>{{folder.name}}</h4>\r\n                <p mat-line> {{folder.updated | date}} </p>\r\n            </mat-list-item>\r\n            <mat-divider></mat-divider>\r\n            <h3 mat-subheader>Notes</h3>\r\n            <mat-list-item *ngFor=\"let note of notes\">\r\n                <mat-icon mat-list-icon>note</mat-icon>\r\n                <h4 mat-line>{{note.name}}</h4>\r\n                <p mat-line> {{note.updated | date}} </p>\r\n            </mat-list-item>\r\n        </mat-list>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(289);


/***/ })

},[679]);
//# sourceMappingURL=main.bundle.js.map