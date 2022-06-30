import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import { Button } from '../extras/Button';

import './Navbar.css';

function Navbar() {

  const [click,setClick] = useState(false);  
  const handleClick = ()=>{setClick(!click)};

  const [button,setButton] = useState(true);  
  const showButton=()=>{
      if(window.innerWidth<=900){
          setButton(false);
      }else{
          setButton(true);
      }
  }


  window.addEventListener('resize',showButton);

  return (
    <>
        <div className="navbar">
            <div className="navbar-container container">
                <div className='navbar-logo-mobile'>
                    <Link to="/" className="navbar-logo" >
                        You-Learn
                    </Link> 
                    <div className="menu-icon" onClick={handleClick}>
                        {click? <FaTimes/> : <FaBars/>}
                    </div>  
                </div>


                <ul className={click?'nav-menu active':'nav-menu'}>
                    <li className="nav-item" >
                        <Link to="/" className="nav-link" onClick={handleClick}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link" onClick={handleClick}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/courses" className="nav-link" onClick={handleClick}>
                            Courses
                        </Link>
                    </li>
                    <li className={click?"nav-btn active":"nav-btn"}>
                        {button? (
                            <Link to="/login" className="btn-link" onClick={handleClick}>
                                <Button buttonStyle="btn--outline">Login</Button>
                            </Link>
                        ):(
                            <Link to="/login" className="btn-link" onClick={handleClick}>
                                <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Login</Button>
                            </Link>
                        ) }
                    </li>
                    <li className={click?"nav-btn active":"nav-btn"}>
                        {button? (
                            <Link to="/sign-up" className="btn-link" onClick={handleClick}>
                                <Button buttonColor={"blue"} buttonStyle="btn--outline">Sign Up</Button>
                            </Link>
                        ):(
                            <Link to="/sign-up" className="btn-link" onClick={handleClick}>
                                <Button  buttonColor={"blue"}  buttonStyle="btn--outline" buttonSize="btn--mobile">Sign Up</Button>
                            </Link>
                        ) }
                    </li>

                </ul>   
            </div>
        </div>
    
    </>
  )
}

export default Navbar