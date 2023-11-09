"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
exports.default = `import { Canvas, Controls, Markdown, Meta } from "@storybook/blocks";
import usage from "./README.md?raw";
import * as Stories from "./${core_1.NAME}.stories";

<Meta of={Stories} />

<Markdown>{usage}</Markdown>
<Canvas />

## Props
<Controls />
`;
