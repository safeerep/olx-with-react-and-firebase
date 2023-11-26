import React, {useState} from "react";
import { useNavigate, Routes, Route} from "react-router-dom";
import Signup from "../../Pages/Signup";

function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div
        onClick={() => {
          navigate('/signup')
        }}
        className="font-bold cursor-pointer"
      >
        <span>Login</span>
        <hr className="m-0 bg-black h-0.5" />
      </div>
    </>
  );
}

export default Login;
