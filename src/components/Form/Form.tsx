import React, { useState } from 'react';
import axios from 'axios';
import { PizzaDetails } from '../PizzaDetails/PizzaDetails';
import { SoupDetails } from '../SoupDetails/SoupDetails';
import { SandwichDetails } from '../SandwichDetails/SandwichDetails';
import { 
    initialValue, 
    InputValues, 
    IsUserValidated, 
    validatedValues,
    DISH_TYPE,
    types,
} from '../../utils/types';
import {
    FormContainer,
    Input,
    Select,
    StyledOption,
    Button
} from './Form.styles';

export const Form: React.FC = () => {
    const [inputsValues, setInputsValues] = useState<InputValues>(initialValue);
    const [isValidated, setIsValidated] = useState<IsUserValidated>(validatedValues);

    const postForm = async() => {
        try {
            await axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', inputsValues);
        } catch (error) {
            console.warn(error);
        }
    }

    const handleInputChange = (event: any) => {
        setInputsValues({
            ...inputsValues,
            [event.target.id]: event.target.value,
        });
    };

    const validateInput = (event: any) => {
        const isValueEmpty = event.target.value.trim() === '';
        setIsValidated({...isValidated, [event.target.id]: !isValueEmpty})
      }

      const isFormValid =
        inputsValues.name.trim() !== ''
        && inputsValues.preparationTime.trim() !== ''
        && inputsValues.type !== '';
    
      const handleSubmit = () => {
        const submitValidatedForm = () => {
          postForm();
        }

        isFormValid && submitValidatedForm();
        setInputsValues(initialValue);
        setIsValidated(validatedValues);
    };

    return (
        <FormContainer>
            <Input 
                id={'name'}
                placeholder={'Name'}
                value={inputsValues.name}
                onChange={handleInputChange}
                onBlur={validateInput}
                isCorrect={isValidated.name}
             />
            <Input
                id={'preparationTime'}
                placeholder={'Preparation time 00:00:00'} 
                value={inputsValues.preparationTime}
                onChange={handleInputChange}
                onBlur={validateInput}
                isCorrect={isValidated.preparationTime}
                min={'0'}
            />
            <Select
                id={'type'}
                value={inputsValues.type}
                onChange={handleInputChange}
                onBlur={validateInput}
                isCorrect={isValidated.type}
            >
                {types.map(type => {
                    return (
                        <StyledOption 
                            disabled={type.label === 'Dish type'} 
                            value={type.value} 
                            key={type.value}
                        >
                            {type.label}
                        </StyledOption>
                    )
                })}
            </Select>

            {inputsValues.type === DISH_TYPE.PIZZA && (
                <PizzaDetails inputsValues={inputsValues} onInputChange={handleInputChange} />
            )}

            {inputsValues.type === DISH_TYPE.SOUP && (
                <SoupDetails 
                    inputsValues={inputsValues} 
                    onInputChange={handleInputChange}
                />
            )}

            {inputsValues.type === DISH_TYPE.SANDWICH && (
                <SandwichDetails inputsValues={inputsValues} onInputChange={handleInputChange} />
            )}

            <Button onClick={handleSubmit} disabled={!isFormValid}>
                Submit
            </Button>
        </FormContainer>
    );
};