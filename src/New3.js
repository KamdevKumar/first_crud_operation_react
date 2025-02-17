import React,{ useState,useEffect,useRef } from "react";

function New3(){
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[address,setAddress]=useState("");
    const[password,setPassword]=useState("");
    const[cnfPasswod,setCnfPassword]=useState("");
    const[count,setCount]=useState("");
     const myaddress =useRef("")

    function SubmitEvent(){
        let add=myaddress.current.value;
        
        
    }
    function setAddressfun(event){
           setAddress(event.target.value)
     }
    //onLoad
    useEffect(()=>{
        
        if(address==='Chennai'||address==='Raju')
        alert('welcome');
    },[address])

   
    //const [details, setDetails] = useState([]);
    return(
    <>
        <h1>UseEffect Hooks componenet</h1>
        <form>
            <div className="form-title">
                <h3>Registration</h3>
            </div>
            <div className="form-body">
                <label>Username</label><br/>
                <input type="text" placeholder="Enter username" ></input><br/>
                <label>Email</label><br/>
                <input type="text" placeholder="Enter email"></input><br/>
                <label>Address</label><br/>
                <input type="text" placeholder="Enter address"  onChange={setAddressfun} ref={myaddress}></input><br/>
                <label>Password</label><br/>
                <input type="text" placeholder="Enter passwod"></input><br/>
                <label>Confirm Password</label><br/>
                <input type="text" placeholder="Enter confirm password"></input><br/>
                <button onClick={SubmitEvent}>Submit</button>
            </div>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Password</th>
                    <th>Confirm Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    // Details.map((data)=>{

                    // })
                }
            </tbody>
        </table>
    </>
    );
}
export default New3;