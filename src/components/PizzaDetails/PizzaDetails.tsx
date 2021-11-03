import React, { ChangeEvent } from 'react';
import { InputsValues, FormValidation } from '../../utils/types';
import { Input, Label } from '../Form/Form.styles';

interface PizzaDetailsProps {
    inputsValues: InputsValues;
    onInputChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    validateInput: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    isValid: FormValidation;
}

export const PizzaDetails: React.FC<PizzaDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid }) => {
    return (
        <>
            <Label isCorrect={isValid.noOfSlices}>No of slices</Label>
            <Input
                type={'number'}
                min={'0'}
                id={'noOfSlices'}
                value={inputsValues.noOfSlices}
                onChange={onInputChange}
                onBlur={validateInput}
                isCorrect={isValid.noOfSlices}
            />
            <Label isCorrect={isValid.diameter}>Diameter</Label>
            <Input
                type={'number'}
                min={'0'}
                id={'diameter'}
                value={inputsValues.diameter}
                onChange={onInputChange}
                onBlur={validateInput}
                isCorrect={isValid.diameter}
            />
        </>
    );
};