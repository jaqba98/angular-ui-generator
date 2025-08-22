import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugGenerator,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-page-not-found-view',
  template: '<p>page-not-found works!</p>',
})
@AugRegisterView({
  name: 'page-not-found',
  children: [],
})
@AugRegisterRoute({
  path: '**',
  title: 'Page not found',
})
export class PageNotFoundView extends AugGenerator {}
