import { createSlice } from '@reduxjs/toolkit'

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },

        removeItem: (state, action) => {
            const {id} = action.payload;
            state = state.filter(item => item !== item.id);
        }
    }
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = todoListSlice.actions

export default todoListSlice.reducer