"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
exports.default = `import styles from "./${core_1.NAME}.module.css";

interface ${core_1.NAME}Props {};

export const ${core_1.NAME} = ({ props }: ${core_1.NAME}Props) => {
  return (
    <div>${core_1.NAME}</div>
  );
};
`;
