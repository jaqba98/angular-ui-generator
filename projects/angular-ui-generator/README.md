# Angular UI AugViewGenerator

`angular-ui-generator` is a powerful Angular tool designed to simplify the process of building UI elements dynamically within your Angular applications. This documentation provides a comprehensive guide on how to set up, use, and configure the tool.

---

## Table of Contents

1. [Installation](#installation)
2. [Creating a Standard Angular Project](#creating-a-standard-angular-project)
3. [Setting Up Angular UI AugViewGenerator](#setting-up-angular-ui-generator)
4. [Defining Views](#defining-views)
5. [Available UI Components](#available-ui-components)
6. [App Configuration](#app-configuration)
7. [Example](#example)

---

## Installation

To install the `angular-ui-generator`, run the following command:

```bash
npm install angular-ui-generator
```

---

## Creating a Standard Angular Project

Start by generating a standard Angular project using Angular CLI:

```bash
ng new my-app
cd my-app
```

---

## Setting Up Angular UI AugViewGenerator

Once your Angular project is ready, install the generator:

```bash
npm install angular-ui-generator
```

Now you can start designing your application dynamically using the generator.

---

## Defining Views

Views are the foundation of your application UI. Each view corresponds to a specific route in your Angular application.

### Example View Component

```typescript
import { Component } from "@angular/core";
import { AugRegisterView, AugViewGenerator, UiElement, ButtonBuilder, ParagraphBuilder } from "angular-ui-generator";
import { BViewComponent, CViewComponent } from "./child-views";

@Component({
  selector: "a-view",
  template: "<ng-container #viewGenerator></ng-container>",
})
@AugRegisterView({
  name: "a",
  children: [BViewComponent, CViewComponent],
})
export class AViewComponent extends AugViewGenerator {
  override generate(): UiElement[] {
    return [ButtonBuilder.build("button1"), ParagraphBuilder.build("paragraph1"), ButtonBuilder.build("button2")];
  }
}
```

### Explanation

- **`@Component` decorator**: Required by Angular.
- **`@AugRegisterView` decorator**: Marks the component as a view and defines its route and children.
- **`AugViewGenerator` inheritance**: Required to access the `generate` method.
- **`generate()` method**: Returns an array of UI elements that will be rendered in the view.

---

## Available UI Components

Currently, the following UI components are available for dynamic generation:

- `ButtonBuilder.build(label: string)`
- `ParagraphBuilder.build(label: string)`

---

## App Configuration

To make your views functional, configure your app router in `app.config.ts`:

```typescript
import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { augRoutes } from "angular-ui-generator";
import { AViewComponent } from "./views/a-view.component";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(augRoutes(AViewComponent))],
};
```

### Explanation

- **`provideRouter`**: Angular router provider.
- **`augRoutes`**: Generates all routes dynamically from your root view component.

---

## Example Usage

Imagine an app with a simple homepage and nested child views:

- Root View: `HomeViewComponent`
- Children: `AboutViewComponent`, `ContactViewComponent`

```typescript
@Component({
  selector: "home-view",
  template: "<ng-container #viewGenerator></ng-container>",
})
@AugRegisterView({
  name: "home",
  children: [AboutViewComponent, ContactViewComponent],
})
export class HomeViewComponent extends AugViewGenerator {
  override generate(): UiElement[] {
    return [ButtonBuilder.build("Get Started"), ParagraphBuilder.build("Welcome to our app!")];
  }
}
```

This setup will generate a homepage with a "Get Started" button and a welcome paragraph, while also providing nested routes for the `About` and `Contact` views.

---

With this configuration, your Angular project is ready to dynamically generate UI components using `angular-ui-generator`.
