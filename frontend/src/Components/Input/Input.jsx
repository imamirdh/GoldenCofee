import React, { useEffect, useReducer } from 'react'
import validator from './../../Validations/Validator';

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action.validations)
            }
        }
        default: {
            return state;
        }
    }
}




function Input(props) {
    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: "",
        isValid: false
    })
    const { id, onInputHandler } = props;
    const { value, isValid } = mainInput;

    useEffect(() => {
        onInputHandler(id, value, isValid)
    }, [value])
    const onChangeHandler = (event) => {
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validations: props.validations,
            isValid: true
        })
    }
    const element = props.element === "input" ? (
        <input type={props.type}
            placeholder={props.placeholder}
            className={` outline-none bg-opacity-50 rounded-md ${!mainInput.isValid ? "":"border-2 border-teal-500"} ${props.className}`}
            value={mainInput.value}
            onChange={onChangeHandler} />
    ) : (
        <textarea name="" id="" cols="30" rows="10"></textarea>
    )
    return <>{element}</>
}
export default Input