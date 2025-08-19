import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDtoStore } from '../store/register-view-dto.store';

export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  // todo: set better type for target instead of any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (target: any) => {
    registerViewDtoStore.push({ ...arg, target });
  };
};
