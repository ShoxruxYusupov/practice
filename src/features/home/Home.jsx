import heart from "../../assets/heart.mp4";
import { Form, Text } from "../../components";
import styles from "./Home.module.css";

export function Home() {
  return (
    <section className={styles.banner}>
      <div className={styles.ten}></div>
      <video className={styles.myVideo} autoPlay loop muted>
        <source src={heart} type="video/mp4" />
      </video>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <div className={styles.overflow}>
              <h1 className={styles.drop1}>CRÉATEURS</h1>
            </div>
            <div className={styles.overflow}>
              <h1 className={styles.drop2}>NUMÉRIQUES</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <Form />
      </div>
      <Text
        text1={{ first: "Creative UI/UX DIZAYN", second: "LONG LIVE A$AP" }}
        text2={{ first: "Creative UI/UX DIZAYN", second: "LIVE LOVE A$AP" }}
        text3={{ first: "Creative UI/UX DIZAYN", second: "PRAISE THE LORD" }}
      />
    </section>
  );
}
