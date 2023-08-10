import React, { useState } from "react";
import { useMainContext } from "../../context/Main";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { func } = useMainContext();
  const submitHandle = () => {
    func.newUser(email, password);
  };

  return (
    <div className="max-w-[100%] w-[22%] mt-[10%] mx-auto">
      <h2 className="text-4xl text-center mb-10">
        <span className="bg-gradient-to-r from-customBlue via-customPurple to-customPink text-transparent bg-clip-text font-extrabold">
          Travel-Agency
        </span>{" "}
        👋🏻
      </h2>

      <div className="flex form mt-2 bg-white shadow rounded-xl py-6 px-4 flex-col gap-2 w-[100%]">
        <h3 className="text-gray-500 text-xl mb-4">Signup</h3>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="User name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button
          onClick={submitHandle}
          className="bg-blue-600 hover:bg-blue-800 transition-all mt-4 rounded-md shadow-lg max-w-[100%] w-[100%] mx-auto p-3 text-white "
        >
          Signup
        </button>
      </div>
    </div>
  );
}
