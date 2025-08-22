import { RegisterRouteArgModel } from '../arg/register-route-arg.model';
import { AugGenerator } from '../../../generator';

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: typeof AugGenerator;
}
