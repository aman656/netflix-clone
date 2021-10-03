import {createSlice,configureStore} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{email:"",password:""},
    reducers:{
        emailDispatching(state,action){
            state.email = action.payload
        }
    }
})

const store = configureStore({
    reducer:{authSlice:authSlice.reducer}
})

export const authActions = authSlice.actions

export default store