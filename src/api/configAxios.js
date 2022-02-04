import axios from "axios";

 const axiosConfig=axios.create({
    baseURL:'https://testtask.softorium.pro',
    headers:{
        'X-APP-ID':'',
        'Content-Type':'application/json'
    }
})
axiosConfig.interceptors.request.use(req=>{
    if(localStorage.getItem('idApp')){
        req.headers['X-APP-ID']=localStorage.getItem('idApp')
        return req
    }
    return req
})

export default axiosConfig
