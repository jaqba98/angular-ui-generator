import { Generator } from '../../generator';
import { Route } from '@angular/router';

export interface RoutesDomainModel extends Pick<Route, 'title'> {
  name: string;
  target: typeof Generator;
  children: RoutesDomainModel[];
}
