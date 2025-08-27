import { Component } from '@angular/core';
import {
  AugRegisterView,
  AugRegisterRoute,
  AugViewGenerator,
  AugViewMetadata,
} from '../../../../angular-ui-generator/src/public-api';

@Component({
  selector: 'app-about-view',
  template: '',
})
@AugRegisterView({
  name: 'about',
  children: [],
})
@AugRegisterRoute({
  path: 'about',
  title: 'About',
})
export class AboutView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'paragraph',
        text: 'This is about page',
      },
    ];
  }
}
