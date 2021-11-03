import React from 'react';
import { InputValues, FormValidation } from '../../utils/types';
import { Input } from '../Form/Form.styles';

interface PizzaDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
    validateInput: (event: any) => void;
    isValid: FormValidation;
}

export const PizzaDetails: React.FC<PizzaDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid }) => {
    return (
        <>
            <Input
                type={'number'}
                min={'0'}
                id={'noOfSlices'}
                placeholder={'No of slices'} 
                value={inputsValues.noOfSlices}
                onChange={onInputChange}
                onBlur={validateInput}
                isCorrect={isValid.noOfSlices}
            />
            <Input
                type={'number'}
                min={'0'}
                id={'diameter'}
                placeholder={'Diameter'} 
                value={inputsValues.diameter}
                onChange={onInputChange}
                onBlur={validateInput}
                isCorrect={isValid.diameter}
            />
        </>
    );
};