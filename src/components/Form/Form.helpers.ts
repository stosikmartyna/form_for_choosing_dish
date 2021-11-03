import { DISH_TYPE, InputsValues } from '../../utils/types';

export const isFormValid = (inputsValues: InputsValues) => {
    return !!inputsValues.name.trim()
        && !!inputsValues.preparationTime
        && !!inputsValues.type 
        && ((inputsValues.type === DISH_TYPE.PIZZA && !!inputsValues.noOfSlices && !!inputsValues.diameter) 
            || (inputsValues.type === DISH_TYPE.SOUP && !inputsValues.spicinessScale) 
                || (inputsValues.type === DISH_TYPE.SANDWICH && !!inputsValues.slicesOfBread))
}