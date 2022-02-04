import axiosConfig from "./configAxios";

export const registration=body=>{
    return axiosConfig.post('/signup',body)
}
export const authorisation=form=>{
    return axiosConfig.post('/signin',form,{
        headers:{
            'Content_Type':"multipart/form-data"
        }
    })
}
export const getUser=()=>{
    const token=JSON.parse(localStorage.getItem('token'))
    return axiosConfig.get('/users/me',{
        headers:{
            'Authorization':`Bearer ${token}`
        }
    })
}