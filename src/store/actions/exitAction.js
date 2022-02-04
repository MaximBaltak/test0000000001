const exitAction=()=>{
    localStorage.removeItem('token')
    return {
        type:'EXIT'
    }
}
export default exitAction