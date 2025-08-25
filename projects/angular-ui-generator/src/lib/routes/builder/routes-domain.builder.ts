import { RoutesDomainModel } from '../model/routes-domain.model';
import { registerRouteDtoStore, registerViewDtoStore } from '../../register';
import { ViewGeneratorType } from '../../generator';

export const routesDomainBuilder = (
  views: ViewGeneratorType[],
): RoutesDomainModel[] => {
  return views.map((view) => {
    const registerRoute = registerRouteDtoStore.find(
      (dto) => dto.target === view,
    );
    const registerView = registerViewDtoStore.find(
      (dto) => dto.target === view,
    );
    if (!registerRoute) {
      throw new Error('Failed to find the route for given view');
    }
    if (!registerView) {
      throw new Error('Failed to find the route for given view');
    }
    const domain: RoutesDomainModel = {
      route: registerRoute,
      view: registerView,
      children: [],
    };
    registerView.arg.children.forEach((child) => {
      domain.children = [...domain.children, ...routesDomainBuilder([child])];
    });
    return domain;
  });
};
