import React from "react";
import google from '../Components/Images/search.png';
import headerImage from '../Components/Images/Logo.png';


const SignUp = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="fixed top-5 left-0 w-full p-2 text-white flex items-center justify-center z-10">
        <div className="flex items-center">
          <img
            src={headerImage}
            alt="ReachInboxAI Logo"
            className="w-30 h-5 mr-10"
          />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-16">
        <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md text-center bg-black border border-gray-700 rounded-lg">
          {/* Form */}
          <h2 className="text-white text-2xl mb-4">Create a new account</h2>

          {/* Google Sign-Up Button */}
          <button
            className="flex items-center justify-center w-full p-3 bg-gray-800 hover:bg-gray-700 text-white rounded mb-4"
          >
            <img
              src={google}
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Sign Up with Google
          </button>

          {/* Divider */}
          <div className="my-4">
            <span className="text-gray-400">or</span>
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
            Create an Account
          </button>

          {/* Sign In */}
          <div className="mt-4">
            <p className="text-gray-400">
              Already have an account?{" "}
              <a href="/signin" className="text-blue-500 hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className=" text-white text-center py-4">
        <p className="text-sm">© 2024 ReachInboxAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
