import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    objectId: 5500,
    apiData: {}
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => ({ ...state, apiData: action.payload}),
        incrementId: () => {},
        decrementId: () => {},
        customId: () => {},
        clearData: () => {}
    }
})