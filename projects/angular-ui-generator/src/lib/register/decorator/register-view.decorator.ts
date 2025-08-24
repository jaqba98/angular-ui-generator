import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDtoStore } from '../store/register-view-dto.store';
import { AugViewGenerator } from '../../generator/api/aug-view-generator';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof AugViewGenerator) => {
    registerViewDtoStore.push({ arg, target });
  };
};
