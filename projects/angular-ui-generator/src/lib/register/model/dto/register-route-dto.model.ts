import { RegisterRouteArgModel } from '../arg/register-route-arg.model';
import { AugViewGeneratorType } from '../../../generator';

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: AugViewGeneratorType;
}
