const defaultState={
    imageAvatar:null,
    login:'',
    password:'',
    phone:'',
    email:'',
    date:'',
    toggleForm:'signUp'

}
const formReducer=(state=defaultState,action)=>{
    const stateCopy={...state}
    switch (action.type){
        case 'CHANGE_IMAGE_AVATAR':
            stateCopy.imageAvatar=action.image
            return stateCopy
        case 'CHANGE_LOGIN':
            stateCopy.login=action.login
            return stateCopy
        case 'CHANGE_PASSWORD':
            stateCopy.password=action.password
            return stateCopy
        case 'CHANGE_PHONE':
            stateCopy.phone=action.phone
            return stateCopy
        case 'CHANGE_EMAIL':
            stateCopy.email=action.email
            return stateCopy
        case 'CHANGE_DATE':
            stateCopy.date=action.date
            return stateCopy
        case 'TOGGLE_FORM':
            stateCopy.toggleForm=action.typeForm
            return stateCopy
        case 'SIGN_UP':
            stateCopy.date=''
            stateCopy.imageAvatar=''
            stateCopy.login=''
            stateCopy.password=''
            stateCopy.phone=''
            stateCopy.email=''
            stateCopy.toggleForm='signIn'
            return stateCopy
        case 'SIGN_IN':
            stateCopy.date=''
            stateCopy.imageAvatar=''
            stateCopy.login=''
            stateCopy.password=''
            stateCopy.phone=''
            stateCopy.email=''
            stateCopy.toggleForm='exit'
            return stateCopy
        case 'EXIT':
            stateCopy.toggleForm='signUp'
            return stateCopy
        default:
            return state
    }
}
export default formReducer