import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // the object must be declared PUBLIC to be binded in the template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
