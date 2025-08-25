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
