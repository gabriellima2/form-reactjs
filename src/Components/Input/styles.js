import styled from "styled-components";

const TOP_POSITION_LABEL = 31;
const FONT_SIZE_LABEL = 0.8;

export const InputContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const Label = styled.label`
    position: absolute;
    left: 12px;
    transition: all 0.1s ease-in;
    padding: 0px 5px;
    font-size: ${({ keepLabelPosition }) => keepLabelPosition ? FONT_SIZE_LABEL : 0.9}em;
    bottom: ${({ keepLabelPosition }) => keepLabelPosition ? TOP_POSITION_LABEL : 9}px;
    color: #ccc;
`;

export const InputStyle = styled.input`
    width: 100%;
    height: 40px;
    font-size: 1em;
    color: #fff;
    padding: 5px 15px;

    :-webkit-autofill {
        box-shadow: 0 0 0 30px #011728 inset;
    }

    :-webkit-autofill {
        -webkit-text-fill-color: #fff;
    }

    &:focus ~ ${Label} {
        bottom: ${TOP_POSITION_LABEL}px;
        font-size: ${FONT_SIZE_LABEL}em;
    }
`;
