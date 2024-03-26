import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// incase of error on '@fortawesome/react-fontawesome' and '@fortawesome/free-solid-svg-icons' do this -> npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-burgundy flex items-center justify-center">
      <div className="max-w-md bg-[#ECE6E3] rounded-[22px] shadow-md w-[624px] h-[430px]">
        <h1 id="text" className="text-center mb-6 text-black text-[32px] font-[Katibeh] h-[42px] pt-5">CHICKALIC</h1>
        <h1 className="text-center mb-[73] text-black text-[48px] font-[LibreBodoni]">Log in</h1>
        <h1 id="text" className="text-center mb-8 text-black text-[26px] font-[LibreBodoni]">to your account</h1>
        <form className="space-y-6">
          <div className="relative flex justify-center items-center">
            <input type="text" id="username" className="shadow-md w-[370px] rounded-[12px] border text-[#727272] border-white px-3 py-2 font-[LibreFranklin] text-[16px] pl-6 focus:outline-none focus:ring-2 focus:ring-[#54343B] focus:border-transparent" placeholder="Email/Username" />
          </div>
          <div className="relative flex justify-center items-center">
            <input type={showPassword ? 'text' : 'password'} value={password} id="password" onChange={(e) => setPassword(e.target.value)} className="shadow-md w-[370px] rounded-[12px] border text-[#727272] border-white px-3 py-2 font-[LibreFranklin] text-[16px] pl-6 focus:outline-none focus:ring-2 focus:ring-[#54343B] focus:border-transparent" placeholder="Password" />
            <FontAwesomeIcon className="absolute right-16 cursor-pointer text-lg" icon={showPassword ? faEyeSlash : faEye} style={{ color: showPassword ? '#888' : '#888' }} onClick={togglePasswordVisibility}/>
          </div>
          <div className="flex items-center justify-center pb-5 gap-7">
            <a href="#" className="text-[black] hover:underline font-[LibreBodoni] text-[24px]">Forgot Password?</a>
            <button id="next" type="submit" className="text-white py-2 px-4 rounded-[20px] font-[LibreCaslonText] text-[24px] w-[150px]">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// {showPassword ? 
//   (<MyCustomEyeIcon className="absolute right-16 cursor-pointer text-lg" onClick={togglePasswordVisibility} />) 
//   : 
//   (<MyCustomEyeIcon_slash className="absolute right-16 cursor-pointer text-lg" onClick={togglePasswordVisibility}/>)}

export default Login