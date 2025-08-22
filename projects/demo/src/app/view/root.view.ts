import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugGenerator,
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
export class RootView extends AugGenerator {}
