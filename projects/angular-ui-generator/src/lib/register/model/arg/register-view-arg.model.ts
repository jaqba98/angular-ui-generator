import { Generator } from '../../../generator';
import { Route } from '@angular/router';

export interface RegisterViewArgModel extends Pick<Route, 'title'> {
  name: string;
  children?: (typeof Generator)[];
}
