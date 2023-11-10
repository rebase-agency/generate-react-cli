import {NAME} from "../core";

export default `import { useState, useEffect } from 'React';

interface Props {};

export const ${NAME} = ({}: Props) => {
  const [] = useState();

  useEffect(() => {
    //
  }, []);
  
  return null;
};
`
