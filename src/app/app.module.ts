import { RoomaddComponent } from './chat/roomadd.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DialogService } from 'ng2-bootstrap-modal';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CommonModule } from '@angular/common';


const ROUTES = [
  { path: '', redirectTo: 'chats', pathMatch: 'full' },
  { path: 'chats', component: ChatComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BootstrapModalModule,
    CommonModule
  ],
  providers: [
    ChatService,
    DialogService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RoomaddComponent
  ]
})
export class AppModule { }
