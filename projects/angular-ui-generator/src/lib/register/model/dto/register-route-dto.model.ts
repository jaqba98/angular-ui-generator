import { RegisterRouteArgModel } from '../arg/register-route-arg.model';
import { ViewGeneratorType } from '../../../generator';

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: ViewGeneratorType;
}
