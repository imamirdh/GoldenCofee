import React, { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT-CHANGE":
      {
        let isFormValid = true;
        for (const inputID in state.inputs) {
          if (inputID === action.inputID) {
            isFormValid = isFormValid && action.isValid;
          } else {
            isFormValid = isFormValid && state.inputs[inputID].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputID]: {
              value: action.value,
              isValid: action.isValid,
            },
          },
          isFormValid: isFormValid,
        };
      }

      break;

    default:
      break;
  }
};

export function useForm(initInputs, initFormValid) {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initInputs,
    isFormValid: initFormValid,
  });

  const onInputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT-CHANGE",
      value,
      isValid,
      inputID: id,
    });
  }, []);

  return [formState, onInputHandler];
}
