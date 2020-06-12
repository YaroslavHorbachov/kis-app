import { Component, OnInit } from '@angular/core';
import { AuthFacade } from '../auth/store/facades';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  constructor(private readonly authFacade: AuthFacade) {}

  ngOnInit() {}

  public onLogOut() {
    this.authFacade.logOut();
  }
}
