import { createAction, handleActions } from "redux-actions";

// action type definition
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// make action constructor function
// export const increase = () => ({type: INCREASE});
// export const decrease = () => ({type: DECREASE});
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
    number: 0
};

function originalCounterReducer(state = initialState, action) {
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

const counterReducer = handleActions({
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
);

export default counterReducer;