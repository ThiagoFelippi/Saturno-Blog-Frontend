import React from 'react';

import { Input } from './styles';

interface Props{
  placeholder? : string;
  type? : string;
  change: (e : React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent: React.FC<Props> = ({placeholder, type, change}) => {
  return (
    <Input type={type || "text"} onChange={change} placeholder={placeholder} />
  )
}

export default InputComponent;