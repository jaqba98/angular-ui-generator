import { AugViewGenerator } from '../../../generator';

export interface RegisterViewArgModel {
  name: string;
  children: (typeof AugViewGenerator)[];
}
