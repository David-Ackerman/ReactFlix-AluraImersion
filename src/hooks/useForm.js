import { useState } from 'react';


function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }
    function funcaoSet(infoValue) {
        setValue(infoValue.target.getAttribute('name'), infoValue.target.value);
    }
    function clearForm(){
        setValues(initialValues);
    }

    return {
        values,
        funcaoSet,
        clearForm,
    };
}

export default useForm;