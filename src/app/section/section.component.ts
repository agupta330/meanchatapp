import { Component, OnInit, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'section',
  // templateUrl: './section.component.html',
  // styleUrls: ['./section.component.css']

  templateUrl: './riot.component.html',
  styleUrls: ['./theme.css','./bundle.css']

})
export class SectionComponent implements OnInit {

  @Output() sectionPosition = new EventEmitter();
  @Input() content: any;
  value:string='false';
  constructor(private element: ElementRef, private chatService: ChatService) { }

  ngOnInit() {
    this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
  }

  showMenu(){
    this.value = 'true';
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
  }
  copyTextToClipboard(text) {
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
    } catch (err) {
      console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
  }
}