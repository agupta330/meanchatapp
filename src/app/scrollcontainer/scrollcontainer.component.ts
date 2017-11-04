import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { DialogService } from "ng2-bootstrap-modal";
import * as io from "socket.io-client";
import { RoomaddComponent } from './roomadd.component'
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-chat',
  // templateUrl: './scrollcontainer.component.html',
  // styleUrls: ['./scrollcontainer.component.css']
  template: `<container [sections]="sections"></container>`
})
export class ScrollcontainerComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public sections = [
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
  chats: any;
  rooms: any;
  joinned: boolean = false;
  newUser = { nickname: '', room: '' };
  msgData = { room: '', nickname: '', message: '' };
  socket = io.connect();

  constructor(private chatService: ChatService, private dialogService: DialogService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.getRooms();
    if (user !== null) {
      this.getChatByRoom(user.room);
      this.msgData = { room: user.room, nickname: user.nickname, message: '' }
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
          this.msgData = { room: roomObj.room, nickname: roomObj.nickname, message: '' }
          this.scrollToBottom();
        }
      }

    }.bind(this));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).then((res) => {
      this.chats = res;
    }, (err) => {
      this.chats = [];
      console.log(err);
    });
  }

  joinRoom() {
    var date = new Date();
    localStorage.setItem("user", JSON.stringify(this.newUser));
    this.getChatByRoom(this.newUser.room);
    this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
    this.joinned = true;
    this.socket.emit('save-message', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room', updated_at: date });
  }

  getRooms() {
    this.chatService.getRooms().then((res) => {
      this.rooms = res;
      console.log(this.rooms);
    }, (err) => {
      this.rooms = [];
      console.log(err);
    });
  }



  sendMessage() {
    this.chatService.saveChat(this.msgData).then((result) => {
      this.socket.emit('save-message', result);
    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("user"));
    this.socket.emit('save-message', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
    localStorage.removeItem("user");
    this.joinned = false;
  }

  showAddRoomDialog() {
    var body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
    this.dialogService.addDialog(RoomaddComponent, {
      title: 'Add Room'
    })
      .subscribe((tosendRoom: any) => {
        //We get dialog result
        var body = document.getElementsByTagName("body")[0];
        body.style.overflow = "";
        if (tosendRoom) {
          console.log(tosendRoom);
          this.chatService.createRoom(tosendRoom).then((result) => {
            console.log("New Room has been saved");
            this.getRooms();
          }, (err) => {
            console.log(err);
          });
        }

      });
  }


  notes = [
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
