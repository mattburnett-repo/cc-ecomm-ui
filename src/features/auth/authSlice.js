import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log('api base url ' + API_BASE_URL);

export const localAuth = createAsyncThunk (
    'auth/localAuth',
    async ( props ) => {
        const { username, password } = props;
        console.log('authSlice: username: ' + username + ' password: ' + password);

        try {
            if(username === 'asdf' && password === 'asdf') {
                console.log('authSlice successful')

                let userData = {user_id: 4, username: username, someFakeAuthToken: 'asdlfue84to53fkasjhgkah'} // FIXME: better as an array?

                return {userData: userData, isAuthorized: true}        // TODO: not sure if this is... legal, but it works...
            } else {
                console.log('authSlice un successful')
                return {message: 'login un successful', isAuthorized: false}    // TODO: not sure if this is... legal, but it works...

            }
        } catch (e) {   
            console.log('error in auth/localAuth: ' + e);
        } // end try catch
    }
) // end localAuth

const options = {
    name: 'auth',
    initialState: {
        userData: [{message: 'nope'}],
        isLoading: false,
        hasError: false,
        errorMsg: '',
        isAuthorized: false
    },   
    reducers: {     
        authLocalLoginTestOutput: (state, action) => {       
            console.log('auth/local/login/testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(localAuth.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.isAuthorized = false;
                state.errorMsg = '';
            })
            .addCase(localAuth.fulfilled, (state, action) => {
                state.userData = action.payload.userData;
                state.isLoading = false;
                state.hasError = false;
                state.isAuthorized = action.payload.isAuthorized;
                state.errorMsg = '';
            })
            .addCase(localAuth.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectIsAuthorized = state => state.auth.isAuthorized;
export const selectUserData = state => state.auth.userData;

export const authSlice = createSlice(options);
export const { authLocalLoginTestOutput } = authSlice.actions;

export default authSlice.reducer;
