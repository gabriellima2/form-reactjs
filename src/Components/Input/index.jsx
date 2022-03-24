import { useState, useContext } from "react";
import { InputContainer, InputStyle, Label } from "./styles";

import FormContext from "../../FormContext/";

export default function Input(props) {
    const [ value, setValue ] = useState("");
    const [ keepLabelPosition, setKeepLabelPosition ] = useState(false);

    const { insertNewValue } = useContext(FormContext);

    const handleChange = ({ target }) => {
        setValue(target.value);
        insertNewValue(target.name, target.value);
    }

    const handleBlur = () => {
        setKeepLabelPosition(value ? true : false);
    }

    return (
        <InputContainer>
        <InputStyle
            onChange={handleChange}
            onBlur={handleBlur}
            type={props.type}
            name={props.name}
            id={props.id}
            value={value}
            minLength={props.minLength || ""}
        />
        <Label
            htmlFor={props.id}
            keepLabelPosition={keepLabelPosition}
        >{props.label}</Label>
        </InputContainer>
    );
}
