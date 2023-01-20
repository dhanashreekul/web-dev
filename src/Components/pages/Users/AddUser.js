import { Axios } from "axios";
import React from "react";
import { useNavigate} from "react-router-dom"

function AddUser() {
    let navigate = useNavigate()
    const [user,setUser]= React.useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    const onInputChange=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    const onClick=(event)=>{
        event.preventDefault();
        console.log(user);
     //    Axios.get('http://localhost:3002/users',user)
        navigate('/home',{state:user})
        
    }
    
    return(
        <div className="container">
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className="text-center mb-4">Add A User</h2>
                <form>
                    <div className="form-group">
                        <input type='text'
                        className="form-control form-control-lg m-3"
                        placeholder='Enter your Name'
                        name='name'
                        onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type='text'
                        className="form-control form-control-lg m-3"
                        placeholder='Enter your Username'
                        name='username'
                        onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type='text'
                        className="form-control form-control-lg m-3"
                        placeholder='Enter your Email Address'
                        name='email'
                        onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type='text'
                        className="form-control form-control-lg m-3"
                        placeholder='Enter your Phone Number'
                        name='phone'
                        onChange={onInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type='text'
                        className="form-control form-control-lg m-3"
                        placeholder='Enter your Website Name'
                        name='website'
                        onChange={onInputChange}
                        />
                    </div>
                    <div className="d-grid">
                    <button className="btn btn-primary" type="button" onClick={onClick}>Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUser