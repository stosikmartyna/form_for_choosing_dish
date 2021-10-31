export interface InputValues {
    name: string;
    preparationTime: string;
    type: string;
}

export const initialValue = {
    name: '',
    preparationTime: '',
    type: ''
}

export const types = [
    { value: 'Pizza', label: 'Pizza' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Sandwich', label: 'Sandwich' }
];