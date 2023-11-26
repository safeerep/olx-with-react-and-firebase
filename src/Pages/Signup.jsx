import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import BrandName from "../Components/PartsInNavBar/BrandName";

function Signup() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = () => {
    console.log('ok submitted');
    if (!userName.trim()) {
        nameRef.current.focus()
    }
    if (!email.trim()) {
        emailRef.current.focus()
    }
    if (!password.trim()) {
        passwordRef.current.focus()
    }
    
  }
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex p-5 rounded-t">
              <button
                className=" ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => navigate("/")}
              >
                {" "}
                x
              </button>
            </div>
            <div className="flex justify-center">
              <BrandName />
            </div>
            {/* body */}
            <div className="relative px-12 flex-auto">
              <form class="p-3">
                <p className="p-3">
                  <input 
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                  ref={nameRef}
                  className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]" 
                  type="text" 
                  placeholder="Enter your name" 
                  value={userName} />
                </p>
                <p className="p-3">
                  <input 
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  ref={emailRef}
                  className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]" 
                  type="email" 
                  placeholder="Enter your email" />
                </p>
                <p className="p-3">
                  <input 
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  ref={passwordRef}
                  className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]" 
                  type="password" 
                  placeholder="Type your password" />
                </p>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => navigate("/")}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleFormSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Signup;
