import { Component } from '@angular/core';
import {
  AugRegisterView,
  BlockBuilder,
  ButtonBuilder,
  AugViewGenerator,
  UiElement,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-about-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [AugViewGenerator],
})
@AugRegisterView({
  name: 'about',
  children: [],
  route: {
    path: 'about',
    title: 'About',
  },
})
export class AboutView {
  uiElements: UiElement[] = [
    BlockBuilder.build([
      ButtonBuilder.build('About1'),
      ButtonBuilder.build('About2'),
    ]),
  ];
}
