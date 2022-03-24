import { useState, useEffect } from "react";
import FormContext from "./";

export default function FormContextProvider({ children }) {
    const [ data, setData ] = useState({type: null});
    const [ message, setMessage ] = useState({type: null, text: null});

    useEffect(() => {
        if (message) setMessage({type: null, text: null});
    }, [data]);

    const insertKeysOnData = (keys) => {
        keys.map((key) => {
            setData((prevState) => {
                return {
                    ...prevState,
                    [key.name]: ""
                };
            });
        });
    }

    const insertNewType = (type) => {
        if (type === "SignIn") {
            setData({type});
        } else if (type === "SignUp") {
            setData({type, framework: "angular"});
        }
    }

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
            insertKeysOnData,
            insertNewValue,
            insertMessage,
            insertNewType,
            data,
            message
        }}>
            {children}
        </FormContext.Provider>
    );
}
