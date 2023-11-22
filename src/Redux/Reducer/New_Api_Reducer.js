import { Get_API_Response } from '../Action/CallAPIAction';

const initialState = {
    list: null
}

const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case Get_API_Response:
            return {
                ...state,
                list: action.value
            }
        default:
            return state
    }
}
export default ApiReducer