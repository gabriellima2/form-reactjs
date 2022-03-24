import Form from "../Form";

export default function SignUp() {
    return (
        <Form 
            form={{
                type: "SignUp",
                title: "Criar Conta"
            }}
            link={{
                text: ["Já tem uma conta? ", "Fazer login"],
                route: "/"
            }}
            button={{
                text: "Confirmar"
            }}
            inputs={INPUT_ATTRIBUTES}
            radios={RADIO_ATTRIBUTES}
        />
    )
}

const INPUT_ATTRIBUTES = [
    {
        type: "name",
        name: "name",
        id: "name",
        label: "Nome"
    },
    {
        type: "surname",
        name: "surname",
        id: "surname",
        label: "Sobrenome"
    },
    {
        type: "email",
        name: "email",
        id: "email",
        label: "Email"
    },
    {
        type: "password",
        name: "password",
        id: "password",
        minLength: 8,
        label: "Senha"
    }
];

const RADIO_ATTRIBUTES = [
    {
        id: "angular",
        name: "framework",
        label: "Angular"
    },
    {
        id: "reactjs",
        name: "framework",
        label: "ReactJS",
    },
    {
        id: "vuejs",
        name: "framework",
        label: "VueJS",
    },
];
