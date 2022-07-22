import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import todoListReducer from './slices/todoList';

export default configureStore({
    reducer: {
        counter: counterReducer,
        todoList: todoListReducer
    }
})