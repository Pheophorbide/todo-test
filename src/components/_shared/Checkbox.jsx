import React from 'react';
import {Input, Label} from "reactstrap";
import CheckboxMarkedCircleOutline from 'mdi-react/CheckboxMarkedCircleOutlineIcon';
import CheckboxBlankCircleIcon from 'mdi-react/CheckboxBlankCircleOutlineIcon';

const Checkbox = ({id, checked, label, name, onChange}) => {
    function onHandleChange() {
        onChange(id)
    }
  return (
      <Label check={checked} className={"checkbox"}>
          {
              checked
                  ? <CheckboxMarkedCircleOutline/>
                  : <CheckboxBlankCircleIcon />
          }
          <Input
              type="checkbox"
              id={id}
              name={name}
              onChange={onHandleChange}
              className={"checkbox__input"}
          />
          <span className={"checkbox__label"}>{label}</span>
      </Label>
  )
};

const renderCheckbox = (props) => (
    <Checkbox {...props.input} {...props}/>
);

export default renderCheckbox;
