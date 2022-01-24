import {createSlice} from "@reduxjs/toolkit";
import {fetchTemplates} from "./actions";
import {IUser} from "../../models/user/IUser";

interface CounterState {
    data: IUser[]
}

const initialState: CounterState = {
    data: [],
};

export const templateReducer = createSlice({
    name: 'template',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTemplates.fulfilled.type]: (state, action) => {
            state.data = action.payload;
        },
        [fetchTemplates.rejected.type]: (state, action) => {
        },
        [fetchTemplates.pending.type]: (state) => {
        }
    }
})