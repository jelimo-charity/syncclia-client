import  { useContext, useEffect, useState } from 'react';
import './updateForm.css';
import { Context } from '../context/userContext/Context';
import { apiDomain } from '../utils/utils';
import Axios from 'axios';

function UpdateForm({ setShowEditForm, action, getActions }) {
  const [title, setTitle] = useState('');
  const [reflection, setReflection] = useState('');

  useEffect(() => {
    setTitle(action.title || '');
    setReflection(action.reflection || '');
  }, [action]);
  const { user } = useContext(Context)

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(
        `${apiDomain}/actions/${action.ActionID}`,
        { Title: title, Reflection: reflection },
        { headers: { Authorization: `${user.token}` } }
      );
      getActions();
      alert(response.data.message);
    } catch (error) {
        console.log(error);
    //   if (error.response && error.response.data && error.response.data.error) {
    //     alert(error.response.data.error);
    //   } else {
    //     console.log('An error occurred while updating the action:', error);
    //   }
    }
  };
  
  return (
    <div>
      <div className="updateForm">
        <form className="form">
          <h2>Title:</h2>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h2>Reflection:</h2>
          <textarea
            name="reflection"
            cols="30"
            rows="5"
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
          ></textarea>
          <div className="btnUpdates">
            <button onClick={() => setShowEditForm(false)}>Close</button>
            <button type="submit" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
