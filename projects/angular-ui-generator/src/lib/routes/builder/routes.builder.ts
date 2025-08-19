import { RoutesDomainModel } from '../model/routes-domain.model';
import { Route, Routes } from '@angular/router';

export const routesBuilder = (routesDomains: RoutesDomainModel[]): Routes => {
  const routes = routesDomains.map((routesDomain) => {
    const route: Route = {
      component: routesDomain.route.redirectTo
        ? undefined
        : routesDomain.target,
      ...routesDomain.route,
    };
    routesDomain.children.forEach((child) => {
      if (route.children) {
        route.children = [...route.children, ...routesBuilder(child)];
      } else {
        route.children = [...routesBuilder(child)];
      }
    });
    return route;
  });
  const empty = routes.find((route) => route.path === '');
  const wildcard = routes.find((route) => route.path === '**');
  const cleanRoutes = routes
    .filter((routes) => routes.path !== '')
    .filter((route) => route.path !== '**');
  const result = [empty, ...cleanRoutes, wildcard].filter(
    (route) => route !== undefined,
  );
  console.log(result);
  return result;
};
