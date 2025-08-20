import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { registerRouteDecorator } from '../decorator/register-route.decorator';

export const AugRegisterRoute = (arg: RegisterRouteArgModel) => {
  return registerRouteDecorator(arg);
};
