import React, {memo} from 'react';
import {Card, CardHeader, CardFooter, CardBody, Button} from 'reactstrap';
import DeleteIcon from 'mdi-react/DeleteIcon';
import PlusIcon from "mdi-react/PlusIcon";
import uuid from 'uuid';

//components
import renderCheckbox from './_shared/Checkbox';
import renderInput from "./_shared/Input";

//redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm, reset, Field} from 'redux-form';
import {
    addItem,
    checkItem,
    deleteItem
} from "../redux/action/todoAction";

//utils
import {validate} from "./utils/validate";

const CardComponent = (
    {
        data,
        form,
        handleSubmit,
        reset,
        addItem,
        checkItem,
        deleteItem
    }) => {

    function onChange(objectId) {
        const updateData = [...data];
        let index = data.findIndex(({id}) => id === objectId);
        if (!~index) return;
        updateData.splice(index, 1, {...updateData[index], isChecked: !updateData[index].isChecked});
        checkItem(updateData);
    }

    function onSubmit(values) {
        addItem([...data, {name: values.add, id: uuid(), isChecked: false}]);
        reset(form);
    }

    function removeItem() {
        const updateData = [...data].filter(({isChecked}) => !isChecked);
        deleteItem(updateData);
    }

    return (
        <div className={"wrapper"}>
            <Card className={"card"}>
                <CardHeader className={"card__header"}>
                    <span>TODO list</span>
                    <Button color={"link"} className={"card__button"}>
                        <DeleteIcon onClick={removeItem}/>
                    </Button>
                </CardHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CardBody>
                        {data.map(item => (
                            <Field
                                name={`add_${item.id}`}
                                key={item.id}
                                label={item.name}
                                id={item.id}
                                component={renderCheckbox}
                                onChange={onChange}
                                checked={item.isChecked}
                            />)
                        )}
                    </CardBody>
                    <CardFooter className={"card__footer"}>
                        <Button color="link" type={"submit"} className={"card__button"}>
                            <PlusIcon/>
                        </Button>
                        <Field
                            name={"add"}
                            component={renderInput}
                            className={"card__form-group"}
                        />
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
};

const mapStateToProps = (store) => ({
    data: store.todo.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addItem,
    checkItem,
    deleteItem,
    reset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm(
        {
            enableReinitialize: true,
            destroyOnUnmount: false,
            form: 'todo_form',
            validate
        })(
        memo(CardComponent)
    )
);
