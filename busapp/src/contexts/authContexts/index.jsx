import React, { useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase"; // Your Firebase setup
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // Shows loading spinner while Firebase checks auth

  useEffect(() => {
    // Firebase auth state change listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Update current user whenever auth state changes
      setLoading(false); // Set loading to false after the initial check
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  // Directly compute userLoggedIn from currentUser (null or user object)
  const value = {
    currentUser,
    userLoggedIn: !!currentUser, // If currentUser exists, user is logged in
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Don't render children until loading is complete */}
    </AuthContext.Provider>
  );
}
