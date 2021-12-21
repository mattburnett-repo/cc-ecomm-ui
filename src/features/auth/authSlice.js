import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// console.log('api base url ' + API_BASE_URL);

export const localAuthLogin = createAsyncThunk (
    'auth/localAuthLogin',
    async ( props ) => {
        const { username, password } = props;
        console.log('localAuthLogin')
        console.log('authSlice: username: ' + username + ' password: ' + password);
        
        // TODO: API call goes here... Use Passport local strategy.
        //      this fails, and sends back Swagger doc
        //          we want to keep the local / oauth login strategies on the api server
        //              but we need to be able to log in here as well
        //          maybe have separate login routes on api server for remote login
        //              zB /auth/login, auth/oauth
        //          OR
        //              spend a lot of time trying to make something that can't work, work...
        //      look for token / localstorage???
        
        // try {
        //     const response = await fetch(
        //         API_BASE_URL,
        //         {
        //         method: "POST",
        //         headers: {
        //             Accept: "application/json, application/x-www-form-urlencoded",
        //             // "Content-Type": "application/json",
        //             "Content-Type": "application/x-www-form-urlencoded",
        //         },
        //         body: JSON.stringify({
        //             username: username,
        //             password: password,
        //         }),
        //         }
        //     )

        //     // let data = await response.json()
        //     let data = await response;

        //     // console.log("data ", data)

        //     if (response.status === 200) {
        //     //   localStorage.setItem("token", data.token)
        //     //   return { ...data, username: name, email: email }
        //         let userData = {user_id: 4, username: username, someFakeAuthToken: 'asdlfue84to53fkasjhgkah'} // FIXME: better as an array?

        //          return {userData: userData, isAuthorized: true}  
        //     } else {
        //     //   return thunkAPI.rejectWithValue(data)
        //        console.log('authSlice un successful')
        //        return {message: 'login un successful', isAuthorized: false} 
        //     }
        // } catch (e) {
        // console.log("Error", e.response.data)
        // // return thunkAPI.rejectWithValue(e.response.data)
        // }

        // basic test
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
            console.log('error in auth/localAuthLogin: ' + e);
        } // end basic test
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
