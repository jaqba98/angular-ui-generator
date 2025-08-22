import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { AugGenerator } from '../../generator';
import { registerViewDtoStore } from '../store/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof AugGenerator) => {
    registerViewDtoStore.push({ arg, target });
  };
};
