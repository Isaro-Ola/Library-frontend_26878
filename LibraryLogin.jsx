import React, { useState } from 'react'
import LibraryButton from './LibraryButton'

function LibraryLogin() {

  const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(event) {
  event.preventDefault();
  alert("User " + userName + "  password " + password);
}

  function navigateBetween() {
  setDoYouHaveAnAccount(!doYouHaveAnAccount);
}

  if (isLoggedIn) {
    return (
      <div className="login-card" role="status">
        <h2>Login successful</h2>
        <p>Welcome, {userName}!</p>
        <LibraryButton
          buttonLabel="Log Out"
          onClickButton={() => {
            setIsLoggedIn(false);
            setPassword('');
          }}
        />
      </div>
    );
  }

  return (
    <>
      {doYouHaveAnAccount ? (
        <form
          className="login-card"
          onSubmit={handleLogin}
          style={{ marginTop: '190px' }}
        >
          <label>
            UserName:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <LibraryButton buttonLabel="LOGIN" buttonType="submit" /><br />
          <label>New here? </label>
          <LibraryButton
            buttonLabel="Create Account"
            onClickButton={navigateBetween}
          />
        </form>
      ) : (
        <div style={{ border: '3px solid indigo', marginTop: '190px' }}>
          <label>Student ID:</label>
          <input type="text" placeholder="Enter Your Student ID" /><br />
          <label>Email:</label>
          <input type="email" /><br />
          <label>Password:</label>
          <input type="password" /><br />
          <label>Confirm Password:</label>
          <input type="password" /><br />
          <LibraryButton buttonLabel="LOGIN" /><br />
          <label>Already have an account?? </label>
          <LibraryButton
            buttonLabel="Sign In"
            onClickButton={navigateBetween}
          />
        </div>
      )}
    </>
  )
}

export default LibraryLogin