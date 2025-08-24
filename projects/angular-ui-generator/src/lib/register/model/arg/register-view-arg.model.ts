import { AugViewGenerator } from '../../../generator/api/aug-view-generator';

export interface RegisterViewArgModel {
  name: string;
  children: (typeof AugViewGenerator)[];
}
