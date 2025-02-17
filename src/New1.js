import { useState,useRef } from "react"
import React from "react";

function New1(){
    const [studentList,setStudentLit]=useState([{id:1,name:"Kamdev"},{id:2,name:"Jawahar"},{id:3,name:"Anshu"}])
    const[name,setName]=useState("")

    const uname=useRef("")
    const uemail=useRef("")
    function Login(){
        alert(uname.current.value+uemail.current.value)
    }
    const updateName=()=>{
        uname.current.value="Ramesh"
    }
    const updateEmail=()=>{
        let mmmm= uemail.current.value
        setName(mmmm);
    }
    return(
        <React.Fragment>
            <input type="text" placeholder="name" ref={uname} value={name}></input><br/>
            <input type="text" placeholder="email" ref={uemail}></input><br/>
            <button onClick={Login} className="btn-primary">Submit</button><br/>
            <button onClick={updateName} className="btn-primary">Update</button>
            <button onClick={updateEmail} className="btn-primary">UpdateE</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.map(e=>{
                            return(<tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}
export default New1;