import { RoutesDomainModel } from '../model/routes-domain.model';
import { registerViewDtoStore } from '../../register';

// todo: Change the any type to the correct type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const routesDomainBuilder = (views: any[]): RoutesDomainModel[] => {
  return views.map((view) => {
    const viewDto = registerViewDtoStore.find((dto) => dto.target === view);
    if (!viewDto) {
      throw new Error('Failed to find the dto view');
    }
    const domain: RoutesDomainModel = {
      ...viewDto,
      children: [],
    };
    if (viewDto.children && viewDto.children.length > 0) {
      viewDto.children.forEach((child) => {
        domain.children.push(routesDomainBuilder(child));
      });
    }
    return domain;
  });
};
