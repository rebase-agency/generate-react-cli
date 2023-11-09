"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
exports.default = `import { useState, useEffect } from React;

interface Props {};

export const ${core_1.NAME} = () => {
  useEffect(() => {
   //
  }, []);

  return null;
};
`;
