import { RegisterViewArgModel } from '../arg/register-view-arg.model';
import { Generator } from '../../../generator';

export interface RegisterViewDtoModel extends RegisterViewArgModel {
  target: typeof Generator;
}
