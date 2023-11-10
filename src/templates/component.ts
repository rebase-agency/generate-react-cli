import { NAME } from "../core";

const componentTemplate = (storybook?: boolean, noFolder?: boolean) => `${storybook ? `import React from "react";
` : ''}${!noFolder ? `import styles from "./${NAME}.module.css";

` : ''}interface ${NAME}Props {};

export const ${NAME} = ({}: ${NAME}Props) => {
  return (
    <div>${NAME}</div>
  );
};
`

export default componentTemplate
