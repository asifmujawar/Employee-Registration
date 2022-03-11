import react, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adduser, updateUser } from '../features/Users'
import '../Styles/Registration.css'
function Registration() {
    const [name, setName] = useState();
    const [department, setDepartment] = useState();
    const [email, setEmail] = useState();
    const [mobno, setMobno] = useState();
    const [address, setAddress] = useState();
    const userList = useSelector((state) => state.users.value)
    const dispatch = useDispatch();
    const [updateusername, setUpdateusername] = useState();
    console.log(userList)
    return (
        <div className="registration-container">
            <div className="registration-box">
                <form>
                    <h3 >Employee Registraton</h3>
                    <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} required={true} /><br />
                    <input type="text" placeholder="Enter Your Department" onChange={(e) => setDepartment(e.target.value)}  required={true} /><br />
                    <input type="text" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}  required={true} /><br />
                    <input type="text" placeholder="Enter Your Mobile Number" onChange={(e) => setMobno(e.target.value)}  required={true} /><br />
                    <input type="text" placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)}  required={true} /><br />
                    <button onClick={(e) => {
                        if (name && email && department && mobno && address) {
                            dispatch(adduser({ name: name, department: department, email: email, mobno: mobno, address: address }))
                        }
                        else{
                            window.alert("All Fields are Reqired")
                        }
                    }}>
                        Add User
                        </button>
                </form>
            </div>
            <div className="register-data" style={{ marginTop: '100px', backgroundColor: 'white', padding: '50px' }}>
                <h2 style={{ textAlign: "center", color: '#4D77FF' }}>Registered Data</h2>
                <div className="row" style={{ marginTop: '30px', padding: '0 50px !important', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        userList.map((data) => (
                            <div className="col-lg-3" style={{ border: '2px solid #4D77FF', width: '310px', margin: '20px 10px', padding: '10px', borderRadius: '10px' }}>
                                <p><span style={{ fontWeight: 'bold' }}>Name</span>          : {data.name}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Department</span>          : {data.department}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Email</span>          : {data.email}</p>
                                <p><span style={{ fontWeight: 'bold' }}>mobno</span>          : {data.mobno}</p>
                                <p><span style={{ fontWeight: 'bold' }}>Address</span>          : {data.address}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Registration