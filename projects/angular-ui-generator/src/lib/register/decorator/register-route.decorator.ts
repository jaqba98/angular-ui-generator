import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { AugViewGenerator } from '../../generator';
import { registerRouteDtoStore } from '../store/register-route-dto.store';

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: typeof AugViewGenerator) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
