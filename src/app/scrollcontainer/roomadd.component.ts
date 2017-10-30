import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface RoomaddModel {
  title: string;
  question: string;
}

@Component({
  selector: 'prompt',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <h4 class="modal-title">{{title || 'Prompt'}}</h4>
                     <button type="button" class="close" (click)="close()">&times;</button>
                   </div>
                   <div class="modal-body">

                <form role="form">
                  <div class="form-group">
                    <label for="roomname">Room Name</label>
                      <input type="text" class="form-control"
                      id="roomname"  name="roomname" [(ngModel)]="RoomData.roomname"/>
                  </div>
                  <div class="form-group">
                    <label for="roomdesc">Room Description</label>
                      <input type="text" class="form-control"
                      id="roomdesc" name="roomdesc" [(ngModel)]="RoomData.roomdesc"/>
                  </div>                 
                </form>
                    
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="apply()">OK</button>
                     <button type="button" class="btn btn-default" (click)="closeBox()" >Cancel</button>
                   </div>
                 </div>
                </div>`
})
export class RoomaddComponent extends DialogComponent<RoomaddModel, string> implements RoomaddModel {
  title: string;
  question: string;
  RoomData: any = {};
  constructor(private http: Http, dialogService: DialogService) {
    super(dialogService);
  }
  apply() {
    this.result = this.RoomData;
    this.close();
  }
  closeBox() {
    var body = document.getElementsByTagName("body")[0];
    body.style.overflow = "";
    this.close();
  }
}
