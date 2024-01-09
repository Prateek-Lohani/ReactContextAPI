import React, { useContext } from 'react'
import UserDetails from './UserDetails'
import { UserContext } from '../utils/Context'
import { Link } from 'react-router-dom';


const User = () => {

const {users}=useContext(UserContext);


  return (
    <div>
        <h1 className='font-bold mb-6'>User List</h1>
            {users.map((user)=>{
                return(
                    <div key={user.id}>
            <div className='text-md p-2 rounded hover:bg-blue-500 mb-2 w-fit bg-blue-700 text-center'>
                    <Link className='text-white w-full h-full' to={`/user/${user.id}`}>{user.username}</Link>
                    </div>
                    </div>
                )
            })}
        
    </div>
  )
}

export default User