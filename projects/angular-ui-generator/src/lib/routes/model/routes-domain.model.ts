import { Generator } from '../../generator';

export interface RoutesDomainModel {
  name: string;
  target: typeof Generator;
  children: RoutesDomainModel[];
}
