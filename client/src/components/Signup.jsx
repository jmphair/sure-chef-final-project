import React from 'react'

import Userfront from "@userfront/react";
Userfront.init("wbmy6rvb");

const SignupForm = Userfront.build({
  toolId: "lllnkdn"
});

const Signup = () => {
  return (
    <SignupForm />
  )
}

export default Signup
