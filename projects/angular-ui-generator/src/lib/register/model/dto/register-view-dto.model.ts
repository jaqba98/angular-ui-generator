import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { AugViewGenerator } from '../../../generator/api/aug-view-generator';

export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: typeof AugViewGenerator;
}
