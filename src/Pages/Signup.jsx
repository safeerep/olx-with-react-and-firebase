import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BrandName from "../Components/PartsInNavBar/BrandName";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const auth = getAuth();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [userNameState, setUserNameState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [emaliState, setEmailState] = useState(false);
  const handleFormSubmit = () => {
    const regex = /^[a-zA-Z\s]+$/;
    if (!userName.trim() || !regex.test(userName)) {
      nameRef.current.focus();
      setUserNameState(true);
      setTimeout(() => {
        setUserNameState(false);
      }, 3000);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          navigate("/");
        })
        .catch((err) => {
          const errorCode = err.code;
          const errorMessage = err.message;
          if (errorCode === "auth/invalid-email") {
            setEmailState(true);
            emailRef.current.focus();
            setTimeout(() => {
              setEmailState(false);
            }, 3000);
          } else if (errorCode === "auth/weak-password") {
            setPasswordState(true);
            passwordRef.current.focus();
            setTimeout(() => {
              setPasswordState(false);
            }, 3000);
          } else if (errorCode === "auth/email-already-in-use") {
            setIsExistingUser(true);
            setTimeout(() => {
              setIsExistingUser(false);
            }, 3000);
          }
        });
    }
  };
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
                x
              </button>
            </div>
            <div className="flex justify-center">
              <BrandName />
            </div>
            {/* body */}
            <div className="relative px-12 flex-auto">
              {isExistingUser && (
                <p className="text-red-600 p-3 font-semibold">
                  Please try to login, You are already registered
                </p>
              )}
              <form className="p-3">
                <p className="p-3">
                  <input
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    ref={nameRef}
                    className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                  />
                </p>
                {userNameState && (
                  <p className="text-red-600 p-3 font-bold">
                    Please enter a valid username
                  </p>
                )}
                <p className="p-3">
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    ref={emailRef}
                    className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
                    type="email"
                    placeholder="Enter your email"
                  />
                </p>
                {emaliState && (
                  <p className="text-red-600 p-3 font-bold">
                    Please enter a valid email address
                  </p>
                )}
                <p className="p-3">
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    ref={passwordRef}
                    className="block w-full border border-black text-gray p-4 outline-0 font-[0.95em]"
                    type="password"
                    placeholder="Type your password"
                  />
                </p>
                {passwordState && (
                  <p className="text-red-600 p-3 font-bold">
                    Password should contain atleast 6 charactes
                  </p>
                )}
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
