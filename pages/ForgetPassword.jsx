import React from 'react'
//import { fetcher } from "@/lib/fetch";
import { useCallback, useRef } from "react";

const ForgetPassword = () => {

    const emailRef = useRef();

    const onSubmit = useCallback(async (e) => {
      e.preventDefault();
      try {
        await fetcher("/api/user/password/reset", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
          }),
        });
      } catch (e) {
        console.error(e.message);
      }
    }, []);

  return (
    <>
    
    <h1>Forget password</h1>
    <p>
      Enter the email address associated with your account, and we&apos;ll
      send you a link to reset your password.
    </p>
    <form onSubmit={onSubmit}>
      <input
        ref={emailRef}
        type="email"
        autoComplete="email"
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default ForgetPassword