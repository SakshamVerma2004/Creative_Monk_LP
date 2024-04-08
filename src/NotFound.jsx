import styles from "../src/Styles/NotFound.module.css";

let NotFound = () => {
  return (
    <div className={styles.notFoundSection}>
      <div className={styles.notFoundInnerSection}>
        <h1>Page Not Found</h1>
        <p>We are sorry , but the page requested was not found.</p>
        <a href="/" className={styles.backToHomeBtn}>
          Move back to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
