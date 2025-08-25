## Routes

The `augRoutes()` method is used to automatically generate routes for the Angular application.
As a parameter, you can pass an array of root views.

Example:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(augRoutes(HomeView, AboutView))],
};
```
