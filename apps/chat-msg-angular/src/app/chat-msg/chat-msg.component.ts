import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from './chat-message';

@Component({
  selector: 'groundwork-chat-msg',
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.scss'],
})
export class ChatMsgComponent implements OnInit {
  model = new ChatMessage('');
  message = '';
  messageList: string[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((message: any) => {
      console.log('getmsg: ', message);
      this.messageList.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  getMsg() {
    this.chatService.getMessage().subscribe((message: string) => {
      console.log(message);
      this.messageList.push(message);
    });
  }

  onSubmit() {
    this.sendMessage();
  }
}
