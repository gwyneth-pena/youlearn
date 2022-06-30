import { Link } from "react-router-dom"
import { Button } from "../extras/Button"
import "./SignUpForm.css"
import { useState } from "react"




function SignUpForm() {
    

  const [showPass,setShowPass] = useState(false)
  const handleEyeClick = ()=>{
    setShowPass(!showPass);
  }

  return (
    <div className="form-wrapper">
        
        <h3 class="sign-up-header">Sign up and start learning</h3>
        <form action="" className="signup">
            <input type="text" name="fullname" id="fullname" placeholder="Full Name" />
            <input type="text" name="email" id="email" placeholder="Email" />
            <div className="icon-input">
                <input type={showPass?"text":"password"} name="password" id="password" placeholder="Password"  style={{position:'relative'}}/>
                {showPass?<img alt="Eye Icon" onClick={handleEyeClick} src="./images/eye-slash-solid.svg" className="eye-icon"/>:
                <img alt="Eye Icon" src="./images/eye-solid.svg" onClick={handleEyeClick} className="eye-icon"/>}
            </div>
            <div className="row">
                <input type="checkbox" name="checkbox" id="checkbox" className="checkbox"/>
                <p>Send me special offers, personalized recommendations, and learning tips</p>
              
            </div>
            <Button className="signup-btn" children={"Sign Up"} buttonColor={"blue"} buttonStyle="btn--outline" buttonSize="btn--mobile"/>
            <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default SignUpForm