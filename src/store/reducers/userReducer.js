const defaultState={
    imageAvatar:null,
    name:'',
    phone:'',
    email:'',
    date:'',
    authorization:false,
    dateRegistration:''

}
const userReducer=(state=defaultState,action)=>{
    const stateCopy={...state}
    switch (action.type){
        case 'GET_USER':
            stateCopy.imageAvatar=action.body.imageAvatar
            stateCopy.name=action.body.name
            stateCopy.phone=action.body.phone
            stateCopy.email=action.body.email
            stateCopy.dateRegistration=action.body.dateRegistration
            stateCopy.date=action.body.date
            return stateCopy
        case 'AUTH_TRUE':
            stateCopy.authorization=true
            return stateCopy
        case 'AUTH_FALSE':
            stateCopy.authorization=false
            return stateCopy
        default:
            return state
    }
}
export default userReducer