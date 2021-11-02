import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
`;

interface InputProps {
    isCorrect?: boolean;
}

export const Input = styled.input<InputProps>`
    background-color: transparent;
    border: ${({isCorrect}) => {
        return isCorrect === undefined 
            ? `1px solid ${colors.inputGrey}` 
            : isCorrect 
                ? `1px solid ${colors.green}`
                : `1px solid ${colors.red}`
    }};
    box-sizing: border-box;
    color: ${colors.white};
    font-size: 14px;
    letter-spacing: 0.04em;
    margin-bottom: 15px;
    outline: none;
    padding: 17px 0 17px 18px;

    &:hover {
        border: ${({isCorrect}) => {
            return isCorrect === undefined 
                ? `1px solid ${colors.inputGreyHover}` 
                : isCorrect 
                    ? `1px solid ${colors.greenHover}`
                    : `1px solid ${colors.redHover}`
        }};
    }

    &:focus {
        border: 1px solid ${colors.white};
    }
`

interface SelectProps {
    isCorrect?: boolean;
}

export const Select = styled.select<SelectProps>`
    border: ${({isCorrect}) => {
        return isCorrect === undefined 
            ? `1px solid ${colors.inputGrey}` 
            : isCorrect 
                ? `1px solid ${colors.green}`
                : `1px solid ${colors.red}`
    }};
    background-color: transparent;
    color: ${colors.white};
    cursor: pointer;
    border-radius: 0;
    font-size: 14px;
    letter-spacing: 0.04em;
    margin-bottom: 15px;
    padding: 17px 18px;

    &:hover {
        border: ${({isCorrect}) => {
        return isCorrect === undefined 
            ? `1px solid ${colors.inputGreyHover}` 
            : isCorrect 
                ? `1px solid ${colors.greenHover}`
                : `1px solid ${colors.redHover}`
        }};
    }
`;

export const StyledOption = styled.option`
    background-color: ${colors.backgroundGrey};
    font-size: 14px;
    letter-spacing: 0.04em;
    padding: 0;
    padding-bottom: 3px;
`;

export const Button = styled.button`
    align-items: center;
    background-color: ${colors.black};
    background-color: ${({disabled}) => disabled ? colors.inputGrey : colors.black};
    border: none;
    color: ${colors.white};
    cursor: pointer;
    display: flex;
    font-weight: 600;
    font-size: 14px;
    justify-content: space-between;
    line-height: 24px;
    margin: 48px 0 72px auto;
    padding: 12px 22px 12px 18px;
    text-align: left;
    width: 200px;
`;