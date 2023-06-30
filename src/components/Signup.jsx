import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"
import'./signup.css'
import { apiDomain } from "../utils/utils"

export function Signup() {
  const navigate = useNavigate();
 
  const schema = yup.object().shape({
    Username: yup.string().required("Username is required"),
    Email: yup.string().email().required("Email is required"),
    Password: yup.string().required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data)=>{
    axios.post(`${apiDomain}/auth/signup`, data)
    .then((response)=>{
      response.data.message && alert(response.data.message);
      navigate("/")     
      // console.log(res);
    })
    .catch((error)=>{
     alert(error.response.data.message);
    // console.log(error);
      

    })
    // navigate("/login")
    

  }


  return (
    <div className='container'>

        <div id="signupFormField">
            <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Welcome to SyncCliA!</h2>

                <input className='signupInput' type="text" placeholder='Username' { ...register("Username") } /><br/>
                <p>{errors.Username?.message}</p>
                <input className="signupInput" type="email" placeholder='Email' { ...register ("Email")} /><br/>
                <p>{errors.Email?.message}</p>
                <input className ='signupInput' type="password" placeholder='Password' { ...register("Password")} />
                  <p>{errors.Password?.message}</p>
                <input type="submit" value="Submit" id='signupbtn'/>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
