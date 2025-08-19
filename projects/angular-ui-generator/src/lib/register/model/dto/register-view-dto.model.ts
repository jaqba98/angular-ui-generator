import { RegisterViewArgModel } from '../arg/register-view-arg.model';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  // todo: Set normal target type instead of any
  // eslint-disable-next-line
  target: any;
}
