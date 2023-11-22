import { INCREMENT,DECREMENT } from '../Action/IncDecAction';

const InitialValue={
    Number:1
}

const Reducer = (state = InitialValue, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                Number: state.Number + action.value
            }
        case DECREMENT:
            return {
                ...state,
                Number: state.Number - action.value
            }
            default:
                return state
    }

}
export default Reducer;