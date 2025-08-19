import { RoutesDomainModel } from '../model/routes-domain.model';
import { Route, Routes } from '@angular/router';

export const routesBuilder = (routesDomains: RoutesDomainModel[]): Routes => {
  const routes = routesDomains.map((routesDomain) => {
    const route: Route = {
      component: routesDomain.target,
      children: [],
      title: routesDomain.route.title,
      path: routesDomain.route.path,
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
  const wildcard = routes.find((route) => route.path === '**');
  const routesWithoutWildcard = routes.filter((route) => route.path !== '**');
  return [...routesWithoutWildcard, wildcard].filter(
    (route) => route !== undefined,
  );
};
