import React, { useState } from 'react'
import axios from 'axios'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post(`/api/forgotPassword/email`, { email })
      setMessage(response.data.message)
    } catch (error) {
      setMessage(error.response.data.message)
    }
  }

  return (
    <div>
      
      <h1>Mot de passe oublié</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Adresse e-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type='submit'>Envoyer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ForgetPassword