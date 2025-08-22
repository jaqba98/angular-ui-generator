import { AugGenerator } from '../../../generator';

export interface RegisterViewArgModel {
  name: string;
  children: (typeof AugGenerator)[];
}
