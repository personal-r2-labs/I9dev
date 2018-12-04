import React from 'react';

const LocalLogin = () => {
  return (
    <form action="">
      <input placeholder="E-mail" type="email" name="email" id="emailLogin"/>
      <input placeholder="Password" type="password" name="password" id="passwordLogin"/>
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
  )
}

export default LocalLogin;