import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom"

function EditUsers() {
    let navigate = useNavigate()
    const {id} = useParams()
    alert(id)
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

    useEffect(()=>{
        loadUser();
    },[])
    const onSubmit=async(event)=>{
        event.preventDefault();
        await Axios.post('http://localhost:3002/users',user);
        navigate('/home',{state:user})
    }
    const loadUser =async()=>{
        const result= await axios.get('http://localhost:3002/users/'+id)
       setUser(result.data);
    }
    return(
        <div className="container">
            <div className='w-75 mx-auto shadow p-5'>
                <h2 className="text-center mb-4">Edit A User</h2>
                <form onSubmit={onSubmit}>
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
                    <button className="btn btn-primary" type="button">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditUsers