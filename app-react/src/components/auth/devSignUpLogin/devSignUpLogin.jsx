import React from 'react';
import SignUp from '../signUp/signUp';
import GitHubLogin from '../socialLogin/gitHubLogin/gitHubLogin';
import LinkedInLogin from '../socialLogin/linkedInLogin/linkedInLogin';
import LocalLogin from '../localLogin/localLogin';

const DevSignUpLogin = () => {
  return (
    <div className="d-flex">
      <SignUp />
      <LocalLogin />
      <GitHubLogin />
      <LinkedInLogin />
    </div>
  );
};

export default DevSignUpLogin;
