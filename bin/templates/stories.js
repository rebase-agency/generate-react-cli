"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
exports.default = `import type { Meta, StoryObj } from "@storybook/react";

import { ${core_1.NAME} } from "./${core_1.NAME}";
import React from "react";

const meta: Meta<typeof ${core_1.NAME}> = {
  component: ${core_1.NAME},
};

export default meta;

type Story = StoryObj<typeof ${core_1.NAME}>;

export const Default: Story = {
  args: {}
};
`;
