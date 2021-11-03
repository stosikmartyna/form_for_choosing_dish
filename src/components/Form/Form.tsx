import React, { ChangeEvent, useState } from 'react';
import { PizzaDetails } from '../PizzaDetails/PizzaDetails';
import { SoupDetails } from '../SoupDetails/SoupDetails';
import { SandwichDetails } from '../SandwichDetails/SandwichDetails';
import { 
    initialValues, 
    InputsValues, 
    FormValidation, 
    validatedValues,
    DISH_TYPE,
    dishTypes,
} from '../../utils/types';
import {
    Container,
    InputsWrapper,
    Header,
    Label,
    Input,
    TimeInput,
    Select,
    StyledOption,
    ButtonsWrapper,
    SubmitButton,
    ClearButton
} from './Form.styles';
import { postFormValues } from '../../api/api';

export const Form: React.FC = () => {
    const [inputsValues, setInputsValues] = useState<InputsValues>(initialValues);
    const [isValidated, setIsValidated] = useState<FormValidation>(validatedValues);

    const postForm = async() => {
        try {
            await postFormValues(inputsValues);
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
    };

    const isFormValid =
        !!inputsValues.name.trim()
        && !!inputsValues.preparationTime
        && !!inputsValues.type 
        && ((inputsValues.type === DISH_TYPE.PIZZA 
            && !!inputsValues.noOfSlices && !!inputsValues.diameter) 
            || (inputsValues.type === DISH_TYPE.SOUP
                && !!inputsValues.spicinessScale) 
                || (inputsValues.type === DISH_TYPE.SANDWICH
                    && !!inputsValues.slicesOfBread));
    
    const handleSubmit = () => {
        const submitValidatedForm = () => {
          postForm();
        };

        isFormValid && submitValidatedForm();
        setInputsValues(initialValues);
        setIsValidated(validatedValues);
    };

    const clearForm = () => {
        setInputsValues(initialValues);
        setIsValidated(validatedValues);
    };

    return (
        <Container backgroundType={inputsValues.type}>
            <InputsWrapper>
                <Header>Order your dish</Header>
                <Label isCorrect={isValidated.name}>Name</Label>
                <Input 
                    id={'name'}
                    value={inputsValues.name}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    isCorrect={isValidated.name}
                />
                <Label isCorrect={isValidated.preparationTime}>Preparation time</Label>
                <TimeInput
                    type={'time'}
                    step={2}
                    id={'preparationTime'}
                    value={inputsValues.preparationTime}
                    onChange={handleInputChange}
                    onBlur={validateInput}
                    isCorrect={isValidated.preparationTime}
                />
                <Label isCorrect={isValidated.type}>Dish type</Label>
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
                <ButtonsWrapper>
                    <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>Submit</SubmitButton>
                    <ClearButton onClick={clearForm}>Clear</ClearButton>
                </ButtonsWrapper>
            </InputsWrapper>
        </Container>
    );
};