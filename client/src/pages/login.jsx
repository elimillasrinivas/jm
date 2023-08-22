import Layouts from "@layouts/Layouts";
import axios from 'axios'

import PageBanner from "@components/PageBanner";
import { useState } from "react";
import Swal from "sweetalert2";

const Login = () => {

  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleEmailChange=(e)=>{
      setEmail(e.target.value)
  }
  const handleNameChange=(e)=>{
    setName(e.target.value)
}
const handlePasswordChange=(e)=>{
  setPassword(e.target.value)
}

  const handleSubmit= async(e)=>{
    e.preventDefault()

    const data={
      fullName:name,
      email:email,
      password:password
    } 
    console.log(data);
    await axios.post("http://localhost:8083/user/register",data)
    .then((res)=>{
      if(res.data.message==='User registered successfully'){
        Swal.fire({
          title: 'Registered Successfully',
          icon: 'success',
        })
      }
    })
    .catch((err)=>Swal.fire({
      title: `${err.response.data.error}`,
      icon: 'warning',
    }))
  }



  return (
    <Layouts>
      <PageBanner
        pageTitle={"Login"}
        pageDesc={"our values and vaulted us to the top of our industry."}
      />

      {/* Login Register Start */}
      <section className="gap login-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faqs">
                <div className="question">
                  <h3>What do I need to log in?</h3>
                  <p>
                    Upon registration, you can access your account using your
                    account email and designated password.
                  </p>
                </div>
            
                <div className="question">
                  <h3>Register today and you will be able to:</h3>
                  <ul>
                    <li>
                      <i className="fa-solid fa-chevron-right" /> Apply a job
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right" />
                      Quotations for different services
                    </li>
                    <li>
                      <i className="fa-solid fa-chevron-right" />
                      To get latest updates 
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="email address"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="remember">
                    <div className="first">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div className="second">
                      <a href="#.">Forget a Password?</a>
                    </div>
                  </div>
                  <button type="submit" className="theme-btn">
                    <i className="fa-solid fa-angles-right" />
                    Login
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box register">
                <div
                  className="parallax"
                  style={{ backgroundImage: "url(/images/pattren.png)" }}
                />
                <h3>Register Your Account</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input type="text" name="text" placeholder="Complete Name" onChange={handleNameChange} value={name}/>
                  <input
                    type="email"
                    name="email"
                    placeholder="email address"
                    onChange={handleEmailChange}
                    value={email}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our privacy policy.
                  </p>
                  <button type="submit" className="theme-btn" onClick={handleSubmit}>
                    <i className="fa-solid fa-angles-right" />
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Login Register End */}
    </Layouts>
  );
};
export default Login;
