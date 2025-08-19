import { RegisterViewArgModel } from '../model/arg/register-view-arg.model';
import { registerViewDecorator } from '../decorator/register-view.decorator';

export const RegisterView = (arg: RegisterViewArgModel) => {
  return registerViewDecorator(arg);
};
