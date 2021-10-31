import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Select from 'react-select';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 50%;
`;

export const Input = styled.input`
    background-color: transparent;
    border: 1px solid ${colors.inputGrey};
    box-sizing: border-box;
    color: ${colors.white};
    font-size: 14px;
    letter-spacing: 0.04em;
    margin-bottom: 15px;
    outline: none;
    padding: 17px 0 17px 18px;

    &:focus {
        border: 1px solid ${colors.white};
    }
`

export const StyledSelect = styled.select`
    border: 1px solid ${colors.inputGrey};
    background-color: transparent;
    color: ${colors.white};
    cursor: pointer;
    border-radius: 0;
    font-size: 14px;
    letter-spacing: 0.04em;
    padding: 17px 18px;

    &:hover {
        border: 1px solid ${colors.inputGreyHover};
    }
`;

export const StyledOption = styled.option`
    background-color: ${colors.backgroundGrey};
    font-size: 14px;
    letter-spacing: 0.04em;
    padding: 0;
    padding-bottom: 3px;
`;