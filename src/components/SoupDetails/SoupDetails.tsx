import React from 'react';
import { InputValues } from '../../utils/types';
import { spicinessScale } from './SoupDetails.types';
import { Select, StyledOption } from '../Form/Form.styles';

interface SoupDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
}

export const SoupDetails: React.FC<SoupDetailsProps> = ({ inputsValues, onInputChange  }) => {
    return (
        <Select
            id={'spicinessScale'}
            placeholder={'Spiciness scale'}
            value={inputsValues.spicinessScale}
            onChange={onInputChange}
        >
            {spicinessScale.map(spiciness => {
                return <StyledOption value={spiciness.value} key={spiciness.value}>{spiciness.label}</StyledOption>
            })}
        </Select>
    );
};