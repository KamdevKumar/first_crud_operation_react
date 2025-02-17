import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Read = () => {
    const [data, setData] = useState([])
    const setToLocalStorage=(id,Name,Email,Password)=>{
       localStorage.setItem("id",id);
       localStorage.setItem("Name",Name);
       localStorage.setItem("Email",Email);
       localStorage.setItem("Password",Password);
    };
    function getData(){
        axios.get('https://64be743a5ee688b6250c6de7.mockapi.io/mytask')
        .then((res)=>{
            setData(res.data);
        })
    };
    function Delete(id){
        axios.delete(`https://64be743a5ee688b6250c6de7.mockapi.io/mytask/${id}`)
        .then(()=>{
            getData();
        });
        alert("Data Deleted Successfully")
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <>
        <div className="container">
            <div className="d-flex justify-content-between m-2">
                <h3>Read Operations</h3>
                <Link to="/">
                    <button className="btn btn-secondary">Create</button>
                </Link>
            </div>
            <table className="table table-hover table-bordered">
                <thead align="center">
                <tr>
                    <th scope="col">Si. No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                    
                </tr>
                </thead>
                {
                    data.map((eachData)=>{
                        return(
                            <>
                                <tbody align="center">
                                    <tr>
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.Name}</td>
                                        <td>{eachData.Email}</td>
                                        <td>{eachData.Password}</td>
                                        <td>
                                            <Link to='/Update'>
                                                <button className="btn btn-primary mx-2" onClick={()=>setToLocalStorage(
                                                    eachData.id,
                                                    eachData.Name,
                                                    eachData.Email,
                                                    eachData.Password
                                                )}>Edit</button>
                                            </Link>
                                        
                                            <button className="btn btn-danger mx-2" onClick={()=>Delete(eachData.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
            </div>
        </>
    );

}
export default Read;