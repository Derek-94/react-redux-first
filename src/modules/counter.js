// action type definition
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// make action constructor function
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});

const initialState = {
    number: 0
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default counterReducer;