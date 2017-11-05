import { Component, OnInit, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import * as io from "socket.io-client";


@Component({
    selector: 'msg-app',
    templateUrl: './messagecontainer.component.html',
    styleUrls: ['./messagecontainer.component.css']

})
export class MessageContainerComponent {
    @Input() cdMsg: string;
    @Output() cdMsgChange = new EventEmitter<string>();
    @Input() joinnedMsg: boolean;
    @Output() joinnedMsgChange = new EventEmitter<boolean>();
    socket = io.connect();

    update(val: string) {
        this.cdMsg = val;
        this.cdMsgChange.emit(this.cdMsg);
    }

    logout() {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("user"));
        this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        localStorage.removeItem("user");
        this.joinnedMsg = false;
        this.joinnedMsgChange.emit(this.joinnedMsg);        
    }
}   