import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const Login = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Login"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Login Register Start */}
      <section className="gap login-register">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faqs">
                <div className="question" >
                  <h3>What do I need to log in?</h3>
                  <p>Upon registration, you can access your account using your account number and designated password.</p>
                </div>
                <div className="question" >
                  <h3>How do I sign up for paperless billing?</h3>
                  <p>To opt for paperless billing, simply log in to your account, navigate to the My Details section, and update the "Send invoices by" option to Email.</p>
                </div>
                <div className="question" >
                  <h3>Register today and you will be able to:</h3>
                  <ul>
                    <li><i className="fa-solid fa-chevron-right" /> Easily check your account balance</li>
                    <li><i className="fa-solid fa-chevron-right" />Make secure payments via debit or credit card</li>
                    <li><i className="fa-solid fa-chevron-right" /> Update your billing address and other information seamlessly</li>
                    <li><i className="fa-solid fa-chevron-right" /> Embrace paperless billing for direct receipt of rent invoices in your inbox.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" >
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <input type="email" name="email" placeholder="Username or email address" />
                  <input type="password" name="password" placeholder="Password" />
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
                <div className="parallax" style={{backgroundImage: "url(/images/pattren.png)"}} />
                <h3>Register Your Account</h3>
                <form onSubmit={(e) => {e.preventDefault();}}>
                  <input type="text" name="text" placeholder="Complete Name" />
                  <input type="email" name="email" placeholder="Username or email address" />
                  <input type="password" name="password" placeholder="Password" />
                  <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                  <button type="submit" className="theme-btn">
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