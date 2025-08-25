# Angular UI Generator

## Table of contents

- [Overview](#overview)
- [Generator](#generator)
  - [AugViewGenerator](#augviewgenerator)
  - [AugViewMetadata](#augviewmetadata)
    - [Button](#button)
    - [Block](#block)
    - [Paragraph](#paragraph)

## Overview

This project is an Angular UI generator that helps you create user interfaces quickly and efficiently.
It provides a way to generate a user interface from metadata. Metadata is a JSON-like structure that
describes how to generate a user interface. You do not have to use HTML and CSS anymore to create
a user interface. You can use TypeScript only to create a user interface.

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

> ### Button
>
> #### Metadata object for a button:
>
> ```typescript
> [
>   {
>     kind: "button", // Specifies that the metadata object is a button.
>     label: "Click me!", // The label displayed on the button.
>   },
> ];
> ```

> ### Block
>
> #### Metadata object for a block:
>
> ```typescript
> [
>   {
>     kind: "block", // Specifies that the metadata object is a block.
>     tag: "div", // HTML tag to use when creating a block.
>     children: [], // Array of metadata objects to be nested inside the block.
>   },
> ];
> ```
>
> Possible values for `tag` property:
>
> - `div`
> - `header`
> - `footer`

> ### Paragraph
>
> #### Metadata object for a paragraph:
>
> ```typescript
> [
>   {
>     kind: "paragraph", // Specifies that the metadata object is a paragraph.
>     text: "Hello world", // The text displayed on the paragraph.
>   },
> ];
> ```
