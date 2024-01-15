// SignOut.js
import React from 'react';
import { auth } from '../firebase'; // Adjust the path as needed

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      // Sign out successful
    } catch (error) {
      console.error('Sign Out Error:', error.message);
      // Handle sign out error
    }
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
