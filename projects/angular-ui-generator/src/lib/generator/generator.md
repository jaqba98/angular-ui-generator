> ### Button
>
> #### Metadata model for a button:
>
> ```typescript
> [
>   {
>     kind: "button", // Specifies that the component is a button.
>     label: "Click me!", // Text to display on the button.
>   },
> ];
> ```

> ### Block
>
> #### Metadata model for a block:
>
> ```typescript
> [
>   {
>     kind: "block", // Specifies that the component is a block.
>     tag: "div", // HTML tag to use for the block.
>     children: [], // Array of child components to be nested inside the block.
>   },
> ];
> ```
>
> Possible values for `tag`:
>
> - `div`
> - `header`
> - `footer`

> ### Paragraph
>
> #### Metadata model for a paragraph:
>
> ```typescript
> [
>   {
>     kind: "paragraph", // Specifies that the component is a paragraph.
>     text: "Hello world!", // Text to display on the paragraph.
>   },
> ];
> ```
