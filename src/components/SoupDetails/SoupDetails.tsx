import React, { useState } from 'react';
import { InputEvent, InputsValues, FormValidation } from '../../utils/types';
import { Label, Select, StyledOption } from '../Form/Form.styles';
import { spicinessScale } from './SoupDetails.constants';

interface SoupDetailsProps {
    inputsValues: InputsValues;
    onInputChange: (event: InputEvent) => void;
    validateInput: (event: InputEvent) => void;
    isValid: FormValidation;
}

export const SoupDetails: React.FC<SoupDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid }) => {
    const [isSpicinessSelected, setIsSpicinessSelected] = useState<boolean>(false);

    const selectSpiciness = (event: InputEvent) => {
        onInputChange(event);
        setIsSpicinessSelected(true);
    }

    return (
        <>
            <Label isCorrect={isValid.spicinessScale}>Spiciness scale</Label>
            <Select
                id={'spicinessScale'}
                value={inputsValues.spicinessScale}
                onChange={selectSpiciness}
                onBlur={validateInput}
                isCorrect={isValid.spicinessScale}
            >
                {spicinessScale.map(spiciness => {
                    return (
                        <StyledOption 
                            disabled={isSpicinessSelected && spiciness.label === 'Spiciness scale'} 
                            value={spiciness.value} 
                            key={spiciness.value}
                        >
                            {spiciness.label}
                        </StyledOption>
                    )
                })}
            </Select>
        </>
    );
};