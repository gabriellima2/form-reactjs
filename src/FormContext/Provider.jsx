import { useState, useEffect } from "react";
import FormContext from "./";

export default function FormContextProvider({ children }) {
    const [ data, setData ] = useState({framework: "angular"});
    const [ message, setMessage ] = useState({type: null, text: null});

    useEffect(() => {
        if (message) setMessage({type: null, text: null});
    }, [data]);

    const insertNewValue = (key, value) => {
        setData((prevState) => {
            return {
                ...prevState,
                [key]: value
            };
        });
    }

    const insertMessage = (type, text) => {
        setMessage({type, text});
    }

    return (
        <FormContext.Provider value={{
            insertNewValue,
            insertMessage,
            data,
            message
        }}>
            {children}
        </FormContext.Provider>
    );
}
