import Form from "../Form";

export default function SignIn() {
    const INPUT_ATTRIBUTES = [
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
        },
    ];
    
    return (
        <Form
            form={{
                type: "SignIn",
                title: "Fazer Login"
            }}
            link={{
                text: ["Não tem um conta? ", "Criar agora"],
                route: "/createaccount"
            }}
            button={{
                text: "Login"
            }}
            inputs={INPUT_ATTRIBUTES}
        />
    );
}
