import { RoutesDomainModel } from '../model/routes-domain.model';
import { registerViewDtoStore } from '../../register';
import { Generator } from '../../generator';

export const routesDomainBuilder = (
  view: typeof Generator,
): RoutesDomainModel => {
  const viewDto = registerViewDtoStore.find(
    (viewDto) => viewDto.target === view,
  );
  if (!viewDto) {
    throw new Error('Failed to find the dto view');
  }
  const domain: RoutesDomainModel = {
    name: viewDto.name,
    target: viewDto.target,
    children: [],
    title: viewDto.title,
  };
  if (viewDto.children) {
    viewDto.children.forEach((dto) =>
      domain.children.push(routesDomainBuilder(dto)),
    );
  }
  return domain;
};
