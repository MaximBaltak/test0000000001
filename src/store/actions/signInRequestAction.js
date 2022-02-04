import {authorisation} from "../../api/request";

const signInRequestAction =()=>{
    return async (dispatch,getState)=>{
        const state=getState()
        try {
            const form = new FormData()
            form.append('username',state.form.phone)
            form.append('password',state.form.password)
            const {data}=await authorisation(form)
            localStorage.setItem('token',JSON.stringify(data.access_token))
          dispatch({type:'SIGN_IN'})
        }catch (e){
            console.log(e)
        }
    }
}
export default signInRequestAction