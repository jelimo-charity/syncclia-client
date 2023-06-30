import { useEffect, useContext, useState } from 'react'
import Axios from 'axios'
import './actionList.css'
import { apiDomain } from '../utils/utils';
import { Context } from '../context/userContext/Context';
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import UpdateForm from './UpdateForm';
// import teamImg from '../assets/team.jpg'

function ActionList() {
  const { user } = useContext(Context);
  const [actions, setActions] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false)
  const [tempAction, setTempAction] = useState('')

  const getActions = async () => {
    try {
      const res = await Axios.get(`${apiDomain}/actions`, {
        headers: {
          "authorization": `${user.token}`
        }
      });
      setActions(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getActions();
  }, []);

  const handleDelete = async (ActionID) => {
    await Axios.delete(`${apiDomain}/actions/${ActionID}`,
    { headers: {
        "authorization": `${user.token}`
    }}).then((res)=>{
        getActions();
        alert(res.data.message)
    }).catch(({response})=>{
        alert(response.data.error)
    })
    // console.log(ActionID);

  };

  const handleEdit = async (data) =>{
    setTempAction(data)
    setShowEditForm(!showEditForm)

  }
  

  return (
    <div>
      <div className="actionListWrapper">
        {actions && actions.map((action, index) => (
          <div className="actionCard" key={index}>
            {/* <img id='teamImg' src={teamImg} alt="go-greenImg" /> */}
            <p className='title'>{action.Title}</p>
    
            <p className='reflection'>{action.Reflection}</p>
            <div className="cardButtons">
              <p className="editBtn" onClick={ ()=>{handleEdit(action)}}><FaEdit />Edit</p>
              <p className="deleteBtn" onClick={() => handleDelete(action.ActionID)}><MdDelete />Delete</p>
              {
                showEditForm && <UpdateForm setShowEditForm = {setShowEditForm} action={tempAction} getActions={getActions}/>
              }
              {/* const name = (params)  {
                
              } */}
              
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default ActionList;
