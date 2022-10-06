import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "./slices/potentialCountriesSlice"
// ^^^ “potentialCountriesReducer” should not be surrounded with curly brackets since the reducer is the default export from potentialCountriesSlice, we can simply import it directly. ^^^
import displayedCountryReducer from "./slices/displayCountrySlice";

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer,
    },
});