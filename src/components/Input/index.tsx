import React from 'react';

import { Input } from './styles';

interface Props{
  placeholder? : string;
  type? : string;
  change: (e : React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputComponent: React.FC<Props> = ({placeholder, type, change, required}) => {
  return (
    <Input type={type || "text"} onChange={change} placeholder={placeholder} required={required} />
  )
}

export default InputComponent;