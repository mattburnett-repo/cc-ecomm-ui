// import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';
import { createSlice }  from '@reduxjs/toolkit';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log('api base url ' + API_BASE_URL);

const options = {
    name: 'login',
    initialState: {
        token: {                
            value: '',
            expiresIn: 0,
            expireStart: 0,
            expireEnd: 0
        },
        isLoading: false,
        hasError: false,
        errorMsg: ''
    },   
    reducers: {     
        testOutput: (state, action) => {       
            console.log('login/testOutput');
        },
    }
} // end options

export const loginSlice = createSlice(options);
export const { testOutput } = loginSlice.actions;

export default loginSlice.reducer;