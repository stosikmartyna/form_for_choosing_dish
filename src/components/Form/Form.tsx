import React, { useState } from 'react';
import { initialValue, InputValues, types } from './Form.types';
import {
    FormContainer,
    Input,
    StyledSelect,
    StyledOption
} from './Form.styles';

export const Form: React.FC = () => {
    const [inputsValues, setInputsValues] = useState<InputValues>(initialValue);

    const handleInputChange = (event: any) => {
        setInputsValues({
            ...inputsValues,
            [event.target.id]: event.target.value,
        });
    };

    return (
        <FormContainer>
            <Input 
                id={'name'}
                placeholder={'Name'}
                value={inputsValues.name}
                onChange={handleInputChange}
             />
            <Input
                id={'preparationTime'}
                placeholder={'Preparation time 00:00:00'} 
                value={inputsValues.preparationTime}
                onChange={handleInputChange}
                type={'number'}
            />
            <StyledSelect
                id={'type'}
                placeholder={'Dish type'}
                value={inputsValues.type}
                onChange={handleInputChange}
            >
                {types.map(type => {
                    return <StyledOption value={type.value} key={type.value}>{type.label}</StyledOption>
                })}
            </StyledSelect>
        </FormContainer>
    );
};