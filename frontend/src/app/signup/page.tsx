'use client'

import NavBar from "@/nav-bar";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Add your signup logic here
    console.log("Signing up with:", { email, password, confirmPassword });
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="flex flex-col gap-4 w-80">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded p-2"
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded p-2"
          />
          <Button onClick={handleSignup} className="bg-blue-500 text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;