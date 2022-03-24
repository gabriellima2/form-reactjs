import styled from "styled-components";

export const FormStyle = styled.form`
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 15px;
    position: relative;
`;

export const Title = styled.h1`
    margin-bottom: 10px;
    font-size: 1.8em;
`;

export const Error = styled.span`
    background-color: ${({ type }) => type === "error" ? "#D00000" : "#00D02E"};
    color: #fff;
    width: 100%;
    max-width: 360px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 5px 15px;
    position: absolute;
    top: -20%;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 1em;
    background-color: #1E8ADE;
    color: #fff;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in;
        background-color: #1173BE;
    }
`;

export const FormLink = styled.p`
    font-size: 0.8em;

    a:hover {
        text-decoration: underline;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const RadioTitle = styled.h2`
    font-size: 1em;
`;

export const ContainerRadio = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
