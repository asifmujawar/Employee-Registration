import react, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { adduser,updateUser } from '../features/Users'
function Dashboard() {
    const userList = useSelector((state)=>state.users.value)
    const dispatch = useDispatch();
    const [updateusername,setUpdateusername] = useState();
    console.log(userList)
    useEffect(()=>{
        console.log("state updated")
    },[userList])
    return (
        <div>
            {
                userList.map((data) => (
                    <div className="display-user" style={{ border: '1px solid black', width: '300px', padding: '10px', margin: 'auto', marginTop: '30px' }}>
                        <h4>ID : {data.id}</h4>
                        <h4>Username : {data.username}</h4>
                        <h4>Name : {data.name}</h4>
                        <input type='text' placeholder="Username" onChange={(e) => setUpdateusername(e.target.value)} />
                        <button onClick={(e) => { dispatch(updateUser({ id: data.id, username: updateusername, name: data.name })) }}>update Username</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Dashboard