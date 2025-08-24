import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { registerRouteDtoStore } from '../store/register-route-dto.store';
import { AugViewGenerator } from '../../generator/api/aug-view-generator';

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: typeof AugViewGenerator) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
