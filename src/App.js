//import logo from './logo.svg';
import './App.css';

//import Profile from "./Profile";
import React,{useState,useRef} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import New1 from './New1';
import New2 from './New2';
import New3 from './New3';
import User from './User';
import Read from './Read';
import Update from './Update';
import Navbar from './Navbar';
function App() {
   const[username,setUsername]=useState("")
   const[password,setPassword]=useState("")
   const [Detail, setDetail] = useState([])
   const usename =useRef("")
   const userpass=useRef("")
   let Users=[
    {id:1, name:""}
   ]

  function SubmitEvent(){
    let un = usename.current.value;
    let pass = userpass.current.value;
    let Datavalue = [];
    Datavalue = {"id": usename.current.value, "name" : userpass.current.value}
    setDetail([...Detail,Datavalue])
    setUsername(usename.current.value);
    setPassword(userpass.current.value);
   }
  // const[email,setEmail]=useState("")
  // function SubmitEvent(){
  //   alert(username + email);
  // }
  // function usernamefn(event){
  //   setUsername(event.target.value)
  // }
  // function emailfn(event){
  //   setEmail(event.target.value)
  // }
  // const emailfn =(e)=>{alert(e.target.value)}
  return (
    // <React.Fragment>
    //   <div className='container'>
    //   <New1/>
      
    //   <input type='text' placeholder='Username' ref={usename}></input>
    //   <input type='text' placeholder='Email' ref={userpass}></input>
    //   <button onClick={SubmitEvent}>Submit</button><br/>
    //   <New2 data={Detail} username={username} password={password}/>
    //   <New3/>
    //   {/* <div className="App">
    //   <div className='Container'>
        
    //     <h1>Login</h1>
    //     <label>UserName</label><br/>
    //     <input type='text' placeholder='Enter UserName' onChange={(e)=>usernamefn(e)}></input><br/>
    //     <label>Email</label><br/>
    //     <input type='text' placeholder='Enter Email' onChange={emailfn}></input><br/>
    //     <button onClick={SubmitEvent}>Submit</button>
    //     <p>UserName:{username}</p>
    //     <p>Email:{email}</p>
    //   </div>
    //   </div> */}
    //   </div>
    // </React.Fragment>
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<User />}></Route>
        <Route exact path='/Read' element={<Read />}></Route>
        <Route exact path='/Update' element={<Update />}></Route>
        <Route exact path='/Navbar' element={<Navbar/>}>Navbar</Route>
    </Routes>
</BrowserRouter>
  );
}

export default App;
