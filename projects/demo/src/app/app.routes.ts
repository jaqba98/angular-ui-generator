import { Routes } from '@angular/router';

import { augRoutes } from '../../../angular-ui-generator/src/public-api';
import { RootView } from './view/root.view';
import { HomeView } from './view/home.view';
import { AboutView } from './view/about.view';
import { PageNotFoundView } from './view/page-not-found.view';

export const routes: Routes = augRoutes([
  RootView,
  HomeView,
  AboutView,
  PageNotFoundView,
]);
