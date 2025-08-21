import { RegisterRouteDtoModel, RegisterViewDtoModel } from '../../register';

export interface RoutesDomainModel {
  route: RegisterRouteDtoModel;
  view: RegisterViewDtoModel;
  children: RoutesDomainModel[];
}
