import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { AugGenerator } from '../../generator';
import { registerRouteDtoStore } from '../store/register-route-dto.store';

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: typeof AugGenerator) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
