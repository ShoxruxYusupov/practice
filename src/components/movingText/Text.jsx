import styles from "./Text.module.css";

export const Text = ({ text1, text2, text3 }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span>{text1.first}</span>
          <img
            src="https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg"
            alt=""
          />
          <span>{text1.second}</span>
          <img
            src="https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg"
            alt=""
          />
        </p>
        <p className={styles.text}>
          <span>{text1.first}</span>
          <img
            src="https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg"
            alt=""
          />
          <span>{text1.second}</span>
          <img
            src="https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg"
            alt=""
          />
        </p>
      </div>

      <div className={styles.wrapper + " " + styles.two}>
        <p className={styles.text}>
          <span>{text2.first}</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Live_Love_ASAP.jpg"
            alt=""
          />
          <span>{text2.second}</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Live_Love_ASAP.jpg"
            alt=""
          />
        </p>
        <p className={styles.text}>
          <span>{text2.first}</span>
          <img
            src="https://m.media-amazon.com/images/I/81uEOtB8mjL._UF1000,1000_QL80_.jpg"
            alt=""
          />
          <span>{text2.second}</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/e/eb/Live_Love_ASAP.jpg"
            alt=""
          />
        </p>
      </div>

      <div className={styles.wrapper + " " + styles.three}>
        <p className={styles.text}>
          <span>{text3.first}</span>
          <img
            src="https://images.genius.com/02a05d202374e71d936d7ce3bc3d9e42.905x905x1.jpg"
            alt=""
          />
          <span>{text3.second}</span>
          <img
            src="https://images.genius.com/02a05d202374e71d936d7ce3bc3d9e42.905x905x1.jpg"
            alt=""
          />
        </p>
        <p className={styles.text}>
          <span>{text3.first}</span>
          <img
            src="https://images.genius.com/02a05d202374e71d936d7ce3bc3d9e42.905x905x1.jpg"
            alt=""
          />
          <span>{text3.second}</span>
          <img
            src="https://images.genius.com/02a05d202374e71d936d7ce3bc3d9e42.905x905x1.jpg"
            alt=""
          />
        </p>
      </div>
    </>
  );
};
