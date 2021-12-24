import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const localAuthLogin = createAsyncThunk (
    'auth/localAuthLogin',
    async ( props ) => {
        const { username, password } = props;     
        let theApiUrl = API_BASE_URL + '/auth/local'

        // FIXME: needs to test if server is available and handle when it's down
        //          test for response ERR_CONNECTION_REFUSED
        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                    }),
                }
            )

            let data = await response.json()

            if(response.status === 401) {
                console.log('401 unauthorized message from passport / server')
                // send flash message / redirect to login
                return {isAuthorized: false}  
            } else if (response.status === 200) {
                const { id, user_name, email } = data.user;
                const { token } = data;
                
                // localStorage.setItem("token", data.token)

                return {user_id: id, username: user_name, email: email, jwtAuthToken: token};
            } else {
            //   return thunkAPI.rejectWithValue(data)
                console.log('response.status ' + response.status + ' authSlice fetch un successful')
                return {message: 'login un successful', isAuthorized: false} 
            }
        } catch (e) {
            console.log("Error ", e.response.data)
            // return thunkAPI.rejectWithValue(e.response.data)
        }
    }
) // end localAuthLogin

// TODO: implement better this once we get auth flow sorted out. API needs a route to handle this
export const localAuthLogout = createAsyncThunk (
    'auth/localAuthLogout',
    async ( ) => {
        console.log('localAuthLogout')
        let theApiUrl = API_BASE_URL + '/auth/logout'
        try { 
            const response = await fetch(
                theApiUrl,
                {
                    method: 'POST',
                    headers: {
                        'Accept': "*/*",
                        'Content-Type': "application/json"
                    },
                }
            )

            if (response.status === 200) {            
                return {userData: '', isAuthorized: false}  
            } else {
            //   return thunkAPI.rejectWithValue(data)
                console.log('response.status ' + response.status + ' authSlice fetch un successful')
                return {message: 'logout un successful'} 
            }
        } catch (e) {
            console.log('error in auth/localAuthLogout: ' + e);
        } // end try catch
    }
) // end localAuthLogout

const options = {
    name: 'auth',
    initialState: {
        userData: '',
        isLoading: false,
        hasError: false,
        errorMsg: '',
        isAuthorized: false
    },   
    reducers: {     
        localAuthLoginTestOutput: (state, action) => {       
            console.log('auth/local/login/testOutput');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(localAuthLogin.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.isAuthorized = false;
                state.errorMsg = '';
            })
            .addCase(localAuthLogin.fulfilled, (state, action) => {
                state.userData = action.payload;
                state.isLoading = false;
                state.hasError = false;
                state.isAuthorized = true;
                state.errorMsg = '';
            })
            .addCase(localAuthLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  

            .addCase(localAuthLogout.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
                state.isAuthorized = false;
                state.errorMsg = '';
            })
            .addCase(localAuthLogout.fulfilled, (state, action) => {
                state.userData = action.payload.userData;
                state.isLoading = false;
                state.hasError = false;
                state.isAuthorized = action.payload.isAuthorized;
                state.errorMsg = '';
            })
            .addCase(localAuthLogout.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectIsAuthorized = state => state.auth.isAuthorized;
export const selectUserData = state => state.auth.userData;
export const selectJwtToken = state => state.auth.userData.jwtAuthToken;

export const authSlice = createSlice(options);
export const { localAuthLoginTestOutput } = authSlice.actions;

export default authSlice.reducer;
