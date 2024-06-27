// import Image from "next/image";

// export default function Home() {
//   return (
//     // <div className="__className_aaf875">
//       <div className="login_container">
//         <div className="iconpage">
//           <Image
//             src="/bglogo.png"
//             alt="Logo"
//             className="iconimage"
//             width={1120}
//             height={1480}
//           />
//         </div>

//         <div className="loginpage">
//           <div className="emoji">👋</div>
//           <h2>Welcome Back to Your <br />PRIMECARE HOSPITAL</h2>
//           <div className="login_cont">
//           <form>
//             <div>
//               <label htmlFor="email">Email</label>
//               <input type="email" id="email" name="email" />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" name="password" />
//             </div>
//             <button type="submit">Sign In</button>
//             <p>------------- Or continue with -------------</p>
//             <div className="alt-login-buttons">
//               <button>Sign in with Google</button>
//               <button>Sign in with Facebook</button>
//             </div>
//             <p>Don’t have an account? <a href="/register">Create Account</a></p>
//           </form>
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// }

"use client"
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="__className_aaf875">
      <div className="login_container">
        <div className="iconpage">
          <Image
            src="/bglogo.png"
            alt="Logo"
            className="iconimage"
            width={1120}
            height={1480}
          />
        </div>

        <div className="loginpage">
          <div className="emoji">👋</div>
          <h2>Welcome to Your <br />PRIMECARE HOSPITAL</h2>
          <div className="login_cont">
            <form>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className="password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="password-icon"
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
              </div>
              <button type="submit">Sign In</button>
              <p className="line_cont">continue with</p>
              <div className="alt-login-buttons">
                <button className="google-button">
                  <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                </button>
                <button className="facebook-button">
                  <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
                </button>
              </div>
              <p className="acc">Don’t have an account? <a href="/register">Create Account</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
