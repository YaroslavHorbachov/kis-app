import { Component, OnInit } from '@angular/core';

import { RouteManager } from '../shared/services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(private readonly routeManager: RouteManager, private readonly navController: NavController) {}

  ngOnInit() {}

  public navigateToSettings() {
    this.routeManager.navigateToProfileSettings();
  }
}
