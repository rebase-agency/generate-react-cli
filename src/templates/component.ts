import { NAME } from "../core";

export default `import styles from "./${NAME}.module.css";

interface ${NAME}Props {};

export const ${NAME} = ({}: ${NAME}Props) => {
  return (
    <div>${NAME}</div>
  );
};
`
