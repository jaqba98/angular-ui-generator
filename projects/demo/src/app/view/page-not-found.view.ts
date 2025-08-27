import { Component } from '@angular/core';
import {
    AugRegisterView,
    AugRegisterRoute,
    AugViewGenerator,
    AugViewMetadata,
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
  title: 'Page Not Found',
})
export class PageNotFoundView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'paragraph',
        text: 'This is page not found page',
      },
    ];
  }
}
