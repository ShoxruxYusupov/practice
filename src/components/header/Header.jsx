import styles from "./Header.module.css";
import { Logo, FB, TG, Insta, menu } from "../../assets";
import { Link } from "react-router-dom";
import { Links } from "../../constants";
import { useMatchMedia } from "../../hooks";
import { useState } from "react";
import { Language } from "../language/Language";

export const Header = () => {
  const { isMobile } = useMatchMedia();

  const [open, setOpen] = useState(false);

  const links = Links();

  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>

          {isMobile ? (
            <div className={styles.mobile}>
              <Language />
              <img
                src={menu}
                alt=""
                className={styles.menu}
                onClick={() => setOpen(!open)}
              />
              <nav style={open ? { top: "74px" } : { top: "-287px" }}>
                <ul className={styles.social}>
                  <li>
                    <a href="#">
                      <img src={FB} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={TG} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={Insta} alt="" />
                    </a>
                  </li>
                </ul>
                <ul className={styles.links}>
                  {links.map((item) => (
                    <li key={item.id}>
                      <Link to={item.to} onClick={() => setOpen(false)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : (
            <nav>
              <Language />
              <ul className={styles.links}>
                {links.map((item) => (
                  <li key={item.id}>
                    <Link to={item.to}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <ul className={styles.social}>
                <li>
                  <a href="#">
                    <img src={FB} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={TG} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Insta} alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
