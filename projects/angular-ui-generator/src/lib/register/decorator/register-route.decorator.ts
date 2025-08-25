import { RegisterRouteArgModel } from '../model/arg/register-route-arg.model';
import { registerRouteDtoStore } from '../store/register-route-dto.store';
import { ViewGeneratorType } from '../../generator';

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: ViewGeneratorType) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
