import React from 'react';

import { Button } from './styles';

interface Props{
  text: string;
  click? : (e : React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonComponent: React.FC<Props> = ({text, click}) => {
  return (
    <Button onClick={click}>
      {text}
    </Button>
  )
}

export default ButtonComponent;