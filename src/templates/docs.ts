import { NAME } from "../core";

export default `import { Canvas, Controls, Markdown, Meta } from "@storybook/blocks";
import usage from "./README.md?raw";
import * as Stories from "./${NAME}.stories";

<Meta of={Stories} />

<Markdown>{usage}</Markdown>
<Canvas />

## Props
<Controls />
`
