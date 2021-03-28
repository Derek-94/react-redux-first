import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux"
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return <Counter number = {number} onIncrease = {increase} onDecrease = {decrease}/>
}

const mapStateToProps = (state) => ({
    number: state.counterReducer.number,
})

const mapDispatchToProps = (dispatch) => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);