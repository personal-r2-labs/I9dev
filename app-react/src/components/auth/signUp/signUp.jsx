import React from 'react';

const SignUp = () => {
  return (
    <form action="">
      <input placeholder="Name" type="text" name="name" id="nameSign"/>
      <input placeholder="E-mail" type="email" name="email" id="emailSign"/>
      <input placeholder="Password" type="password" name="password" id="passwordSign"/>
      <button className="btn btn-primary">Sign Up</button>
    </form>
  )
}

export default SignUp;