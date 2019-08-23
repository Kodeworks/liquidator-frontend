import React from 'react';
import styled from 'styled-components';
import Label from './Label';

interface IRadioButtonProps {
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RadioButton: React.FC<
  IRadioButtonProps & React.HTMLProps<HTMLInputElement>
> = props => {
  return (
    <div className={props.className}>
      <Label
        checkboxLabel={true}
        htmlFor={`radio-${props.name}-${props.value}`}
      >
        {props.children}
      </Label>
      <input
        checked={props.checked}
        type="radio"
        id={`radio-${props.name}-${props.value}`}
        name={props.name}
        value={props.value}
        onChange={props.handler}
      />
    </div>
  );
};

export default styled(RadioButton)`
  * {
    vertical-align: middle;
  }
`;