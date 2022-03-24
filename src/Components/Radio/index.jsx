import { useContext } from "react";

import { Container } from "./styles";

import FormContext from "../../FormContext";

export default function Radio(props) {
    const { data, insertNewValue } = useContext(FormContext);

    const handleChange = ({ target }) => {
        insertNewValue(target.name, target.id);
    }

    return (
        <Container>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                onChange={handleChange}
                type="radio"
                id={props.id}
                name={props.name}
                checked={data.framework === props.id}
            />
        </Container>
    )    
}
