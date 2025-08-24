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
