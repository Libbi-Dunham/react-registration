import React, { useState } from 'react';
import { signUpUser } from '../../services/users';
import AuthForm from '../../Components/AuthForm/AuthForm';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpUser(email, password);
    } catch {
      setError('Oh No Something is wrong! Try Again!');
    }
  };
  return (
    <div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
