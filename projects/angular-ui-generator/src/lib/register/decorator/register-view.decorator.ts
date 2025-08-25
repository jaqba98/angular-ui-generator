import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDtoStore } from '../store/register-view-dto.store';
import { ViewGeneratorType } from '../../generator';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: ViewGeneratorType) => {
    registerViewDtoStore.push({ arg, target });
  };
};
