import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugGenerator,
  AugUiElement,
  AugParagraphBuilder,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-home-view',
  template: '',
})
@AugRegisterView({
  name: 'home',
  children: [],
})
@AugRegisterRoute({
  path: 'home',
  title: 'Home',
})
export class HomeView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [AugParagraphBuilder.build('home view')];
  }
}
