"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const context = `import { createContext, useState, useEffect, JSX } from "react";
import { ${core_1.NAME}ContextType } from "./types";

export const ${core_1.NAME}Context = createContext<${core_1.NAME}ContextType | null>(null);

export const ${core_1.NAME}Provider = ({ children }: { children: JSX.Element }) => {
  const [] = useState();
  
  useEffect(() => {
    //
  }, []);
  
  return (
    <${core_1.NAME}Context.Provider>
      { children }
    </${core_1.NAME}Context.Provider>
  );
};
`;
const hookContext = `import { useContext } from "react";
import { ${core_1.NAME}Context } from './${core_1.NAME}Context';
import { ${core_1.NAME}ContextType } from "./types";

export const use${core_1.NAME}Context = () => useContext(${core_1.NAME}Context) as ${core_1.NAME}ContextType;
`;
const exp = `export { use${core_1.NAME}Context } from "./use${core_1.NAME}Context";
`;
const types = `export interface ${core_1.NAME}ContextType {}
`;
exports.default = { context, hookContext, exp, types };
//# sourceMappingURL=context.js.map