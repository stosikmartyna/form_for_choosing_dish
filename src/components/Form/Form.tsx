import React, { useState } from 'react';
import { DISH_TYPE, initialValue, InputValues, spicinessScale, types } from './Form.types';
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

            {inputsValues.type === DISH_TYPE.PIZZA && (
                <>
                    <Input 
                        id={'noOfSlices'}
                        placeholder={'No of slices'} 
                        value={inputsValues.noOfSlices}
                        onChange={handleInputChange}
                        type={'number'}
                    />
                    <Input 
                        id={'diameter'}
                        placeholder={'Diameter'} 
                        value={inputsValues.diameter}
                        onChange={handleInputChange}
                        type={'number'}
                    />
                </>
            )}

            {inputsValues.type === DISH_TYPE.SOUP && (
                <StyledSelect
                    id={'spicinessScale'}
                    placeholder={'Spiciness scale'}
                    value={inputsValues.spicinessScale}
                    onChange={handleInputChange}
                >
                    {spicinessScale.map(spiciness => {
                        return <StyledOption value={spiciness.value} key={spiciness.value}>{spiciness.label}</StyledOption>
                    })}
                </StyledSelect>
            )}

            {inputsValues.type === DISH_TYPE.SANDWICH && (
                <Input 
                    id={'slicesOfBread'}
                    placeholder={'Slices of bread'} 
                    value={inputsValues.slicesOfBread}
                    onChange={handleInputChange}
                    type={'number'}
                />
            )}
        </FormContainer>
    );
};