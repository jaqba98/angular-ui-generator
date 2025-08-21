import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { AugViewGenerator } from '../../generator';
import { registerViewDtoStore } from '../store/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof AugViewGenerator) => {
    registerViewDtoStore.push({ arg, target });
  };
};
