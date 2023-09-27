import { useEffect, useState } from "react";
import { TovarCard } from "../../components";
import styles from "../medicine/Medicine.module.css";

export const Blog = () => {
  const [tovar, setTovar] = useState([
    {
      image:
        "https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg",
      name: "Tovar nomer 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quasi!",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg",
      name: "Tovar nomer 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quasi!",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg",
      name: "Tovar nomer 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quasi!",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg",
      name: "Tovar nomer 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quasi!",
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="container">
        <div className={styles.medicine}>
          <h2>Blog</h2>
          <div className={styles.tovars} style={{gridTemplateColumns: '1fr 1fr'}}>
            {tovar.map((tov, i) => (
              <TovarCard key={i} data={tov} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
