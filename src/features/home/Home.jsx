import heart from "../../assets/heart.mp4";
import styles from "./Home.module.css";

export function Home() {
  return (
    <section className={styles.banner}>
      <video className={styles.myVideo} autoPlay loop muted>
        <source src={heart} type="video/mp4" />
      </video>
    </section>
  );
}
