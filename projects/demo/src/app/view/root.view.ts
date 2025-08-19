import { Component } from '@angular/core';
import {
  AugRegisterView,
  Generator,
  UiElement,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-root-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@AugRegisterView({
  name: 'root',
  children: [],
  route: {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
})
export class RootView {
  uiElements: UiElement[] = [];
}
