import {NAME} from "../core";

export default `import type { Meta, StoryObj } from "@storybook/react";

import { ${NAME} } from "./${NAME}";
import React from "react";

const meta: Meta<typeof ${NAME}> = {
  component: ${NAME},
};

export default meta;

type Story = StoryObj<typeof ${NAME}>;

export const Default: Story = {
  args: {}
};
`
