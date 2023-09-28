import { useState } from "react";
import styles from "./Form.module.css";
import { roll } from "../../assets";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handlePost = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      setLoading(false);
      setNumber("");
      setName("");
      setEmail("");
    }, 2000);
  };

  return (
    <form onSubmit={handlePost}>
      <div className="container">
        <div className={styles.form}>
          <div className={styles.data}>
            <label htmlFor="name">
              <span>{t("form.name")}</span>
              <input
                type="text"
                id="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label htmlFor="number">
              <span>{t("form.number")}</span>
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
          <button
            onSubmit={(e) => handlePost(e)}
            className={loading ? styles.loading : ""}
            disabled={loading}
          >
            {!loading ? "Send" : <img src={roll} />}
          </button>
        </div>
      </div>
    </form>
  );
};
