import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugGenerator,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-home-view',
  template: '<p>home works!</p>',
})
@AugRegisterView({
  name: 'home',
  children: [],
})
@AugRegisterRoute({
  path: 'home',
  title: 'Home',
})
export class HomeView extends AugGenerator {}
