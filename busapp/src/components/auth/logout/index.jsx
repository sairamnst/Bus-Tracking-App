import { getAuth, signOut } from "firebase/auth";

// Function to sign out the user
export const SignOut = async () => {
  const auth = getAuth();
  
  try {
    await signOut(auth);
    console.log("Sign-out successful.");
  } catch (error) {
    console.error("An error occurred while signing out:", error);
  }
};