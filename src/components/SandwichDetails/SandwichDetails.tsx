import React from 'react';
import { InputValues } from '../../utils/types';
import { Input } from '../Form/Form.styles';

interface SandwichDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
}

export const SandwichDetails: React.FC<SandwichDetailsProps> = ({ inputsValues, onInputChange  }) => {
    return (
        <Input 
            id={'slicesOfBread'}
            placeholder={'Slices of bread'} 
            value={inputsValues.slicesOfBread}
            onChange={onInputChange}
            type={'number'}
            min={'0'}
        />
    );
};