webpackJsonp([1,4],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(120);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(194),
        styles: [__webpack_require__(187)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ROUTES = [
    { path: '', redirectTo: 'chats', pathMatch: 'full' },
    { path: 'chats', component: __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__chat_chat_component__["a" /* ChatComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__chat_service__["a" /* ChatService */],
            { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
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
    function ChatComponent(chatService) {
        this.chatService = chatService;
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__["connect"]();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var user = JSON.parse(localStorage.getItem("user"));
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
                    this.chats.push(data.message);
                    this.msgData = { room: user.room, nickname: user.nickname, message: '' };
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
    return ChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__(195),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__chat_service__["a" /* ChatService */]) === "function" && _b || Object])
], ChatComponent);

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ 120:
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

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)();
// imports


// module
exports.push([module.i, ".chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.panel-body\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <div class=\"panel panel-primary\" *ngIf=\"joinned; else joinroom\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-comment\"></span> {{ msgData.room }}\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout()\">\r\n                            Logout\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div #scrollMe class=\"panel-body\">\r\n                    <ul class=\"chat\">\r\n                        <li *ngFor=\"let c of chats\">\r\n                          <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\r\n                            <span class=\"chat-img pull-left\">\r\n                              <img src=\"http://placehold.it/50/55C1E7/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                            </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                </div>\r\n                                <p>{{ c.message }}</p>\r\n                            </div>\r\n                          </div>\r\n                          <ng-template #rightchat>\r\n                            <div class=\"right clearfix\">\r\n                              <span class=\"chat-img pull-right\">\r\n                                <img src=\"http://placehold.it/50/FA6F57/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                              </span>\r\n                              <div class=\"chat-body clearfix\">\r\n                                  <div class=\"header\">\r\n                                      <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                      <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\r\n                                  </div>\r\n                                  <p>{{ c.message }}</p>\r\n                              </div>\r\n                            </div>\r\n                          </ng-template>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-footer\">\r\n                  <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\r\n                        <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\r\n                        <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" required=\"\" />\r\n                        <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\r\n                                Send</button>\r\n                        </span>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n            </div>\r\n            <ng-template #joinroom>\r\n              <div class=\"panel panel-primary\">\r\n                <div class=\"panel-body\">\r\n                  <h1>Select Chat Room</h1>\r\n                  <form (ngSubmit)=\"joinRoom()\" #joinForm=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" placeholder=\"Nickname\" required=\"\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"newUser.room\" name=\"room\" required=\"\">\r\n                        <option>Select Room</option>\r\n                        <option value=\"Javascript\">Javascript</option>\r\n                        <option value=\"Java\">Java</option>\r\n                        <option value=\"Python\">Python</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Join</button>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=chat.service.js.map

/***/ })

},[252]);
//# sourceMappingURL=main.bundle.js.map