import React, { useState } from 'react';
import { InputValues } from '../../utils/types';
import { spicinessScale } from './SoupDetails.types';
import { Select, StyledOption } from '../Form/Form.styles';

interface SoupDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
}

export const SoupDetails: React.FC<SoupDetailsProps> = ({ inputsValues, onInputChange }) => {
    const [isSpicinessSelected, setIsSpicinessSelected] = useState<boolean>(false);

    const selectSpiciness = (event: any) => {
        onInputChange(event);
        setIsSpicinessSelected(true);
    }

    return (
        <Select
            id={'spicinessScale'}
            placeholder={'Spiciness scale'}
            value={inputsValues.spicinessScale}
            onChange={selectSpiciness}
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
    );
};