import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-about-view',
  template: '<p>about works!</p>',
})
@AugRegisterView({
  name: 'about',
  children: [],
})
@AugRegisterRoute({
  path: 'about',
  title: 'About',
})
export class AboutView extends AugViewGenerator {}
