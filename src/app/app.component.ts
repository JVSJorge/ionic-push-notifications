/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { PushNotificationService } from './services/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  initializeApp() {
    this.pushNotificationService.initialSettings();
  }

  constructor(private pushNotificationService: PushNotificationService) {
    this.initializeApp();
  }
}
