import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugGenerator,
  AugUiElement,
  AugParagraphBuilder,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-page-not-found-view',
  template: '',
})
@AugRegisterView({
  name: 'page-not-found',
  children: [],
})
@AugRegisterRoute({
  path: '**',
  title: 'Page not found',
})
export class PageNotFoundView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [AugParagraphBuilder.build('page not found view')];
  }
}
