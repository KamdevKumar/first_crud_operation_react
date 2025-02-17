import React,{useState} from "react"
function Sample(){
    const [username,setUsername]=useState("")
    return(
        <React.Fragment>
            <div className="container">
                <h1>Login</h1>
                <label>UserName</label>
                <input type="text" placeholder="Enter Username" onChange={UserNameFuntion}></input>
                <label>Email</label>
                <input type="text" placeholder="Enter Username" onChange={Email}></input>
                <button type="button" onClick={Login}>Login</button> 
            </div> 

        </React.Fragment>
    )
}
export default Sample;