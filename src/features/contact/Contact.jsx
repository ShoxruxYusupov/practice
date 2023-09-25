import { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { Form } from "../../components";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <div className={styles.title}>
        <div className="container">
          <h1>PARLONS-EN</h1>
        </div>
      </div>
      <div className="container">
        <div className={styles.contact}>
          <div>
            <p>
              Penser autrement pour créer ce qui compte vraiment. Que tu aies la
              prochaine grande idée ou un défi insoluble, n’hésitez pas à nous
              challenger ! Chez Rouge On Blue, on aime ça.
            </p>
            <Form />
          </div>
          <div className={styles.headOffice}>
            <h2>Office</h2>
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5422.22482373885!2d59.642772009151805!3d42.42715284894378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1695664147634!5m2!1sru!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};
