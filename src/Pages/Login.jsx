import React, { useState, useRef, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast, {Toaster } from "react-hot-toast";
import { AuthContext } from "../AppContext";
import BrandName from "../Components/PartsInNavBar/BrandName";

function Login() {
  const navigate = useNavigate();
  const notify = () => toast.success('successfully logged in');
  const auth = getAuth();
  const user = useContext(AuthContext)
  const [isUserNotExisting, setIsUserNotExisting] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordState, setPasswordState] = useState(false);
  const [emaliState, setEmailState] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user.setAsUser(userCredential.displayName);
        notify()
        navigate('/')
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err);
        console.log(errorCode);
        if (errorCode === "auth/invalid-login-credentials") {
          setIsUserNotExisting(true);
          setTimeout(() => {
            setIsUserNotExisting(false);
          }, 3000);
        }
        else if (errorCode === 'auth/invalid-email') {
            setEmailState(true)
            setTimeout(() => {
                setEmailState(false);
            }, 3000);
        }
        else if (errorCode === 'auth/missing-password') {
            setPasswordState(true)
            setTimeout(() => {
                setPasswordState(false);
            }, 3000);
        }
      });
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
              {isUserNotExisting && (
                <div>
                  <p className="text-red-600 p-3 font-semibold">
                    Invalid username or password
                  </p>
                </div>
              )}
              <form className="p-3">
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
            <div>
              <p className="text-center p-3">
                don't have an account?
                <a
                  className="text-blue-900 underline cursor-pointer"
                  onClick={(e) => { 
                    e.preventDefault()
                    navigate("/signup")
                }}
                >
                  Signup
                </a>
              </p>
            </div>
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
                onClick={() => handleLogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      <Toaster />
    </>
  );
}

export default Login;
