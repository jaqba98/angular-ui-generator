import { Route } from '@angular/router';

export interface RoutesDomainModel {
  name: string;
  route: Route;
  // todo: create better way to store children for each view
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
  // todo: Set normal target type instead of any
  // eslint-disable-next-line
  target: any;
}
