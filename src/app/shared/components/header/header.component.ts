import { Component, Input } from '@angular/core';
import { RouteManager } from '../../services';
import { AuthFacade } from 'src/app/auth/store/facades';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly routeManager: RouteManager, private readonly authFacade: AuthFacade) {}

  @Input() public readonly title: string;

  public readonly isSignIn$ = this.authFacade.isSignIn$;

  public onProfileClick() {
    this.routeManager.navigateToProfile();
  }
}
