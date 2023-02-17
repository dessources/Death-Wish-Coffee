import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {wrapper, resetPassword, btnSubmit, btnCancel, formField} from '../styles/ResetPassword.module.css';

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = router.query.token;
    if (
      !password ||
      !confirmPassword ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setMessage("Password and confirm password are required");
      return;
    }
    try {
      console.log(password, confirmPassword);
      const response = await axios.post("/api/auth/reset-password", {
        password,
        confirmPassword,
        token,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className={wrapper}>
      <Navbar />
      <div className={resetPassword}>
        <div>
          <h1>LOGIN</h1>
          <h2>RESET YOUR PASSWORD</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className={formField}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
          </div>
          <div>
            <input
              className={formField}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
            />
          </div>
          <div className={btnSubmit}>
          <button type="submit">SUBMIT</button>
          </div>
          <Link href={"/Login"}>
          <button className={btnCancel}>Cancel</button>
          </Link>
        </form>
        <p>{message}</p>
      </div>
      <Footer />
    </div>
  );
}
