import {NAME} from "../core";

const context = `import { createContext, useState, useEffect, JSX } from "react";
import { ${NAME}ContextType } from "./types";

export const ${NAME}Context = createContext<${NAME}ContextType | null>(null);

export const ${NAME}Provider = ({ children }: { children: JSX.Element }) => {
  const [] = useState();
  
  useEffect(() => {
    //
  }, []);
  
  return (
    <${NAME}Context.Provider>
      { children }
    </${NAME}Context.Provider>
  );
};
`

const hookContext = `import { useContext } from "react";
import { ${NAME}Context } from './${NAME}Context';
import { ${NAME}ContextType } from "./types";

export const use${NAME}Context = () => useContext(${NAME}Context) as ${NAME}ContextType;
`

const exp = `export { use${NAME}Context } from "./use${NAME}Context";
`

const types = `export interface ${NAME}ContextType {}
`

export default { context, hookContext, exp, types }
