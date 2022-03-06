/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { OneSignal, OSNotification } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  public messages: any[] = [{
    title: 'New Message',
    body: 'You have a new message.',
    date: new Date()
  }];

  public initialSettings() {
    // OneSignal App Id and Firebase App Id.
    this.oneSignal.startInit('9e8fc041-44d8-4635-8762-466abfe5fa5a', '473886440617');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((notification) => {
      console.log('Notification received: ', notification);
      this.handdleNotification(notification);
    });

    this.oneSignal.handleNotificationOpened().subscribe((notification) => {
      // do something when a notification is opened
      console.log('Notification opened: ', notification);
    });

    this.oneSignal.endInit();
  }

  private handdleNotification(notification: OSNotification) {
    const { payload } = notification;
    const existNotification = this.messages.find((m) => m.notificationID === payload.notificationID);
    if (existNotification) {
      return;
    }
    this.messages.unshift(payload);
  }

  constructor(private oneSignal: OneSignal) { }
}
