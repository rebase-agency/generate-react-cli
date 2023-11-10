"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
exports.default = `import { useState, useEffect } from 'react';

interface Props {};

export const ${core_1.NAME} = ({}: Props) => {
  const [] = useState();

  useEffect(() => {
    //
  }, []);
  
  return null;
};
`;
//# sourceMappingURL=hook.js.map