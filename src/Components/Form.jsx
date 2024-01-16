import styles from "../Styles/Form.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

let Form = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [businessName, setBusinessName] = useState("");
  let [service, setService] = useState("");
  let [errorMessage, setErrorMessage] = useState(false);
  let [formDataSent, setFormDataSent] = useState(false);
  let { showForm, setShowForm } = useContext(AuthContext);
  let submitHandler = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !phoneNumber ||
      !businessName ||
      !service
    ) {
      return;
    }
    fetch("https://creative-monk-lp-default-rtdb.firebaseio.com/data.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone_number: phoneNumber,
        business_name: businessName,
        service_want_to_enquire: service,
        date: new Date().toDateString(),
        time_HH_MM_SS: new Date().toLocaleTimeString(),
      }),
    })
      .then((res) => {
        setFormDataSent(true);
        setTimeout(() => {
          setShowForm(false);
        }, 2000);
        return res.json();
      })
      .catch((err) => {
        setErrorMessage(true);
        setTimeout(() => {
          setShowForm(false);
        }, 3000);
      });
  };
  return (
    <>
      <div className={`${styles.form} ${showForm ? styles.showForm : ""}`}>
        <div className={styles.containerForm}>
          <div className={styles.cancelSection}>
            <img src={close} onClick={() => setShowForm(false)} />
          </div>
          <h1>Contact Now</h1>
          <p>Get the instant quotes from our sales representatives!</p>
          <input
            placeholder="Name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone Number"
            required={true}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            placeholder="Your Business Name"
            required={true}
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
          {errorMessage ? (
            <p style={{ fontSize: "13px", color: "red", textAlign: "center" }}>
              Something Went Wrong , Please try again later.
            </p>
          ) : (
            <select
              required={true}
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value={""}>
                Select Service You Want To Enquire Regarding
              </option>
              <option value={"Social Media Marketing"}>
                Social Media Marketing
              </option>
              <option value={"Lead Generation"}>Lead Generation</option>
              <option value={"SEO"}>SEO</option>
              <option value={"Branding"}>Branding</option>
            </select>
          )}
          {formDataSent ? (
            <p
              style={{ color: "green", textAlign: "center", fontSize: "13px" }}
            >
              Form Submitted Successfully.
            </p>
          ) : (
            <button onClick={submitHandler}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
