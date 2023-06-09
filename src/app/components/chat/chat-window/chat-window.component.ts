import { Component, ChangeDetectionStrategy, EventEmitter, Input,Output} from '@angular/core';
import { IMessage, IUser } from 'src/assets/interfaces/shared.interface';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWindowComponent {

  constructor() {}
  @Input() messages: IMessage[];
  @Input() selectedUser: IUser;
  @Output() onMessage = new EventEmitter<string>();

  public handleMessage(message: string) {
    this.onMessage.emit(message);
  }

}
