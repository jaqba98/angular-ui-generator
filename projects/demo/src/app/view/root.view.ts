import { Component } from '@angular/core';
import {
  AugGenerator,
  AugRegisterRoute,
  AugRegisterView,
  AugUiElement,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-root-view',
  template: '',
})
@AugRegisterView({
  name: 'root',
  children: [],
})
@AugRegisterRoute({
  path: '',
  redirectTo: 'home',
})
export class RootView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [];
  }
}
