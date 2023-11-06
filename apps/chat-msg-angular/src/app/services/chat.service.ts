import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor(private socket: Socket) {}

  public sendMessage(message: string) {
    this.socket.emit('message ', message);
  }

  getMessage() {
    this.socket.on('message', (message: string) => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  }
}
