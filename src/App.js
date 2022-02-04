import './App.scss';
import Profile from "./pages/Profile/Profile";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
function generateId(){
  let idApp=''
  let i =0
  while (i<10){
    const num1=Math.floor(Math.random()*(66-43))+43
    const num2=Math.floor(Math.random()*(120-95))+95
    idApp +=String.fromCharCode(num1,num2)
    i++
  }
  return idApp
}
function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!localStorage.getItem('idApp')){
      const id=generateId()
      console.log(id)
      localStorage.setItem('idApp',id)
    }
  },[])
  useEffect(()=>{
    setInterval(()=>{
      if(localStorage.getItem('token')){
        dispatch({type:'AUTH_TRUE'})
      }else {
        dispatch({type:'AUTH_FALSE'})
      }
    },500)
  },[])
  return (
    <>
    <Profile/>
    </>
  );
}

export default App;
