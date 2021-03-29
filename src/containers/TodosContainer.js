import React, { useCallback } from "react"
import Todos from "../components/Todo";
import { useSelector, useDispatch } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = () => {
    const {input, todos} = useSelector(state => ({
        input: state.todosReducer.input,
        todos: state.todosReducer.todos
    }))
    const dispatch = useDispatch();
    const onChangeInput = useCallback((text) => dispatch(changeInput(text)), [dispatch]);
    const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch])

    return (
        <Todos
            input = {input}
            todos = {todos}
            onChangeInput = {onChangeInput}
            onInsert = {onInsert}
            onToggle = {onToggle}
            onRemove ={onRemove}
        />
    )
}

export default TodosContainer;