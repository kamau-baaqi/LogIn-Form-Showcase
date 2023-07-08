import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually send the credentials to your server for authentication
    alert(`Logging in with username: ${username}`);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "'Roboto', sans-serif",
      background: "#f2f2f2",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "300px",
      padding: "20px",
      background: "#fff",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    label: {
      marginBottom: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      width: "100%",
      textAlign: "left",
    },
    input: {
      marginBottom: "20px",
      height: "30px",
      width: "100%",
      padding: "5px",
      fontSize: "14px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    submitButton: {
      height: "35px",
      width: "100%",
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "14px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    footer: {
      position: "fixed",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "12px",
      textAlign: "center",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Login Form</h2>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>
      <div style={styles.footer}>Presented by kb studio</div>
    </div>
  );
}

export default LoginForm;
