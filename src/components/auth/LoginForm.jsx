import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xs w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
        Sign In
      </h2>
      {/* Google login button (add onClick with Firebase Auth later) */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded flex items-center justify-center mb-4">
        <svg width="20" height="20" className="mr-2" /> {/* Google icon SVG */}
        Continue with Google
      </button>
      <div className="relative my-4">
        <hr />
        <span className="absolute left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-400 text-sm -top-3">
          or
        </span>
      </div>
      <form>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
