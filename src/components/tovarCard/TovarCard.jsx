import styles from "./TovarCard.module.css";

export const TovarCard = ({ data }) => {
  return (
    <div className={styles.tovarCard}>
      <img src={data.image} alt="" />
      <h5>{data.name}</h5>
      <p>{data.description}</p>
    </div>
  );
};
