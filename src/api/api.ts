import { InputsValues } from "../utils/types"
import axios from 'axios';

export const postFormValues = async (values: InputsValues) => {
    await axios.post('https://frosty-wood-6558.getsandbox.com:443/dishes', values)
}