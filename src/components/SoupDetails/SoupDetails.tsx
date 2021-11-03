import React, { ChangeEvent, useState } from 'react';
import { InputsValues, FormValidation } from '../../utils/types';
import { spicinessScale } from './SoupDetails.types';
import { Select, StyledOption, Label } from '../Form/Form.styles';

interface SoupDetailsProps {
    inputsValues: InputsValues;
    onInputChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    validateInput: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => void;
    isValid: FormValidation;
}

export const SoupDetails: React.FC<SoupDetailsProps> = ({ inputsValues, onInputChange, validateInput, isValid }) => {
    const [isSpicinessSelected, setIsSpicinessSelected] = useState<boolean>(false);

    const selectSpiciness = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
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