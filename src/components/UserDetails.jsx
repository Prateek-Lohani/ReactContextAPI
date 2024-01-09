import React, { useContext } from 'react'
import { UserContext } from '../utils/Context';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const {users}=useContext(UserContext);
    const navigate=useNavigate();


    const backHandler=()=>{
        navigate(-1);    
    }

  return (<>   
   <div className='font-bold'>UserDetail</div>
    <button onClick={backHandler} className='mt-6 w-fit px-4 py-1 text-center bg-blue-700'><IoIosArrowBack/></button>
  </>

  )
}

export default UserDetails