import './addAction.css'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Axios from 'axios'
import { useContext } from 'react'
import { Context } from '../context/userContext/Context'
import { apiDomain } from '../utils/utils'
import gogreen from '../assets/gogreen.jpg'
function AddAction() {
  const { user } = useContext(Context);
  const schema = yup.object().shape({
    Title: yup.string().required(),
    Reflection: yup.string().required()
  });
  const { register, handleSubmit, formState: { errors },reset} = useForm({
    resolver: yupResolver(schema)
  });
  // console.log(user.token);
  const onSubmit = async(data) =>{
    Axios.post(`${apiDomain}/actions`,data,{
      headers: {
        "authorization": `${user.token}`,
      }
    }).then((response)=>{
      reset();
      // console.log(user.token);
      console.log(response);
      response.data.message && alert(response.data.message)
    }).catch((response)=>{
      alert(response.data.error)
      // console.log(error);
    })

  }
  return (
    <div>
        <div className="actionsForm">
          <img id='gogreenImg' src={gogreen} alt="gogreenImg" />
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3>Title:</h3>
                <input type="text" placeholder='Title' {...register("Title")} />
                <p>{errors.Title?.message}</p>
                <h3>Reflection:</h3>
                <textarea name="" id="" cols="50" rows="5" placeholder='Reflection' {...register("Reflection")}></textarea>
                <p>{errors.Reflection?.message}</p>
                <input type="submit" value= "SAVE" />
            </form>
        </div>
      
    </div>
  )
}

export default AddAction
