/* eslint-disable react/jsx-key */
import './blogs.css'
import blogData from './blogs'
import { useNavigate } from 'react-router-dom'

function Blogs() {
    const navigate = useNavigate();
  return (
    <div className='blogsContainer'>
        <h2 id='blogsHeading'>Read Blogs on Climate Action</h2>
        <div className="blogsWrapper">
            {blogData.map(({title,  content})=>{
                return(
                    <div className="blogCard">
                        <h2 className='blogsTitle'>{title}</h2>
                        <p className='blogsContent'>{content}</p>
                        <button id='readmoreBtn' onClick={ () =>navigate('/')}>Read more</button>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Blogs
