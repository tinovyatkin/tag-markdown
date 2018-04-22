# tag-markdown

Tagged template string function that converts Markdown to HTML

## Usage

```js
const md = require("tag-markdown")();

const singleLine = md`
This is test _markdown_ string :tada:
`; // => "This is test <em>markdown</em> string 🎉"

const byaka = "Test";

const multiLine = md`
                    This is ${byaka} of :wave: multiline
                    Markdown template literal tag`; // => "<p>This is Test of 👋 multiline\n<p>Markdown template literal tag"
```
