import { RoutesDomainModel } from '../model/routes-domain.model';
import { Route, Routes } from '@angular/router';

export const routesBuilder = (viewDomain: RoutesDomainModel): Routes => {
  const route: Route = {
    path: viewDomain.name,
    // eslint-disable-next-line
    component: viewDomain.target as any,
    children: [],
    title: viewDomain.title,
  };
  viewDomain.children.forEach((child) => {
    if (route.children) {
      route.children = [...route.children, ...routesBuilder(child)];
    } else {
      route.children = [...routesBuilder(child)];
    }
  });
  return [route];
};
