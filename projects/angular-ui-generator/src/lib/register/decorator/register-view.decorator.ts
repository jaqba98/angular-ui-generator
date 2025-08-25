import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDtoStore } from '../store/register-view-dto.store';
import { AugViewGeneratorType } from '../../generator';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: AugViewGeneratorType) => {
    registerViewDtoStore.push({ arg, target });
  };
};
