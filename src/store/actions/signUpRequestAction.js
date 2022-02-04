import {registration} from "../../api/request";

const signUpRequestAction=()=>{
    return async (dispatch,getState)=>{
        const state=getState()
        try {
            const body={
                phone:state.form.phone,
                name:state.form.login,
                email:state.form.email,
                birthday:state.form.date,
                avatar_img: `Base64 ${state.form.imageAvatar}`,
                password: state.form.password
            }
            const {data}=await registration(body)
            console.log(data)
            dispatch({type:'SIGN_UP'})
        }catch (e){
            console.log(e)
        }
    }
}
export default signUpRequestAction