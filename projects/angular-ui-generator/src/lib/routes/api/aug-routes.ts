import { Routes } from '@angular/router';
import { AugGenerator } from '../../generator';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { angularRoutesBuilder } from '../builder/angular-routes.builder';

export const augRoutes = (views: (typeof AugGenerator)[]): Routes => {
  const routesDomains = routesDomainBuilder(views);
  const a = angularRoutesBuilder(routesDomains);
  console.log(a);
  return a;
};
