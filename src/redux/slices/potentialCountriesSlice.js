import { createSlice } from "@reduxjs/toolkit";
// ^^^ The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state. ^^^
export const potentialCountriesSlice = createSlice({
    name: "potentialCountries",
    initialState: {
        value: [
            {
                name: {
                    common: "America"
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        },
    },
});

export const { setPotentialCountries, deletePotentialCountries } = potentialCountriesSlice.actions;

export const selectPotentials = (state) => {
    return state.potentialCountries.value
};
// ^^^ This function defines how to read the state of potentialCountries ^^^
export default potentialCountriesSlice.reducer
// ^^^ The reducer from potentialCountriesSlice is created by the “createSlice” method from “@reduxjs/toolkit” in line 1 ^^^