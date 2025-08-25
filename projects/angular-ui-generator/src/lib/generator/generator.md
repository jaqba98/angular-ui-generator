## Generator

### AugViewGenerator

To generate a view, you need to extend the `AugViewGenerator` class and implement the `buildViewMetadata` method.
This method should return an array of `AugViewMetadata` objects that define the structure and content of the view.
The `AugViewMetadata[]` defines the metadata structure of the view.

Example:

```typescript
export class HelloWorldView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: "text",
        text: "Hello World",
      },
    ];
  }
}
```

### AugViewMetadata

Below there are all the possible metadata objects that you can use to define the structure of your view.
