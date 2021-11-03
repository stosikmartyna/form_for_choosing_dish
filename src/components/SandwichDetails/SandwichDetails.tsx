import React from 'react';
import { InputEvent, InputsValues, FormValidation } from '../../utils/types';
import { Input, Label } from '../Form/Form.styles';

interface SandwichDetailsProps {
    inputsValues: InputsValues;
    onInputChange: (event: InputEvent) => void;
    validateInput: (event: InputEvent) => void;
    isValid: FormValidation;
}

export const SandwichDetails: React.FC<SandwichDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid  }) => {
    return (
        <>
            <Label isCorrect={isValid.slicesOfBread}>Slices of bread</Label>
            <Input
                type={'number'}
                min={'0'}
                id={'slicesOfBread'}
                value={inputsValues.slicesOfBread}
                onChange={onInputChange}
                onBlur={validateInput}
                isCorrect={isValid.slicesOfBread}
        />
        </>
    );
};