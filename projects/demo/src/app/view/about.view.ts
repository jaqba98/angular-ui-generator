import { Component } from '@angular/core';
import {
  AugComponentMetadataType,
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
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
  override generate(): AugComponentMetadataType[] {
    throw new Error('Method not implemented.');
  }
}
