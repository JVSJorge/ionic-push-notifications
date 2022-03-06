import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from '../services/push-notification.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pushMessages = [];

  public ngOnInit(): void {
    this.pushMessages = this.pushNotification.messages;
  }

  constructor(public pushNotification: PushNotificationService) {}

}
