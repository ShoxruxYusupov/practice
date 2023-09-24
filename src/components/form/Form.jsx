import { useState } from "react";
import styles from "./Form.module.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState("");

  const handlePost = () => {
    setNumber("");
    setName("");
  };

  return (
    <form onSubmit={handlePost}>
      <div className="container">
        <div className={styles.form}>
          <div className={styles.data}>
            <label htmlFor="name">
              <span>Name</span>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="number">
              <span>Number</span>
              <input
                type="number"
                id="number"
                value={number}
                required
                onChange={(e) => setNumber(e.target.value)}
              />
            </label>
            <label htmlFor="mail">
              <span>E-mail</span>
              <input
                type="email"
                id="mail"
                required
                placeholder="Необъязательно"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <button onClick={handlePost}>Send</button>
        </div>
      </div>
    </form>
  );
};
