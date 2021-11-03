import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { PizzaDetails } from '../PizzaDetails/PizzaDetails';
import { SoupDetails } from '../SoupDetails/SoupDetails';
import { SandwichDetails } from '../SandwichDetails/SandwichDetails';
import { 
    initialValue, 
    InputValues, 
    FormValidation, 
    validatedValues,
    DISH_TYPE,
    dishTypes,
} from '../../utils/types';
import {
    Container,
    InputsWrapper,
    Input,
    TimeInput,
    Select,
    StyledOption,
    SubmitButton,
    ClearButton
} from './Form.styles';

export const Form: React.FC = () => {
    const [inputsValues, setInputsValues] = useState<InputValues>(initialValue);
    const [isValidated, setIsValidated] = useState<FormValidation>(validatedValues);

    const postForm = async() => {
        try {
            await axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', inputsValues);
        } catch (error) {
            console.warn(error);
        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const {value, id} = event.target;
        if (value === DISH_TYPE.PIZZA) {
            setInputsValues({
                ...inputsValues,
                slicesOfBread: undefined,
                spicinessScale: undefined,
                [id]: value,
            });
        } else if (value === DISH_TYPE.SOUP) {
            setInputsValues({
                ...inputsValues,
                noOfSlices: undefined,
                diameter: undefined,
                slicesOfBread: undefined,
                [id]: value,
            });
        } else if (value === DISH_TYPE.SANDWICH) {
            setInputsValues({
                ...inputsValues,
                spicinessScale: undefined,
                noOfSlices: undefined,
                diameter: undefined,
                [id]: value,
            });
        } else {
            setInputsValues({
                ...inputsValues,
                [id]: value,
            });
        }
    };

    const validateInput = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isValueEmpty = event.target.value.trim() === '';
        setIsValidated({...isValidated, [event.target.id]: !isValueEmpty})
      }

      const isFormValid =
        !!inputsValues.name.trim()
        && !!inputsValues.preparationTime
        && !!inputsValues.type 
        && ((inputsValues.type === DISH_TYPE.PIZZA 
            && !!inputsValues.noOfSlices && !!inputsValues.diameter) 
            || (inputsValues.type === DISH_TYPE.SOUP
                && !!inputsValues.spicinessScale) 
                || (inputsValues.type === DISH_TYPE.SANDWICH
                    && !!inputsValues.slicesOfBread))
    
      const handleSubmit = () => {
        const submitValidatedForm = () => {
          postForm();
        }

        isFormValid && submitValidatedForm();
        setInputsValues(initialValue);
        setIsValidated(validatedValues);
    };

    const clearForm = () => {
        setInputsValues(initialValue);
        setIsValidated(validatedValues);
    };

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
                    {dishTypes.map(dishType => {
                        return (
                            <StyledOption 
                                disabled={dishType.label === 'Dish type'} 
                                value={dishType.value} 
                                key={dishType.value}
                            >
                                {dishType.label}
                            </StyledOption>
                        )
                    })}
                </Select>

                {inputsValues.type === DISH_TYPE.PIZZA && (
                    <PizzaDetails 
                        inputsValues={inputsValues} 
                        onInputChange={handleInputChange}
                        validateInput={validateInput}
                        isValid={isValidated}
                    />
                )}

                {inputsValues.type === DISH_TYPE.SOUP && (
                    <SoupDetails 
                        inputsValues={inputsValues} 
                        onInputChange={handleInputChange}
                        validateInput={validateInput}
                        isValid={isValidated}
                    />
                )}

                {inputsValues.type === DISH_TYPE.SANDWICH && (
                    <SandwichDetails 
                        inputsValues={inputsValues} 
                        onInputChange={handleInputChange}
                        validateInput={validateInput}
                        isValid={isValidated}
                    />
                )}

                <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
                    Submit
                </SubmitButton>
                <ClearButton onClick={clearForm}>Clear</ClearButton>
            </InputsWrapper>
        </Container>
    );
};