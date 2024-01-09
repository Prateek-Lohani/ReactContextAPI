import React, { useContext } from 'react'
import { UserContext } from '../utils/Context';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const {users}=useContext(UserContext);
    const navigate=useNavigate();
    const {id}=useParams();

    const backHandler=()=>{
        navigate(-1);    
    }


  return (<>   
   <div className='font-bold mb-6'>UserDetail</div>
   <div className='p-4 w-fit h-fit bg-red-200 rounded-lg'>
    <p> <span className='font-serif text-green-700'>UserName:</span> {users[id].username}</p>
    <p><span className='font-serif text-green-700'>City :</span> {users[id].city}</p>
   </div>
    <button onClick={backHandler} className='mt-6 w-fit px-4 py-1 text-center bg-blue-700'><IoIosArrowBack/></button>
  </>

  )
}

export default UserDetails