# Angular-UI-Generator: Register Functionality

The **register functionality** in `angular-ui-generator` allows you to declare and organize views and routes in your Angular application.  
This is achieved through two decorators:

- `@AugRegisterRoute()` → Registers a component as a routable page.
- `@AugRegisterView()` → Registers a component as a logical view with child components.

These decorators simplify the integration of UI elements and routing without requiring manual setup in Angular modules.

---

## Decorators

### `@AugRegisterRoute(arg: RegisterRouteArgModel)`

Registers a component as a routable page.

**Parameters (RegisterRouteArgModel):**

- `path?: string` — Defines the route path (e.g., `"example"`).
- `redirectTo?: string` — Redirects to another path if set.
- `title?: string` — Page title for the route.

---

### `@AugRegisterView(arg: RegisterViewArgModel)`

Registers a component as a view with child components.

**Parameters (RegisterViewArgModel):**

- `name: string` — Unique name for the view.
- `children: (typeof AugGenerator)[]` — Child components extending `AugGenerator`.

---

## Interfaces & Models

### `RegisterRouteArgModel`

Defines the properties used when registering a route.

```ts
export interface RegisterRouteArgModel {
  path?: string;
  redirectTo?: string;
  title?: string;
}
```

### `RegisterViewArgModel`

Defines the properties used when registering a view.

```ts
export interface RegisterViewArgModel {
  name: string;
  children: (typeof AugGenerator)[];
}
```

---

## Example: Registering a Simple View with a Route

```ts
import { Component } from "@angular/core";
import { AugGenerator, AugUiElement, AugParagraphBuilder } from "angular-ui-generator";
import { AugRegisterRoute, AugRegisterView } from "angular-ui-generator/register";

@Component({
  selector: "example-view",
  template: "",
})
@AugRegisterView({
  name: "example",
  children: [],
})
@AugRegisterRoute({
  path: "example",
  title: "Example",
})
export class ExampleView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [AugParagraphBuilder.build("This is an example view.")];
  }
}
```

---

## Example: Registering a View with Child Components

```ts
import { Component } from "@angular/core";
import { AugGenerator, AugUiElement, AugParagraphBuilder } from "angular-ui-generator";
import { AugRegisterRoute, AugRegisterView } from "angular-ui-generator/register";

@Component({
  selector: "child-view",
  template: "",
})
@AugRegisterView({
  name: "child",
  children: [],
})
@AugRegisterRoute({
  path: "child",
  title: "Child Page",
})
export class ChildView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [AugParagraphBuilder.build("Child View Content")];
  }
}

@Component({
  selector: "parent-view",
  template: "",
})
@AugRegisterView({
  name: "parent",
  children: [ChildView],
})
@AugRegisterRoute({
  path: "parent",
  title: "Parent Page",
})
export class ParentView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [AugParagraphBuilder.build("Parent View with Child")];
  }
}
```

In this setup:

- `ParentView` is registered as a route at `/parent`.
- `ChildView` is a child of `ParentView` and has its own route `/child`.

---

## Notes & Tips

- Always extend your components from `AugGenerator` to use these decorators.
- Use `@AugRegisterView` when grouping views together, even if no child views exist yet.
- Use `@AugRegisterRoute` to ensure Angular routing picks up your registered view.
- Combine both decorators on the same component for a view that also needs routing.

---
