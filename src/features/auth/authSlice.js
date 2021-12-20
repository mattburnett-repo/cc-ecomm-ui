import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log('api base url ' + API_BASE_URL);

const options = {
    name: 'auth',
    initialState: {
        isLoading: false,
        hasError: false,
        errorMsg: '',
        isAuthorized: false
    },   
    reducers: {     
        authLocalLoginTestOutput: (state, action) => {       
            console.log('auth/local/login/testOutput');
        },
    }
} // end options

export const selectIsAuthorized = state => state.auth.isAuthorized;

export const authSlice = createSlice(options);
export const { authLocalLoginTestOutput } = authSlice.actions;

export default authSlice.reducer;
