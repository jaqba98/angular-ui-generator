import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { registerRouteDtoStore } from '../store/register-route-dto.store';
import { AugViewGeneratorType } from '../../generator';

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: AugViewGeneratorType) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
