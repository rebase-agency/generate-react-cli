import { NAME } from "../core";

const componentTemplate = (storybook?: boolean, noFolder?: boolean, noCss?: boolean) => `${storybook ? `import React from "react";
` : ''}${!noFolder && !noCss ? `import styles from "./${NAME}.module.css";

` : ''}interface ${NAME}Props {};

export const ${NAME} = ({}: ${NAME}Props) => {
  return (
    <div>${NAME}</div>
  );
};
`

export default componentTemplate
