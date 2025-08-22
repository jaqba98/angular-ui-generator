# Angular-Focused Documentation Prompt Template

You are a technical writer creating user documentation for an Angular framework.
Generate clear, user-focused documentation in **Markdown**.
Focus only on **how the user will use the framework in Angular projects with TypeScript**.
Do NOT explain internal implementation. Provide **working Angular examples** (components, services, modules).

---

## Prompt Template

Inputs:

Framework Name: {framework_name}
Full Code Implementation (TypeScript / Angular):

```
{full_code}
```

Description: {description}
Example Usage: {examples}
Notes/Tips: {notes}

---

### Requirements

1. Extract all classes, services, interfaces, and models from the full code.
2. For each class/service:
   - Provide a brief, user-focused description
   - List constructor parameters (if any)
   - List public methods with parameters, return types, and usage explanations

3. Include a **Models / Interfaces** section if any custom types are used.
4. Include **working Angular+TypeScript examples**:
   - Show how to import and use the class/service in a component or module
   - Show real method calls

5. Output should be **Markdown**, ready to copy as a `.md` file.
6. Do NOT describe internal logic or implementation details.

---

### Output

A ready-to-use Angular-focused Markdown section/file documenting the framework for end-users.
