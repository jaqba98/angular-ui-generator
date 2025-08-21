import { Routes } from '@angular/router';
import { AugViewGenerator } from '../../generator';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { angularRoutesBuilder } from '../builder/angular-routes.builder';

export const augRoutes = (views: (typeof AugViewGenerator)[]): Routes => {
  const routesDomains = routesDomainBuilder(views);
  const a = angularRoutesBuilder(routesDomains);
  console.log(a);
  return a;
};
