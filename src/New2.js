import React,{useEffect} from "react";
function New2(props){

    useEffect(()=>{
        alert('New Component : ' + JSON.stringify(props.data))
    },[props])
    return(
        <>
        <h1>Props Component</h1>
        <p>Username: {props.username}</p>
        <p>Password:{props.password}</p>
        </>
    );
}
export default New2;