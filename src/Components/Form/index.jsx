import { useContext, useEffect } from "react";

import Input from "../Input"
import FormContext from "../../FormContext";

import { 
    FormStyle,
    Title,
    Error,
    Button,
    FormLink, 
    Container
} from "./styles";

import { Link } from "react-router-dom";
import Radio from "../Radio";

export default function Form({ inputs, form, link, button, radios }) {
    const { 
        insertMessage,
        data,
        message
    } = useContext(FormContext);

    useEffect(() => insertMessage(null, null), []);

    const validateFieds = () => {
        const validateEmail = email => {
            const rgx = /^[a-z0-9(_.\-)?]+@[a-z0-9]+\.[a-z\.]+[a-z]?$/;
            return rgx.test(email);
        }

        const validatePassword = password => password.length > 8;

        if (Object.keys(data).length - 1 !== inputs.length) {
            return insertMessage("error", "Preencha todos os campos!");
        }

        for (let key in data) {
            if (data[key] === "") {
                return insertMessage("error", "Preencha todos os campos!");
            }
        }

        if (!validateEmail(data.email)) {
            return insertMessage("error", "Digite um e-mail válido!");
        }

        if (!validatePassword(data.password)) {
            return insertMessage("error", "Digite uma senha com minímo 8 caracteres!");
        }

        if (form.type === "SignIn") {
            insertMessage("successful", "Fazendo login...");
        } else if (form.type === "SignUp") {
            insertMessage("successful", "Confirmado!");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        validateFieds();
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            {
                message.text 
                ?
                <Error type={message.type}>{message.text}</Error>
                :
                null
            }
            <Title>{form.title}</Title>
            {
                inputs.map(input => (
                    <Input 
                        {...input}
                        key={input.id}
                    />
                ))
            }
            {
                form.type === "SignUp" ?
                <Container>
                    {radios.map(radio => (
                        <Radio {...radio} key={radio.id}/>
                    ))}
                </Container>
                :
                null
            }
            <Button>{button.text}</Button>
            <FormLink>{link.text[0]}<Link to={link.route}>{link.text[1]}</Link></FormLink>
        </FormStyle>
    )
}
