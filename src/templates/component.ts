import { NAME } from "../core";

const componentTemplate = (storybook?: boolean, noFolder?: boolean, noCss?: boolean, withProps?: boolean) => `${storybook ? `import React from "react";
` : ''}${!noFolder && !noCss ? `import classes from "./${NAME}.module.css";
` : ''}${!!withProps ? `
interface ${NAME}Props {}
` : ""}
export const ${NAME} = (${!!withProps ? `{}: ${NAME}Props` : ""}) => {
  return (
    <div>${NAME}</div>
  );
};
`

export default componentTemplate
