import React from 'react';
import {Input, FormGroup, FormFeedback} from 'reactstrap';

const InputComponent = (
    {
        input,
        meta: {touched, error},
        className
    }) => {

    return (
        <FormGroup className={className}>
            <Input
                {...input}
                invalid={touched && !!error}
            />
            {touched && error && <FormFeedback className={"card__error"}>{error}</FormFeedback>}
        </FormGroup>
    )
};

const renderInput = (props) => (
    <InputComponent
        {...props}
    />
);

export default renderInput;
