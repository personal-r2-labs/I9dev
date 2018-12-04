import React from 'react';
import SignUp from '../signUp/signUp';
import FacebookLogin from '../socialLogin/facebookLogin/facebookLogin';
import LinkedInLogin from '../socialLogin/linkedInLogin/linkedInLogin';
import LocalLogin from '../localLogin/localLogin';

const EmpSignUpLogin = () => {
  return (
    <div className="d-flex">
      <SignUp />
      <LocalLogin />
      <FacebookLogin />
      <LinkedInLogin />
    </div>
  );
};

export default EmpSignUpLogin;
