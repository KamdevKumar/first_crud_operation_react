import axios from "axios";
import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

const Update=()=>{
    const[id,setId]=useState("");
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("Name"));
        setEmail(localStorage.getItem("Email"));
        setPassword(localStorage.getItem("Password"));
    },[])
    
    function handleUpdate(e){
        e.preventDefault();
        axios.put(`https://64be743a5ee688b6250c6de7.mockapi.io/mytask/${id}`,{
            Name:Name,
            Email:Email,
            Password:Password
        }).then(()=>{
            navigate("/read");
        });
        alert("Data Updated Successfully");
    };
    return(
        <>
        <div className="container">
            <h1>Updating Form</h1>
            <form>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" value={Name}  aria-describedby="Name" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="text" className="form-control" value={Email}  aria-describedby="Email" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" value={Password}  aria-describedby="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
                <Link to="/Read">
                    <button className="btn btn-secondary mx-2">Back</button>
                </Link>
            </form>
            </div>
        </>
    )
}
export default Update;
