import { Route } from '@angular/router';

export interface RegisterViewArgModel {
  name: string;
  route: Route;
  // todo: create better way to store children for each view
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any[];
}
