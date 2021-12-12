import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: '예약 등록', url: '/register', icon: 'person' },
    { title: '예약', url: '/login', icon: 'enter' },
    { title: '예약확인', url: '/profile', icon: 'body' },
    { title: '지도 검색', url: '/dashboard', icon: 'map'}
  ];
  constructor() {}
}
