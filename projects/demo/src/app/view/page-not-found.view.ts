import { Component } from '@angular/core';
import {
  AugRegisterView,
  Generator,
  ParagraphBuilder,
  UiElement,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-page-not-found-view',
  template: '<aug-generator [uiElements]="uiElements"></aug-generator>',
  imports: [Generator],
})
@AugRegisterView({
  name: 'page-not-found',
  children: [],
  route: {
    path: '**',
    title: 'Page not found',
  },
})
export class PageNotFoundView {
  uiElements: UiElement[] = [ParagraphBuilder.build('Page not found')];
}
