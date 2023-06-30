import './signin.css'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../context/userContext/Context'
import {apiDomain} from '../utils/utils'



export default function Signin() {
  const { user, dispatch } = useContext(Context);
  console.log(user);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required(),
    Password: yup.string().required()
  });
  const { register, handleSubmit, formState: {errors}}= useForm({
    resolver: yupResolver(schema)
  }
  );
  const onSubmit=(data) => {
    Axios.post(`${apiDomain}/auth/login`, data)
    .then(({data})=>{
      if(data.token){
      dispatch({type: "LOGIN_SUCCESSFUL", payload: data})

        alert("logged in successfully")
        navigate('/actions')
        
      }
    })
    .catch((response)=>{
      console.log(response);

    } )
  }
  return (
    <div>
        <div className="container">
          <div className="synccliaDetails">
                <h1>SyncCliA</h1><br/>
                {/* <p>A simple way to sync your climate actions with your friends</p> */}
                <p>Welcome to SyncCliA,<br/> your go-to destination for climate action inspiration and 
                  impact!</p>  
                <p id='join-para'>Join our community of changemakers and be part of the movement driving 
                  positive change for our planet.</p>
                 
          </div>
          <div className="formDetails">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login!</h2>
                <input type="text"{...register('Username')}  placeholder='Username' /><br/>
                <p>{errors.Username?.message} </p>
                <input type="password" {...register('Password')} placeholder='Password' /><br/>
                <p> {errors.Password?.message} </p>
                <input type="submit" id='submit-btn'/> <br/>
                <p id='register-para'>Dont Have Account? </p>
                <span> <button id='btn' onClick={()=>navigate('./register')}>Signup</button></span>
            </form>
          </div>
      
           </div>

        </div>
  
  )  
}





