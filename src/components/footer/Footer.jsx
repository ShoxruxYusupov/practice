import styles from "./Footer.module.css";
import { useState } from "react";
import { Links } from "../../constants";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";

export const Footer = () => {
  const [email, setEmail] = useState("");

  function handlePost() {
    const feedback = {
      email: email,
    };
    console.log(feedback);
  }
  const links = Links();
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div>
            <img
              src={Logo}
              alt=""
            />
            <p>Copyright © 2023 , Medicina</p>
          </div>
          <div className={styles.social}>
            <h3>News</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <label htmlFor="mail">
              <input
                type="email"
                id="mail"
                required
                placeholder="Mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <button onClick={handlePost}>Send</button>
          </div>
          <div className={styles.social}>
            <h3>Navigation</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className={styles.social}>
            <h3>Services</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
          <div className={styles.social}>
            <h3>Social</h3>
            {links.map((item) => (
              <li key={item.id}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
