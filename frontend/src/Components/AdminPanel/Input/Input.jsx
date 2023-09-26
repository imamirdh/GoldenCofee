import React, { useEffect, useReducer } from "react";
import validator from "../../../Validations/Validator"

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

function InputForm(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const { id, onInputHandler } = props;
  const { value, isValid } = mainInput;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);
  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      isValid: true,
    });
  };
  const element =
    props.element === "input" ? (
      <div className={`relative  font-Dana ${props.className}`}>
        <input
          placeholder=""
          className={` w-full h-full bg-transparent border ${
            !value && `!border-orange-300`
          } ${
            value && "!border-t-0 !border-r-0 !border-l-0"
          } border-2  focus:border-t-0 focus:border-r-0 focus:border-l-0  outline-none  absolute top-1/2 -translate-y-1/2 rounded-lg transition-all peer  ${
            mainInput.isValid ? "border-teal-600" : "border-red-500"
          } `}
          value={value}
          onChange={onChangeHandler}
          type={props.type}
        />
        <label
          htmlFor=""
          className={`flex 
          select-none
          w-full
          text-sm
          dark:text-gray-300
           items-center
           pointer-events-none
           top-1/2 
           -translate-y-1/2
           right-2
            absolute 
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-300 
            bg-transparent 
            transition-all ${value && "!top-0 text-sm dark:text-gray-300 text-gray-600"}`}
        >
          {props.lable}
        </label>
      </div>
    ) : (
      <textarea placeholder={props.lable}
      className={`bg-zinc-50 rounded-md p-2 border border-zinc-700 focus:border-2 transition-all dark:bg-zinc-600 dark:text-teal-300  outline-none ${props.className}`} value={value}
      onChange={onChangeHandler} dir="ltr"></textarea>
    );
  return <>{element}</>;
}
export default InputForm;
