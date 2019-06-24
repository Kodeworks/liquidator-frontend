import React from 'react';

import AuthenticationCard, { AuthType } from './../molecules/AuthenticationCard';

const Login: React.FC = () => {
  const handleSubmit = (username: string, password: string) => alert(`${username}, ${password}`);

  return (
    <AuthenticationCard type={AuthType.Login} onSubmit={handleSubmit} />
  );
};

export default Login;
