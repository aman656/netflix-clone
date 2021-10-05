import {createSlice,configureStore} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{email:"",authenticated:localStorage.getItem("token")?localStorage.getItem("token"):false,token:localStorage.getItem("token")},
    reducers:{
        emailDispatching(state,action){
            state.email = action.payload
        },
        login(state,action){
            localStorage.setItem("token",action.payload.token)
            state.email = action.payload.email;
            state.authenticated = true;
            state.token = action.payload.token;

        }
    }
})

export const signingUp = (url,email,password)=>{
    return async ()=>{
        const response = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:false
            }),headers:{"Content-Type":"application/json"}
        })
        return response;

}}


export const loggingIn = (url,email,password,history)=>{
    return async (dispatch)=>{
        await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                email:email,
                password:password,
                returnSecureToken:true
            }),headers:{"Content-Type":"application/json"}
        }).then((res)=>{
            if(res.ok){
                return res.json()
            }else{
                throw new Error("Credentials Mismatch")
            }
        }).then((data)=>{
            dispatch(authActions.login({email:email,authenticated:true,tken:data.tokenId}))
            history.push("/mid");

        }).catch((err)=>{
            alert(err.message)

        })


    }

}













const store = configureStore({
    reducer:{authSlice:authSlice.reducer}
})

export const authActions = authSlice.actions

export default store