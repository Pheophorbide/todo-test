export const validate = values => {
    const errors = {};
    const length = values.add && values.add.replace(/\s/g, '').length;

    if(!length) {
        errors.add = 'Поле не может быть пустым!'
    } else if(length < 3) {
        errors.add = 'Поле не может быть меньше 3 символов!'
    }

    return errors;
};
