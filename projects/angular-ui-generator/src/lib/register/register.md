## Register

### AugRegisterRoute

This is a TypeScript decorator that you can use to add additional metadata to the angular components.
This decorator describes how the component should be treated by the `augRouteGenerator()`.

> **WARNING** The component must be decorated with `@Component()` decorator.

Example:

```typescript
@Component({
  selector: "home",
  template: "",
})
@AugRegisterRoute({
  path: "home",
  title: "Home",
})
export class HomeComponent {
  // content
}
```

Possible `AugRegisterRoute` options:

```
{
  path?: string, // The route path for the Angular component.
  redirectTo?: string, // Path to redirect to instead of rendering this component.
  title?: string, // Title for the route, used in navigation or page metadata.
}
```

### AugRegisterView

This is a TypeScript decorator that you can use to add additional metadata to the angular components.
This decorator describes the hierarchy structure of views, and it will be used by the `augRouteGenerator()`.

> **WARNING** The component must be decorated with `@Component()` decorator.

Example:

```typescript
@Component({
  selector: "home",
  template: "",
})
@AugRegisterView({
  name: "home-view",
  children: [],
})
export class HomeComponent {
  // content
}
```

Possible `AugRegisterView` options:

```
{
  name: string, // Name of the view.
  children: AugViewGeneratorType[], // Children of the current view.
}
```
