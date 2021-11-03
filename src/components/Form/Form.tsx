import React, { ChangeEvent, useState } from 'react';
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
    Container,
    InputsWrapper,
    Input,
    TimeInput,
    Select,
    StyledOption,
    Button
} from './Form.styles';
import { format } from 'date-fns';

export const Form: React.FC = () => {
    const [inputsValues, setInputsValues] = useState<InputValues>(initialValue);
    const [isValidated, setIsValidated] = useState<IsUserValidated>(validatedValues);

    const postForm = async() => {
        try {
            await axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', inputsValues);
        } catch (error) {
            console.warn(error);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setInputsValues({
            ...inputsValues,
            [event.target.id]: event.target.value,
        });
    };

    const validateInput = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
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

    console.log(inputsValues)

    return (
        <Container backgroundType={inputsValues.type}>
            <InputsWrapper>
                <Input 
                    id={'name'}
                    placeholder={'Name'}
                    value={inputsValues.name}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    isCorrect={isValidated.name}
                />
                <TimeInput
                    id={'preparationTime'}
                    value={inputsValues.preparationTime}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    isCorrect={isValidated.preparationTime}
                    type={'time'}
                    step={2}
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
            </InputsWrapper>
        </Container>
    );
};