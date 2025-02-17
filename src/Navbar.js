import React,{useRef} from "react"
import './component/Main.css';
import {FaBars,FaTimes} from "react-icons/fa"
const Navbar=()=>{
    const navRef=useRef();
    const showNavbar=()=>{
        navRef.current.classList.toggle("response_nav")
    }

    return(
        <>
            <div className="container-fluid">
                <header>
                    <h1>Logo</h1>
                    <nav ref={navRef}>
                        <a href="/#">Home</a>
                        <a href="/#">My Work</a>
                        <a href="/#">Blog</a>
                        <a href="/#">About</a>
                        <a href="/#">Login</a>
                        <button  className="nav-btn  nav-close-btn" onClick={showNavbar}>
                            <FaTimes/>
                        </button>
                    </nav>
                    <button className="nav-btn" onClick={showNavbar}>
                        <FaBars/>
                    </button>
                </header>
            </div>
        </>
    );
}
export default Navbar;