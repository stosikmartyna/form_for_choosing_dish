export interface InputsValues {
    name: string;
    preparationTime: string;
    type: string;
    noOfSlices?: number;
    diameter?: number;
    spicinessScale?: number;
    slicesOfBread?: number;
}

export const initialValues = {
    name: '',
    preparationTime: '',
    type: '',
    noOfSlices: undefined,
    diameter: undefined,
    spicinessScale: undefined,
    slicesOfBread: undefined,
}

export interface FormValidation {
    name?: boolean;
    preparationTime?: boolean;
    type?: boolean;
    noOfSlices?: boolean;
    diameter?: boolean;
    spicinessScale?: boolean;
    slicesOfBread?: boolean;
}

export const validatedValues = {
    name: undefined,
    preparationTime: undefined,
    type: undefined,
    noOfSlices: undefined,
    diameter: undefined,
    spicinessScale: undefined,
    slicesOfBread: undefined,
}

export enum DISH_TYPE {
    PIZZA = 'pizza',
    SOUP = 'soup',
    SANDWICH = 'sandwich',
}

export const dishTypes = [
    { value: '', label: 'Dish type' },
    { value: 'pizza', label: 'Pizza' },
    { value: 'soup', label: 'Soup' },
    { value: 'sandwich', label: 'Sandwich' }
];