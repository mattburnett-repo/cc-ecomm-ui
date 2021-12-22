import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log('api base url ' + API_BASE_URL);

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

            console.log('authSlice pre text')
            try {
                let text = await response.text();
                console.log('text ' + text)
            } catch(e) {
                console.log('text json error' + e.message)
            }
            
            // let text = await response.text()
            // let body = await text.body();

            // console.log('data ' + data)
            
            console.log('authSlice post await response')

            if (response.status === 200) {
                
                // const { id, user_name, email} = response;
                //   localStorage.setItem("token", data.token)
                //   return { ...data, username: name, email: email }

                // let userData = {user_id: id, username: user_name, email: email, someFakeAuthToken: 'asdlfue84to53fkasjhgkah'} // FIXME: better as an array?
                // return {userData: userData, isAuthorized: true}  
                return {isAuthorized: true} 
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

// TODO: implement better this once we get auth flow sorted out
// export const localAuthLogout = createAsyncThunk (
//     'auth/localAuthLogout',
//     async ( props ) => {
//         // const {user_id } = await props;

//         console.log('localAuthLogout')

//         try { 
//             if(true) { // FIXME
//                 return { isAuthorized: false }
//             } 
//         } catch (e) {
//             console.log('error in auth/localAuthLogout: ' + e);
//         } // end try catch
//     }
// ) // end localAuthLogout

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
        localAuthLogout: (state, action) => {
            state.userData = '';
            state.isLoading = false;
            state.hasError = false;
            state.isAuthorized = false;
            state.errorMsg = '';
        }
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
                state.userData = action.payload.userData;
                state.isLoading = false;
                state.hasError = false;
                state.isAuthorized = action.payload.isAuthorized;
                // state.isAuthorized = true
                state.errorMsg = '';
            })
            .addCase(localAuthLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.errorMsg = action.error; 
            })  
    } // end extraReducers
} // end options

export const selectIsAuthorized = state => state.auth.isAuthorized;
export const selectUserData = state => state.auth.userData;

export const authSlice = createSlice(options);
export const { localAuthLoginTestOutput , localAuthLogout } = authSlice.actions;

export default authSlice.reducer;
