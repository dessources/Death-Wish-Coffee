import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  wrapper,
  forgetPassword,
  text,
  formField,
  btnSubmit,
  btnCancel,
  emailInput,
} from "../styles/ForgetPassword.module.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/forgotPassword/email`, { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className={wrapper}>
      <Navbar />
      <div className={forgetPassword}>
        <h1>LOGIN</h1>
        <div>
          <div className={text}>
            <h2>RESET YOUR PASSWORD</h2>
            <p>We will send you an email to reset your password.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={emailInput}>
              <input
                className={formField}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className={btnSubmit}>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
          <Link href={"/Login"}>
            <button className={btnCancel}>Cancel</button>
          </Link>
        </div>
        {message && <p>{message}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
