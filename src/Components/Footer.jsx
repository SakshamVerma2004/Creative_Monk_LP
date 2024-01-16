import styles from "../Styles/Footer.module.css";
import logo from "../Assets/cm-logo.webp";
import { useState } from "react";

let Footer = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [successMessage, setSuccessMessage] = useState(false);
  let [errorMessage, setErrorMessage] = useState(false);
  let submitHandler = () => {
    if (!name.trim() || !email.trim() || !phoneNumber) {
      return;
    }
    fetch(
      "https://creative-monk-lp-default-rtdb.firebaseio.com/enquiry_form_data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone_number: phoneNumber,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setSuccessMessage(true);
        return res.json();
      })
      .catch((err) => {
        setErrorMessage(true);
      });
  };
  return (
    <div className={styles.footer}>
      <div className={styles.containerFooter}>
        <div className={styles.logoSection}>
          <a href="/">
            <img src={logo} />
          </a>
          <p>
            Your Gateway to Digital Excellence – Where Innovation Meets Success.
            Elevate Your Brand Today with Our Expertise.
          </p>
          <div className={styles.socialSection}>
            <a
              href="https://www.facebook.com/creativemonkindia/"
              target="_blank"
            >
              <div className={styles.socialBackgroundSection}>
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="20px"
                  height="20px"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/creativemonkindia"
              target="_blank"
            >
              <div className={styles.socialBackgroundSection}>
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="20px"
                  height="20px"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/creativemonkindia/"
              target="_blank"
            >
              <div className={styles.socialBackgroundSection}>
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  width="20px"
                  height="20px"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div>
          <h2>Services</h2>
          <p>Social Media Marketing</p>
          <p>Lead Generation</p>
          <p>SEO</p>
          <p>Branding</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <a href="mailto:info@creativemonk.in" target="_blank">
            <p className={styles.infoPara}>
              <span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="#fc6404"
                  style={{ marginBottom: "-3px" }}
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>{" "}
              </span>
              info@creativemonk.in
            </p>
          </a>
          <a href="tel: +91-9463445566" target="_blank">
            <p className={styles.infoPara}>
              <span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="#fc6404"
                  style={{ marginBottom: "-3px" }}
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>{" "}
              </span>
              +91-9463445566
            </p>
          </a>
          <p className={styles.infoPara}>
            <span>
              <svg
                aria-hidden="true"
                viewBox="0 0 384 512"
                xmlns="http://www.w3.org/2000/svg"
                width={15}
                height={15}
                fill="#fc6404"
                style={{ marginBottom: "-3px" }}
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>{" "}
            </span>
            Office No. 11-12, 9th floor, Sushma Infinium, Zirakpur, Punjab,
            140603
          </p>
        </div>
        <div className={styles.footerContactForm}>
          <h2>Enquiry Now</h2>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          {errorMessage ? (
            <p style={{ color: "red", fontSize: "12px", textAlign: "center" }}>
              Something Went Wrong , Please try again later.
            </p>
          ) : (
            <input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={true}
            />
          )}
          {successMessage ? (
            <p
              style={{ color: "green", fontSize: "13px", textAlign: "center" }}
            >
              Form Sumbitted Successfully.
            </p>
          ) : (
            <button onClick={submitHandler}>Send</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
