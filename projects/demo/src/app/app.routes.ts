import { Routes } from '@angular/router';

import { augRoutes } from '../../../angular-ui-generator/src/public-api';
import { HomeView } from './view/home.view';
import { AboutView } from './view/about.view';

export const routes: Routes = augRoutes([HomeView, AboutView]);
