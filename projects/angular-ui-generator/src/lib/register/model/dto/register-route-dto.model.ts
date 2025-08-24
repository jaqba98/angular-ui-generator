import { RegisterRouteArgModel } from '../arg/register-route-arg.model';
import { AugViewGenerator } from '../../../generator/api/aug-view-generator';

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: typeof AugViewGenerator;
}
