import React from 'react';
import { InputValues, FormValidation } from '../../utils/types';
import { Input } from '../Form/Form.styles';

interface SandwichDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
    validateInput: (event: any) => void;
    isValid: FormValidation;
}

export const SandwichDetails: React.FC<SandwichDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid  }) => {
    return (
        <Input
            type={'number'}
            min={'0'}
            id={'slicesOfBread'}
            placeholder={'Slices of bread'} 
            value={inputsValues.slicesOfBread}
            onChange={onInputChange}
            onBlur={validateInput}
            isCorrect={isValid.slicesOfBread}
        />
    );
};