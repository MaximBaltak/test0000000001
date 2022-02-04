import {getUser} from "../../api/request";

const getUserRequestAction=()=>{
    return async dispatch=>{
        try {
            const {data}=await getUser()
            console.log(data)
            const body={
                phone:data.phone,
                name:data.name,
                email:data.email,
                date:data.birthday,
                imageAvatar: data.avatar,
                dateRegistration: data.dt_create
            }
            dispatch({type:'GET_USER',body})
        }catch (e){
            console.log(e)
        }
    }
}
export default getUserRequestAction