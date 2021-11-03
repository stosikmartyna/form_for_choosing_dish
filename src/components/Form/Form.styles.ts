import styled from 'styled-components';
import { colors } from '../../utils/constants/colors';
import { DISH_TYPE } from '../../utils/types';

interface ContainerProps {
    backgroundType: string;
}

export const Container = styled.div<ContainerProps>`
    align-items: end;
    background-image: url('./img/mainBackground.jpg');
    background-image: ${({backgroundType}) => {
        return backgroundType === undefined
            ?  `url('./img/mainBackground.jpg')`
            : backgroundType === DISH_TYPE.PIZZA
                ? `url('./img/pizza.jpg')`
                : backgroundType === DISH_TYPE.SANDWICH
                    ? `url('./img/sandwich.jpg')`
                    : backgroundType === DISH_TYPE.SOUP
                        && `url('./img/soup.jpg')`
    }};
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100vw;
`;

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 100px;
`;


interface InputProps {
    isCorrect?: boolean;
}

export const Input = styled.input<InputProps>`
    background-color: ${colors.backgroundGrey};
    border: ${({isCorrect}) => {
        return isCorrect === undefined 
            ? `1px solid ${colors.backgroundGrey}` 
            : isCorrect 
                ? `1px solid ${colors.green}`
                : `1px solid ${colors.red}`
    }};
    box-sizing: border-box;
    color: ${colors.white};
    font-size: 14px;
    letter-spacing: 0.09em;
    margin-bottom: 15px;
    outline: none;
    padding: 17px 0 17px 18px;
    transition: border .5s ease-in-out;
    width: 400px;

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

export const TimeInput = styled(Input)`
    & {
        font-family: 'Segoe UI', 'Roboto', 'Oxygen';
        font-weight: 500;
    }

    &::-webkit-datetime-edit-text {
        padding: 0 3px;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }
`;

interface SelectProps {
    isCorrect?: boolean;
}

export const Select = styled.select<SelectProps>`
    background-color: ${colors.backgroundGrey};
    border: ${({isCorrect}) => {
        return isCorrect === undefined 
            ? `1px solid ${colors.backgroundGrey}` 
            : isCorrect 
                ? `1px solid ${colors.green}`
                : `1px solid ${colors.red}`
    }};
    color: ${colors.white};
    cursor: pointer;
    font-size: 14px;
    letter-spacing: 0.09em;
    margin-bottom: 15px;
    padding: 17px 18px;
    transition: border .5s ease-in-out;
    width: 400px;

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
    letter-spacing: 0.09em;
    padding: 12px 22px 12px 18px;
    text-align: left;
    width: 400px;
`;