import styles from "../Styles/Form.module.css";
import close from "../Assets/close_FILL0_wght400_GRAD0_opsz24.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import emailjs from "@emailjs/browser";

let Form = () => {
  let serviceId = "service_kcn2rg9";
  let templateId = "template_haz4avi";
  let publicKey = "XJQAsvRtTi0YAvyyX";
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [errorMessage, setErrorMessage] = useState(false);
  let [formDataSent, setFormDataSent] = useState(false);
  let [budget, setBudget] = useState("Below 50,000 INR");
  let [selectedCategory, setSelectedCategory] = useState(
    "Social Media Marketing"
  );
  let emailParams = {
    from_name: name,
    from_email: email,
    to_name: "Sahil Sehgal",
    message: `Name - ${name}\nEmail - ${email}\nPhone Number - ${phoneNumber}\nService Required - ${selectedCategory}\nBudget - ${budget}`,
  };
  let { showForm, setShowForm } = useContext(AuthContext);
  let submitHandler = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !phoneNumber ||
      !selectedCategory ||
      !budget
    ) {
      return;
    }
    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .catch((error) => {
        setErrorMessage(true);
      });

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
          service_required: selectedCategory,
          budget: budget,
          date: new Date().toDateString(),
          time_HH_MM_SS: new Date().toLocaleTimeString(),
        }),
      }
    )
      .then((res) => {
        setFormDataSent(true);
        setTimeout(() => {
          setShowForm(false);
        }, 2000);
        window.location.href = "/thankyou";
        return res.json();
      })
      .catch((err) => {
        setErrorMessage(true);
        setTimeout(() => {
          setShowForm(false);
        }, 2000);
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
          <div className={styles.fieldsSection}>
            <p>
              Name <span className={styles.requiredMark}>*</span>
            </p>
            <input
              placeholder="Name"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>
              Email <span className={styles.requiredMark}>*</span>
            </p>
            <input
              placeholder="Email"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorMessage ? (
              <p
                style={{ fontSize: "13px", color: "red", textAlign: "center" }}
              >
                Something Went Wrong , Please try again later.
              </p>
            ) : (
              <div>
                <p>
                  Phone Number <span className={styles.requiredMark}>*</span>
                </p>
                <input
                  placeholder="Phone Number"
                  required={true}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            )}
            <p>
              Service Required <span className={styles.requiredMark}>*</span>
            </p>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
              required
            >
              <option value="Social Media Marketing">
                Social Media Marketing
              </option>
              <option value="Paid Ads">Paid Ads</option>
              <option value="SEO">SEO</option>
              <option value="Branding">Branding</option>
              <option value="Packaging">Packaging</option>
              <option value="Website Development">Website Development</option>
            </select>
            <p>
              Budget <span className={styles.requiredMark}>*</span>
            </p>
            <select
              value={budget}
              onChange={(e) => {
                setBudget(e.target.value);
              }}
              required
            >
              <option value="Below 50,000 INR">Below 50,000 INR</option>
              <option value="Between 50,000 INR and 1 Lakh INR">
                Between 50,000 INR and 1 Lakh INR
              </option>
              <option value="Between 1 Lakh INR and 2 Lakhs INR">
                Between 1 Lakh INR and 2 Lakhs INR
              </option>
              <option value="Above 2 Lakhs INR">Above 2 Lakhs INR</option>
            </select>
            {formDataSent ? (
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  fontSize: "13px",
                }}
              >
                Form Submitted Successfully.
              </p>
            ) : (
              <button onClick={submitHandler}>Submit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
