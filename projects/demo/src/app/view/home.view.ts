import { Component } from '@angular/core';
import {
  AugRegisterView,
  AugViewGenerator,
  UiElement,
  BlockBuilder,
  ButtonBuilder,
  ParagraphBuilder,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-home-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [AugViewGenerator],
})
@AugRegisterView({
  name: 'home',
  children: [],
})
export class HomeView {
  uiElements: UiElement[] = [
    BlockBuilder.build([
      ButtonBuilder.build('Hello1'),
      ButtonBuilder.build('Hello2'),
      BlockBuilder.build([
        ButtonBuilder.build('Hello3'),
        ButtonBuilder.build('Hello4'),
        ParagraphBuilder.build('Hello World 2222'),
      ]),
      ButtonBuilder.build('Hello5'),
      ButtonBuilder.build('Hello6'),
    ]),
    ParagraphBuilder.build('Hello World'),
  ];
}
