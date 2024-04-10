import styles from "./Styles/Thankyou.module.css";
import logo from "./Assets/cm-logo.webp"
let Thankyou = () => {
    return (
        <div className={styles.thankyouSection} >
            <div className={styles.thankyouContainerSection}>
                <img src={logo}/>
                <h1>Thank You For Reaching To Us</h1>
                <p>Our Team will reach out to you shortly.</p>
                <a href="/">Move Back</a>
            </div>
        </div>
    )
}

export default Thankyou;