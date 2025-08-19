import { Routes } from '@angular/router';
import { routesDomainBuilder } from '../builder/routes-domain.builder';
import { routesBuilder } from '../builder/routes.builder';

// todo: Change the any type to the correct type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const augRoutes = (views: any[]): Routes => {
  const routesDomains = routesDomainBuilder(views);
  return routesBuilder(routesDomains);
};
