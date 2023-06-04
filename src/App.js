import React, { useState } from 'react'
import Login from './components/Login';
import Reset from './components/Reset';

function App() {
  const [form, setForm] = useState("login");
  return (
    <div className="App">
      <h1>Welcome!</h1>
      {form === "login" ? <Login /> : <Reset />}
      <button
        onClick={() => {
          setForm(form === "login" ? "reset" : "login");
        }}
      >
        {form === "login" ? "Forgot Password" : "Back to Login"}
      </button>
    </div>
  );
}

export default App;
