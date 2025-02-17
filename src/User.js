import axios from "axios";
import React,{useState} from "react";
import { useNavigate,Link } from "react-router-dom";
function User(){
    const history = useNavigate();
    const Headers = { "Access-Control-Allow-Origin": "*" };
    const[Name,setName]=useState("")
    const[Email,setEmail]=useState("")
    const[Password,setPassword]=useState("")
    // const Submit=(e)=>{
    //     e.preventDefault();
    //     axios.post(
    //         'https://64be743a5ee688b6250c6de7.mockapi.io/mytask',
    //         {
    //             Name: Name,
    //             Email:Email,
    //             Password: Password,
    //             Headers
    //         }
    //     )
    //     .then(() => {
    //         history("/Read");
    //     });
    // alert('Successfully Saved');
    // }
    const Submit=(event)=>{
        event.preventDefault();
        axios.post(
            'https://64be743a5ee688b6250c6de7.mockapi.io/mytask',
            {
                Name:Name,
                Email:Email,
                Password:Password,
                Headers
            }
        ).then(()=>{
            history("/Read");
        });
        alert("Successfully Saved");        
    }
    return(
        <div className="Uesr">
            <div className="container">
            <div className="d-flex justify-content-between m-2">
                <h1>Regstration Page</h1>
                <Link to="/Read">
                    <button className="btn btn-primary">Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={Name} aria-describedby="Name" onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" value={Email} aria-describedby="Password" onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={Password} aria-describedby="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={Submit}>Submit</button>
            </form>
            </div>
        </div>
    );
}
export default User;