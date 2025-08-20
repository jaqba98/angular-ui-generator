import { RegisterRouteArgModel } from '../arg/register-route-arg.model';
import { AugViewGenerator } from '../../../generator';

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: AugViewGenerator;
}
