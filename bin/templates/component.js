"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const componentTemplate = (storybook, noFolder, noCss) => `${storybook ? `import React from "react";
` : ''}${!noFolder && !noCss ? `import styles from "./${core_1.NAME}.module.css";

` : ''}interface ${core_1.NAME}Props {}

export const ${core_1.NAME} = ({}: ${core_1.NAME}Props) => {
  return (
    <div>${core_1.NAME}</div>
  );
};
`;
exports.default = componentTemplate;
//# sourceMappingURL=component.js.map