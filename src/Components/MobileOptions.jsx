import styles from "../Styles/MobileOptions.module.css";
import call from "../Assets/call_FILL1_wght400_GRAD0_opsz24.svg";
import whatsapp from "../Assets/whatsapp.png";
let MobileOptions = () => {
  return (
    <div className={styles.mobileOptions}>
      <a href="tel:9463445566" target="_blank">
        <div className={styles.callSection}>
          <img src={call} />
        </div>
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=919463445566&text=I%20Want%20to%20Know%20About%20Your%20Services"
        target="_blank"
      >
        <div className={styles.whatsappSection}>
          <img src={whatsapp} />
        </div>
      </a>
    </div>
  );
};

export default MobileOptions;
