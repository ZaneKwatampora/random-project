import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState(""); 
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div className="h-screen">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} required placeholder="  Enter Name..." />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required placeholder="  Enter Email..." />
          </label>
          <br />

          <label>
            Subject:
            <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
              <option value="">Select your Car</option>
              <option value="Rolls Royce">Rolls Royce Spectre</option>
              <option value="BMW">BMW-M4</option>
              <option value="Tesla">Tesla Roadster</option>
            </select>
          </label>
          <br />

          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder=" Enter Message" />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Thank you! We will get back to you. </p>
          <h1>IF YOU SAID IT DIDN'T COME FULLY BUILT. I WILL HUNT YOU DOWN!!!</h1>
        </div>

      )}
    </div>
  );
}

export default Contact;
