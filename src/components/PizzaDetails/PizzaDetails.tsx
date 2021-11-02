import React from 'react';
import { InputValues } from '../../utils/types';
import { Input } from '../Form/Form.styles';

interface PizzaDetailsProps {
    inputsValues: InputValues;
    onInputChange: (event: any) => void;
}

export const PizzaDetails: React.FC<PizzaDetailsProps> = ({ inputsValues, onInputChange  }) => {
    return (
        <>
            <Input 
                id={'noOfSlices'}
                placeholder={'No of slices'} 
                value={inputsValues.noOfSlices}
                onChange={onInputChange}
                type={'number'}
                min={'0'}
            />
            <Input 
                id={'diameter'}
                placeholder={'Diameter'} 
                value={inputsValues.diameter}
                onChange={onInputChange}
                type={'number'}
                min={'0'}
            />
        </>
    );
};