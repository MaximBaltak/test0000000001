const toBase64= file=>new Promise((resolve,reject)=>{
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>resolve(reader.result)
    reader.onerror=()=>reject(null)
})

const addFileAction=file=>{
    return async dispatch=>{
        const base64= await toBase64(file)
        dispatch({type:'CHANGE_IMAGE_AVATAR',image:base64})
    }
}
export default addFileAction