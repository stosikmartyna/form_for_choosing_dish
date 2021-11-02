export interface InputValues {
    name: string;
    preparationTime: string;
    type: string;
    noOfSlices: number | undefined;
    diameter: number | undefined;
    spicinessScale: number | undefined;
    slicesOfBread: number | undefined;
}

export const initialValue = {
    name: '',
    preparationTime: '',
    type: '',
    noOfSlices: undefined,
    diameter: undefined,
    spicinessScale: undefined,
    slicesOfBread: undefined,
}

export interface IsUserValidated {
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

export const types = [
    { value: 'pizza', label: 'Pizza' },
    { value: 'soup', label: 'Soup' },
    { value: 'sandwich', label: 'Sandwich' }
];

export const spicinessScale = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' }
];