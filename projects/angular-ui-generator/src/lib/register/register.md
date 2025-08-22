# Angular-Focused Documentation Prompt Template (per functionality)

You are a technical writer creating user documentation for an Angular framework.  
Generate clear, user-focused documentation in **Markdown**.  
Focus only on **how the user will use the given functionality in Angular projects with TypeScript**.  
Do **NOT** explain internal implementation. Provide **working Angular examples** (components, services, modules).

---

## Prompt Template

Inputs:

- Framework Name: angular-ui-generator
- Type of Functionality: register
- Full Code Implementation (TypeScript / Angular):

```
export const AugRegisterRoute = (arg: RegisterRouteArgModel) => {
  return registerRouteDecorator(arg);
};
export const AugRegisterView = (arg: RegisterViewArgModel) => {
  return registerViewDecorator(arg);
};

export const registerRouteDecorator = (arg: RegisterRouteArgModel) => {
  return (target: typeof AugGenerator) => {
    registerRouteDtoStore.push({ arg, target });
  };
};
export const registerViewDecorator = (arg: RegisterViewArgModel) => {
  return (target: typeof AugGenerator) => {
    registerViewDtoStore.push({ arg, target });
  };
};

export interface RegisterRouteArgModel {
  path?: string;
  redirectTo?: string;
  title?: string;
}
export interface RegisterViewArgModel {
  name: string;
  children: (typeof AugGenerator)[];
}

export interface RegisterRouteDtoModel {
  arg: RegisterRouteArgModel;
  target: typeof AugGenerator;
}
export interface RegisterViewDtoModel {
  arg: RegisterViewArgModel;
  target: typeof AugGenerator;
}

export const registerRouteDtoStore: RegisterRouteDtoModel[] = [];
export const registerViewDtoStore: RegisterViewDtoModel[] = [];
```

- Description: {description}
- Example Usage:

```
@Component({
  selector: 'example-view',
  template: '',
})
@AugRegisterView({
  name: 'example',
  children: [],
})
@AugRegisterRoute({
  path: 'example',
  title: 'Example',
})
export class ExampleView extends AugGenerator {
  override getUiElements(): AugUiElement[] {
    return [
      AugParagraphBuilder.build('Example')
    ];
  }
}
```

- Notes/Tips: {notes}

---

### Requirements

1. Extract all classes, services, interfaces, and models related to the **given functionality** from the full code.
2. For each class/service:
   - Provide a brief, user-focused description
   - List constructor parameters (if any)
   - List public methods with parameters, return types, and usage explanations
3. Include a **Models / Interfaces** section if any custom types are used.
4. Include **working Angular+TypeScript examples** that demonstrate the functionality in a realistic scenario:
   - Show how to import and use the class/service in a component or module
   - Show real method calls
5. Output should be **Markdown**, ready to copy as a `.md` file.
6. Do **NOT** describe internal logic or implementation details.

---

### Output

A ready-to-use Angular-focused Markdown section/file documenting the given functionality for end-users.
