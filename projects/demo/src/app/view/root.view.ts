import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
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
export class RootView extends AugViewGenerator {}
