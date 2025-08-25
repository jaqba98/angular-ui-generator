import { Routes } from '@angular/router';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { angularRoutesBuilder } from '../builder/angular-routes.builder';
import { ViewGeneratorType } from '../../generator';

export const augRoutes = (views: ViewGeneratorType[]): Routes => {
  const routesDomains = routesDomainBuilder(views);
  return angularRoutesBuilder(routesDomains);
};
