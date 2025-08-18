import { Generator } from '../../../generator';

export interface RegisterViewArgModel {
  name: string;
  children?: (typeof Generator)[];
}
