import styles from "../Styles/Body.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bestAgencyBackground from "../Assets/best-agency-background.png";
import servicesImage from "../Assets/servicesGridImage.jpg";
import nextLevelBackground from "../Assets/next-level-background-image.jpg";
import triangleSvg from "../Assets/change_history_FILL1_wght400_GRAD0_opsz24.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import loadingGif from "../Assets/loadingGif.webp";

import ui1 from "../Assets/ui-1.png";
import ui2 from "../Assets/ui-2.png";
import ui3 from "../Assets/ui-3.png";

import social1 from "../Assets/social-1.jpg";
import social2 from "../Assets/social-2.jpg";
import social3 from "../Assets/social-3.jpg";
import social4 from "../Assets/social-4.jpg";
import social5 from "../Assets/social-5.jpg";
import social6 from "../Assets/social-6.jpg";
import social7 from "../Assets/social-7.jpg";
import social8 from "../Assets/social-8.jpg";
import social9 from "../Assets/social-9.jpg";
import social10 from "../Assets/social-10.jpg";
import social11 from "../Assets/social-11.jpg";
import social12 from "../Assets/social-12.jpg";

import web1 from "../Assets/web-1.jpeg";
import web2 from "../Assets/web-2.jpeg";
import web3 from "../Assets/web-3.jpeg";
import web4 from "../Assets/web-4.jpg";
import web5 from "../Assets/web-5.jpg";
import web6 from "../Assets/web-6.jpeg";
import web7 from "../Assets/web-7.jpeg";
import web8 from "../Assets/web-8.jpeg";
import web9 from "../Assets/web-9.jpeg";
import web10 from "../Assets/web-10.jpg";
import web11 from "../Assets/web-11.jpg";
import web12 from "../Assets/web-12.jpg";
import web13 from "../Assets/web-13.jpg";
import web14 from "../Assets/web-14.jpg";
import web15 from "../Assets/web-15.jpg";
import web16 from "../Assets/web-16.jpg";
import web17 from "../Assets/web-17.jpg";
import web18 from "../Assets/web-18.jpg";
import web19 from "../Assets/web-19.png";
import web20 from "../Assets/web-20.png";

import pack1 from "../Assets/pack-1.jpg";
import pack2 from "../Assets/pack-2.jpg";
import pack3 from "../Assets/pack-3.jpeg";
import pack4 from "../Assets/pack-4.jpeg";
import pack5 from "../Assets/pack-5.png";
import pack6 from "../Assets/pack-6.png";
import pack7 from "../Assets/pack-7.png";
import pack8 from "../Assets/pack-8.png";
import pack9 from "../Assets/pack-9.png";

import logo1 from "../Assets/logo-1.png";
import logo2 from "../Assets/logo-2.jpg";
import logo3 from "../Assets/logo-3.png";
import logo4 from "../Assets/logo-4.png";
import logo5 from "../Assets/logo-5.png";
import logo6 from "../Assets/logo-6.png";
import logo7 from "../Assets/logo-7.png";
import logo8 from "../Assets/logo-8.png";
import logo9 from "../Assets/logo-9.png";
import logo10 from "../Assets/logo-10.png";

import fc1 from "../Assets/fc1.png";
import fc2 from "../Assets/fc2.png";
import fc3 from "../Assets/fc3.webp";
import fc4 from "../Assets/fc4.png";
import fc5 from "../Assets/fc5.png";
import fc6 from "../Assets/fc6.png";
import fc7 from "../Assets/fc7.png";
import fc8 from "../Assets/fc8.jpg";
import fc9 from "../Assets/fc9.png";
import fc10 from "../Assets/fc10.png";
import fc11 from "../Assets/fc11.png";
import fc12 from "../Assets/fc12.png";
import fc13 from "../Assets/fc13.png";
import fc14 from "../Assets/fc14.png";
import fc15 from "../Assets/fc15.png";
import fc16 from "../Assets/fc16.png";
import fc17 from "../Assets/fc17.png";
import fc18 from "../Assets/fc18.png";
import fc19 from "../Assets/fc19.png";
import fc20 from "../Assets/fc20.png";
import fc21 from "../Assets/fc21.png";
import fc22 from "../Assets/fc22.png";
import fc23 from "../Assets/fc23.png";
import fc24 from "../Assets/fc24.png";
import fc25 from "../Assets/fc25.png";
import fc26 from "../Assets/fc26.png";

let Body = () => {
  let [successMessage, setSuccessMessage] = useState(false);
  let [errorMessage, setErrorMessage] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [businessName, setBusinessName] = useState("");
  let [service, setService] = useState("Social Media Marketing");
  let [userClicksOnWebForFirstTime, setUserClicksOnWebForFirstTime] =
    useState(false);
  let [
    userClicksOnPackagingForFirstTime,
    setUserClicksOnPackagingForFirstTime,
  ] = useState(false);
  let [userClicksOnUIForFirstTime, setUserClicksOnUIForFirstTime] =
    useState(false);
  let [userClicksOnLogoForFirstTime, setUserClicksOnLogoForFirstTime] =
    useState(false);
  let [heightForPackagingImages, setHeightForPackagingImages] =
    useState("320px");
  let { showForm, setShowForm } = useContext(AuthContext);
  let [selectedCategory, setSelectedCategory] = useState(
    "Social Media Marketing"
  );
  let [displayedData, setDisplayedData] = useState([]);
  let [gridForLogo, setGridForLogo] = useState(5);
  let [gridPercentageForLogo, setGridPercentageForLogo] = useState(19);
  let responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 4,
    },
    smallDesktop: {
      breakpoint: { max: 2000, min: 1500 },
      items: 4,
    },
    bigTablet: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  let options = {
    ssr: true,
    swipeable: true,
    arrows: false,
    infinite: true,
    keyBoardControl: true,
    autoPlay: true,
    autoPlaySpeed: 3000,
    customTransition: "transform 300ms ease-in-out",
    focusOnSelect: true,
    shouldResetAutoplay: true,
    rewind: true,
    rewindWithAnimation: true,
    rtl: false,
    showThumbs: false,
  };
  let items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  let firstCarouselImages = [
    fc1,
    fc2,
    fc3,
    fc4,
    fc5,
    fc6,
    fc7,
    fc8,
    fc9,
    fc10,
    fc11,
    fc12,
    fc13,
    fc14,
    fc15,
    fc16,
    fc17,
    fc18,
    fc19,
    fc20,
    fc21,
    fc22,
    fc23,
    fc24,
    fc25,
    fc26,
  ];
  let items2 = [
    {
      comment:
        "Creative Monk's digital marketing agency in Chandigarh helped us reach new heights. Their web development skills are unmatched, and their creative design transformed our online presence. They are more than just a company; they are a digital marketing powerhouse.",
      person_image:
        "https://creativemonk.in/wp-content/uploads/2023/11/wepik-export-20231009080856mTi9-compressed.jpg",
      person_name: "Rohit Rana",
    },
    {
      comment:
        "I was blown away by Creative Monk's PPC services. Their PPC experts in Chandigarh optimized our campaigns, bringing in a surge of leads. They're undoubtedly a top SEO company that knows how to deliver results.",
      person_image:
        "https://creativemonk.in/wp-content/uploads/2023/11/wepik-export-202310090814203GgC-compressed.jpg",
      person_name: "Harish Panwar",
    },
    {
      comment:
        " As a business owner, finding the best digital marketing agency in Chandigarh was crucial. Creative Monk exceeded my expectations with their digital marketing services. They've mastered the art of social media marketing and helped me connect with my audience on a whole new level.",
      person_image:
        " https://creativemonk.in/wp-content/uploads/2023/11/indian-businesswoman-white-background-showing-screen-laptop-e1696838526505-compressed.jpg",
      person_name: " Aayushi Goyel",
    },
    {
      comment:
        "I can't thank Creative Monk enough for their exceptional SEO services in Chandigarh. Their team of SEO experts took our website from obscurity to the first page of search results. Their dedication and professionalism truly make them the best SEO company in Chandigarh! ",
      person_image:
        " https://creativemonk.in/wp-content/uploads/2023/11/testimonial_1.jpeg",
      person_name: "Manisha Khurana ",
    },
  ];
  let socialPortfolio = [
    social1,
    social2,
    social3,
    social4,
    social5,
    social6,
    social7,
    social8,
    social9,
    social10,
    social11,
    social12,
  ];
  let webPortfolio = [
    web1,
    web2,
    web3,
    web4,
    web5,
    web6,
    web7,
    web8,
    web9,
    web10,
    web11,
    web12,
    web13,
    web14,
    web15,
    web16,
    web17,
    web18,
    web19,
    web20,
  ];
  let packagingPortfolio = [
    pack1,
    pack2,
    pack3,
    pack4,
    pack5,
    pack6,
    pack7,
    pack8,
    pack9,
  ];
  let uiPortfolio = [ui1, ui2, ui3];
  let logoPortfolio = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];
  useEffect(() => {
    setDisplayedData(socialPortfolio);
  }, []);
  useEffect(() => {
    if (selectedCategory == "Social Media Marketing") {
      setDisplayedData(socialPortfolio);
    } else if (selectedCategory == "Web Development") {
      setDisplayedData(webPortfolio);
    } else if (selectedCategory == "Packaging Design") {
      setDisplayedData(packagingPortfolio);
    } else if (selectedCategory == "Logo Design") {
      setDisplayedData(logoPortfolio);
    } else if (selectedCategory == "UI/UX Design") {
      setDisplayedData(uiPortfolio);
    } else {
      setDisplayedData([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (window.innerWidth >= 1440) {
      setHeightForPackagingImages("320px");
    } else if (window.innerWidth < 1440 && window.innerWidth > 1100) {
      setHeightForPackagingImages("250px");
    } else if (window.innerWidth < 1100 && window.innerWidth > 900) {
      setHeightForPackagingImages("200px");
    } else if (window.innerWidth < 900 && window.innerWidth > 750) {
      setHeightForPackagingImages("230px");
    } else if (window.innerWidth < 750 && window.innerWidth > 600) {
      setHeightForPackagingImages("200px");
    } else if (window.innerWidth < 600 && window.innerWidth > 500) {
      setHeightForPackagingImages("170px");
    } else if (window.innerWidth < 500 && window.innerWidth > 400) {
      setHeightForPackagingImages("130px");
    } else if (window.innerWidth < 400) {
      setHeightForPackagingImages("220px");
    }
  }, []);

  useEffect(() => {
    if (userClicksOnWebForFirstTime) {
      setTimeout(() => {
        setUserClicksOnWebForFirstTime(false);
      }, 2500);
    } else if (userClicksOnPackagingForFirstTime) {
      setTimeout(() => {
        setUserClicksOnPackagingForFirstTime(false);
      }, 2500);
    } else if (userClicksOnUIForFirstTime) {
      setTimeout(() => {
        setUserClicksOnUIForFirstTime(false);
      }, 2500);
    } else if (userClicksOnLogoForFirstTime) {
      setTimeout(() => {
        setUserClicksOnLogoForFirstTime(false);
      }, 2500);
    }
  }, [
    userClicksOnWebForFirstTime,
    userClicksOnPackagingForFirstTime,
    userClicksOnUIForFirstTime,
    userClicksOnLogoForFirstTime,
  ]);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setGridForLogo(2);
      setGridPercentageForLogo(49);
    } else if (window.innerWidth < 767) {
      setGridForLogo(3);
      setGridPercentageForLogo(33);
    } else if (window.innerWidth < 1000) {
      setGridForLogo(4);
      setGridPercentageForLogo(24);
    }
  }, []);

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
        setSuccessMessage(true);
        return res.json();
      })
      .catch((err) => {
        setErrorMessage(true);
      });
  };
  return (
    <>
      <div className={styles.bodyContainer}>
        <div className={styles.innerBodyContainer}>
          <div className={styles.firstCarouselBlock}>
            <Carousel responsive={responsive} {...options} showThumbs={false}>
              {firstCarouselImages.map((item, index) => (
                <div key={index} className={styles.firstCarouselItem}>
                  <img src={item} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div
          className={styles.bestAgencySection}
          style={{ backgroundImage: `url(${bestAgencyBackground})` }}
        >
          <h1>
            If you are looking for the Best Digital Marketing Agency in
            Chandigarh, We are the First Choice for Countless Successful
            Businesses.
          </h1>
          <button
            className={styles.enquiryButton}
            onClick={() => setShowForm(true)}
          >
            Enquiry Now
          </button>
        </div>
        <div className={styles.creativeMonkServicesSection} id="about">
          <h1>How Creative Monk Can Help?</h1>
          <p className={styles.servicesPara}>
            Creative Monk fuels your digital success. From standout social media
            to targeted lead generation, expert SEO, and transformative
            branding, we’re your creative ally. Elevate your brand with us –
            where creativity meets strategy for impactful results.
          </p>
          <div className={styles.servicesGridBlock}>
            <img src={servicesImage} className={styles.servicesImage} />
            <div className={styles.servicesDetailsBlock}>
              <div className={styles.serviceDetail}>
                <div className={styles.serviceIconSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    height="50px"
                    width="50px"
                  >
                    <path d="m471.211 430.854-67.01-116.065c2.576-4.102 6.533-7.278 11.505-8.999 15.898-5.504 28.851-19.441 34.648-37.283 5.798-17.842 3.512-36.731-6.116-50.53-5.432-7.785-5.432-17.456-.001-25.24 9.627-13.798 11.915-32.688 6.118-50.53s-18.749-31.78-34.648-37.285c-8.971-3.106-14.656-10.93-14.837-20.419-.321-16.821-9.574-33.447-24.75-44.475-15.177-11.027-33.85-14.691-49.948-9.799-9.083 2.761-18.28-.228-24.004-7.799-10.147-13.418-27.405-21.43-46.166-21.43-.001 0-.001 0-.002 0-18.759 0-36.018 8.011-46.167 21.431-5.726 7.572-14.924 10.561-24.003 7.801-16.097-4.893-34.77-1.23-49.948 9.796-15.178 11.027-24.431 27.652-24.753 44.474-.182 9.491-5.866 17.315-14.834 20.42-15.898 5.503-28.852 19.441-34.649 37.283s-3.512 36.732 6.115 50.531c5.432 7.785 5.432 17.456.001 25.239-9.628 13.798-11.915 32.687-6.118 50.529 5.797 17.843 18.75 31.781 34.649 37.286 4.973 1.722 8.93 4.898 11.506 8.999l-67.01 116.065c-2.563 4.44-2.327 9.803.617 13.996s7.91 6.237 12.958 5.331l67.25-12.061 23.181 64.272c1.741 4.823 5.992 8.101 11.096 8.555.4.036.798.053 1.192.053 4.644 0 8.874-2.425 11.236-6.517l58.751-101.76c8.538 4.506 18.499 6.99 28.93 6.99 10.43 0 20.392-2.484 28.93-6.99l58.751 101.76c2.363 4.092 6.593 6.517 11.236 6.517.395 0 .793-.018 1.193-.053 5.104-.454 9.355-3.731 11.096-8.556l23.18-64.27 67.251 12.06c5.047.903 10.012-1.139 12.957-5.332 2.944-4.192 3.18-9.555.617-13.995zm-313.542 60.076-23.296-64.59c-1.323-3.668-5.098-5.847-8.938-5.16l-67.583 12.12 54.987-95.24c3.346 12.533 11.462 24.209 23.042 32.623 15.178 11.027 33.85 14.691 49.947 9.798 9.082-2.759 18.281.228 24.005 7.798 1.307 1.729 2.736 3.364 4.268 4.907zm98.331-97.217c-13.776 0-26.264-5.639-33.405-15.083-7.372-9.75-18.493-15.144-30.166-15.144-3.729 0-7.517.551-11.254 1.687-11.329 3.441-24.746.664-35.89-7.434-11.144-8.097-17.933-19.999-18.159-31.836-.308-16.126-10.356-29.956-25.599-35.232-11.188-3.874-20.41-14.009-24.666-27.11-4.257-13.102-2.753-26.72 4.022-36.43 9.229-13.227 9.229-30.321-.001-43.55-6.774-9.711-8.277-23.33-4.02-36.431s13.479-23.235 24.667-27.108c15.241-5.276 25.289-19.106 25.597-35.234.227-11.837 7.015-23.739 18.16-31.835 11.145-8.098 24.562-10.876 35.891-7.432 15.433 4.689 31.689-.593 41.418-13.459 7.142-9.444 19.63-15.082 33.406-15.081 13.775 0 26.263 5.639 33.403 15.082 9.728 12.866 25.985 18.147 41.419 13.458 11.327-3.442 24.746-.665 35.891 7.434 11.144 8.097 17.932 19.999 18.158 31.836.308 16.125 10.356 29.955 25.6 35.232 11.188 3.874 20.409 14.008 24.666 27.109 4.256 13.102 2.753 26.721-4.022 36.43-9.23 13.228-9.229 30.322 0 43.55 6.775 9.711 8.278 23.33 4.021 36.431s-13.478 23.234-24.666 27.108c-15.242 5.277-25.291 19.106-25.599 35.233-.227 11.838-7.015 23.739-18.16 31.836s-24.562 10.875-35.89 7.433c-15.432-4.689-31.69.592-41.418 13.458-7.141 9.444-19.629 15.082-33.404 15.082zm130.564 27.467c-3.839-.688-7.614 1.491-8.938 5.16l-23.295 64.589-56.431-97.741c1.531-1.543 2.96-3.178 4.267-4.906 5.724-7.571 14.924-10.557 24.003-7.799 16.098 4.892 34.771 1.23 49.947-9.797 11.582-8.415 19.697-20.092 23.043-32.625l54.987 95.241zm2.823-215.824c0-73.55-59.837-133.388-133.387-133.388s-133.387 59.837-133.387 133.388 59.837 133.388 133.387 133.388 133.387-59.838 133.387-133.388zm-133.387 117.388c-64.728 0-117.387-52.66-117.387-117.388s52.659-117.388 117.387-117.388 117.387 52.66 117.387 117.388-52.66 117.388-117.387 117.388zm83.927-146.994c-.995-3.062-3.73-5.23-6.939-5.5l-50.121-4.209-19.492-46.368c-1.248-2.969-4.155-4.9-7.375-4.9s-6.127 1.931-7.375 4.9l-19.492 46.368-50.122 4.209c-3.209.27-5.944 2.437-6.939 5.5s-.057 6.424 2.381 8.528l38.075 32.867-11.485 48.969c-.735 3.135.481 6.406 3.086 8.299 2.605 1.894 6.092 2.039 8.846.371l43.025-26.056 43.023 26.055c1.277.774 2.712 1.157 4.144 1.157 1.655 0 3.306-.513 4.703-1.528 2.605-1.893 3.822-5.164 3.086-8.299l-11.485-48.969 38.075-32.867c2.437-2.104 3.376-5.465 2.381-8.527zm-54.579 32.448c-2.254 1.946-3.241 4.983-2.561 7.882l8.246 35.158-30.889-18.707c-2.547-1.543-5.741-1.543-8.288 0l-30.89 18.707 8.246-35.158c.68-2.899-.307-5.937-2.561-7.882l-27.337-23.597 35.986-3.022c2.968-.249 5.551-2.126 6.706-4.872l13.994-33.29 13.994 33.291c1.154 2.746 3.738 4.623 6.706 4.872l35.985 3.022z"></path>
                  </svg>
                </div>
                <p>Cultivate success, nurture your brand with Creative Monk.</p>
              </div>
              <div className={styles.serviceDetail}>
                <div className={styles.serviceIconSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    x="0"
                    y="0"
                    viewBox="0 0 682.667 682.667"
                  >
                    <g>
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            fill="#ffffff"
                            opacity="1"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                      >
                        <path
                          d="M0 0c10.247 18.444 29.927 30.926 52.523 30.926 33.161 0 60.042-26.882 60.042-60.042 0-9.642-2.272-18.753-6.311-26.826"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(300.689 328.72)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0c-8.868-5.167-19.181-8.127-30.185-8.127-5.684 0-11.184.789-16.395 2.266"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(383.397 247.69)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0a109.653 109.653 0 0 1 17.302-7.704c4.338-1.498 7.293-5.524 7.293-10.113v-17.612c0-5.885 4.772-10.658 10.658-10.658H71.4c5.886 0 10.658 4.773 10.658 10.658v17.612c0 4.589 2.955 8.615 7.294 10.113a110.238 110.238 0 0 1 38.555 23.008 10.651 10.651 0 0 0 12.282 1.529l15.514-8.407c5.175-2.804 11.644-.882 14.449 4.293l17.222 31.78c2.804 5.175.882 11.645-4.293 14.448l-15.499 8.4c-4.012 2.174-6.166 6.653-5.422 11.154a110.88 110.88 0 0 1 1.479 18.082c0 6.158-.507 12.198-1.479 18.081-.744 4.502 1.41 8.982 5.422 11.155l15.499 8.4c5.175 2.803 7.097 9.273 4.293 14.448l-17.222 31.78c-2.805 5.175-9.274 7.097-14.449 4.293l-15.514-8.407a10.651 10.651 0 0 0-12.282 1.529 110.248 110.248 0 0 1-38.556 23.008c-4.338 1.498-7.293 5.524-7.293 10.113v17.612c0 5.885-4.772 10.658-10.658 10.658H35.253c-5.886 0-10.658-4.773-10.658-10.658v-17.612c0-4.589-2.954-8.615-7.293-10.113a110.266 110.266 0 0 1-38.556-23.008 10.651 10.651 0 0 0-12.282-1.529l-15.514 8.407c-5.175 2.804-11.644.882-14.449-4.293l-17.221-31.78c-2.804-5.175-.883-11.645 4.293-14.448l15.499-8.4"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(299.885 203.022)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0h237.589a8.291 8.291 0 0 0 8.291-8.291v-49.938H-94.763v49.938A8.29 8.29 0 0 0-86.473 0H-34"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(118.215 328.719)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0v33.783c0 3.944 1.516 7.737 4.235 10.594l134.933 141.78h-340.643l134.933-141.78a15.363 15.363 0 0 0 4.236-10.594v-75.986a5.218 5.218 0 0 1 2.649-4.542l51.868-29.344C-4.31-78.058 0-75.544 0-71.547V-35"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(224.926 84.333)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0v-33.155"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(23.452 476.685)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0v-33.156"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(149.002 397.872)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0v-33.155"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(117.063 504.44)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0v-33.155"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(269.665 487.862)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0c0-9.95-8.066-18.016-18.016-18.016-9.95 0-18.016 8.066-18.016 18.016 0 9.95 8.066 18.016 18.016 18.016C-8.066 18.016 0 9.95 0 0Z"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(100.65 418.19)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                        <path
                          d="M0 0c0-9.949-8.066-18.016-18.016-18.016-9.95 0-18.016 8.067-18.016 18.016 0 9.95 8.066 18.017 18.016 18.017C-8.066 18.017 0 9.95 0 0Z"
                          style={{
                            strokeWidth: 15,
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeDasharray: "none",
                            strokeOpacity: 1,
                          }}
                          transform="translate(216.11 437.767)"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="15"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          strokeDasharray="none"
                          strokeOpacity=""
                          dataoriginal="#000000"
                          opacity="1"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <p>
                  Unlock opportunities, amplify growth – choose Creative Monk.
                </p>
              </div>
              <div className={styles.serviceDetail}>
                <div className={styles.serviceIconSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    x="0"
                    y="0"
                    viewBox="0 0 32 32"
                  >
                    <g>
                      <path
                        d="M30.5 31h-4a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0V30h3V8.5a.5.5 0 1 1 1 0v22a.5.5 0 0 1-.5.5zM22 30h-3v-2.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-1 0z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M29.494 30h-28a.5.5 0 0 0 0 1h28a.5.5 0 0 0 0-1zM10.5 27.5a.5.5 0 0 1-.5-.5V16.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V17h-3v10a.5.5 0 0 1-.5.5zM2.5 29a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V28a.5.5 0 0 1-1 0v-7H3v7.5a.5.5 0 0 1-.5.5zM18.5 20a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H19v6.5a.5.5 0 0 1-.5.5z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M3.5 31a.5.5 0 0 1 0-1C13.701 30 22 21.701 22 11.5V9h-1.5a.5.5 0 0 1-.435-.748l4-7c.18-.312.689-.312.869 0l4 7A.502.502 0 0 1 28.5 9H27v2.5a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5h1.139L24.5 2.508 21.361 8H22.5a.5.5 0 0 1 .5.5v3C23 22.252 14.252 31 3.5 31z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <circle
                        cx="26.5"
                        cy="13.5"
                        r=".5"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></circle>
                    </g>
                  </svg>
                </div>
                <p>
                  Boost visibility, conquer the digital realm with Creative
                  Monk.
                </p>
              </div>
              <div className={styles.serviceDetail}>
                <div className={styles.serviceIconSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    x="0"
                    y="0"
                    viewBox="0 0 496 496"
                  >
                    <g>
                      <path
                        d="m402.524 432-18.52-55.568a56.001 56.001 0 0 0-43.112-37.384l-53.464-9.728v-4.144c9.304-5.4 17.4-12.624 23.848-21.176h16.152c13.232 0 24-10.768 24-24v-96c0-57.344-46.656-104-104-104s-104 46.656-104 104v56c0 15.424 10.968 28.328 25.512 31.336 4.488 22.992 18.856 42.448 38.488 53.84v4.144l-53.472 9.728a55.99 55.99 0 0 0-43.104 37.384l-3.2 9.608-27.248-27.248c-3.12-3.12-3.12-8.2 0-11.32l31.6-31.592-59.312-59.312L16.98 292.28C6.404 302.856.58 316.92.58 331.88s5.824 29.016 16.4 39.592l108.12 108.12C135.676 490.168 149.74 496 164.7 496s29.016-5.832 39.344-16.168l38.968-35.704L230.86 432h171.664zm-67.096-152c0 4.416-3.592 8-8 8H320.7a79.46 79.46 0 0 0 5.216-16.664c3.424-.712 6.576-2.072 9.512-3.784V280zm-8-26.224v-27.552c4.76 2.776 8 7.88 8 13.776s-3.24 11-8 13.776zm-160 0c-4.76-2.776-8-7.88-8-13.776s3.24-11 8-13.776v27.552zm0-53.776v9.136a31.73 31.73 0 0 0-8 3.312V184c0-48.52 39.48-88 88-88s88 39.48 88 88v28.448a31.44 31.44 0 0 0-8-3.312V200h-8c-23.656 0-45.896-9.216-62.632-25.944l-9.368-9.368-9.368 9.368C221.324 190.784 199.084 200 175.428 200h-8zm16 56v-40.304c24.024-1.808 46.424-11.72 64-28.432 17.576 16.712 39.976 26.632 64 28.432V256c0 11.664-3.184 22.576-8.656 32h-55.344v16h42.192c-11.28 9.928-26.024 16-42.192 16-35.288 0-64-28.712-64-64zm88 76.312v.376l-24 24-24-24v-.376c7.584 2.384 15.64 3.688 24 3.688s16.416-1.304 24-3.688zM126.02 381.488a40.014 40.014 0 0 1 30.792-26.712l55.92-10.16 34.696 34.696 34.688-34.688 55.912 10.16a40 40 0 0 1 30.792 26.712L380.332 416H214.86l-31.16-31.16-34.624 31.32c-3.016 3.032-8.288 3.032-11.312 0l-17.472-17.472 5.728-17.2zM52.684 279.192l36.688 36.688-8.688 8.688-36.688-36.688 8.688-8.688zm140.28 189.104c-7.552 7.536-17.6 11.704-28.28 11.704s-20.728-4.168-28.288-11.72L28.276 360.168c-7.552-7.552-11.712-17.6-11.712-28.28 0-10.688 4.16-20.736 11.712-28.288l4.4-4.4 36.688 36.688-.288.288c-9.352 9.36-9.352 24.584 0 33.944l57.368 57.368c4.536 4.528 10.56 7.032 16.976 7.032s12.44-2.496 16.68-6.752l.6-.536 36.856 36.856-4.592 4.208zm16.4-15.04-36.776-36.776 10.568-9.552 36.712 36.712-10.504 9.616zM471.428 0h-112c-13.232 0-24 10.768-24 24v64c0 13.232 10.768 24 24 24h21.368l-8.272 48.248 77.2-48.248h21.704c13.232 0 24-10.768 24-24V24c0-13.232-10.768-24-24-24zm8 88c0 4.408-3.592 8-8 8h-26.296l-50.808 31.752L399.772 96h-40.344c-4.408 0-8-3.592-8-8V24c0-4.408 3.592-8 8-8h112c4.408 0 8 3.592 8 8v64z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M367.428 32h96v16h-96zM367.428 64h64v16h-64zM447.428 64h16v16h-16zM247.428 24C142.9 24 52.86 96.304 29.452 197.16l-15.16-25.272-13.72 8.232 28.12 46.856 46.856-28.12-8.232-13.72-21.68 13.008C68.308 105.88 151.276 40 247.428 40c21.016 0 41.752 3.12 61.632 9.28L313.796 34c-21.416-6.64-43.744-10-66.368-10zM491.54 177.136l-46.856-28.12-28.112 46.864 13.72 8.232 14-23.336c7.368 21.56 11.136 44.112 11.136 67.224 0 47.576-16.48 94.088-46.392 130.96l12.424 10.08c32.224-39.712 49.968-89.808 49.968-141.04 0-24.472-3.944-48.368-11.632-71.248l23.512 14.104 8.232-13.72z"
                        fill="#ffffff"
                        opacity="1"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                <p>Swift solutions, instant impact – rely on Creative Monk.</p>
              </div>
            </div>
          </div>
          <button
            className={styles.contactNowButton}
            onClick={() => setShowForm(true)}
          >
            Contact Now
          </button>
        </div>
        <div className={styles.ourServicesParentSection} id="services">
          <div className={styles.ourServicesSection}>
            <h6>Our Services</h6>
            <h1>Services We Provide</h1>
            <div className={styles.ourServicesGridSection}>
              <div className={styles.ourServicesIndividualServiceSection}>
                <div className={styles.ourServicesSvgSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="50px"
                    viewBox="0 1 511 511.99933"
                    width="50px"
                    fill="#fc6404"
                  >
                    <path d="m447.324219 317.765625c6.453125-19.917969 9.730469-40.691406 9.730469-61.859375 0-21.089844-3.253907-41.789062-9.667969-61.644531 14.105469-5.296875 26.929687-13.777344 37.578125-25.054688 18.402344-19.480469 28.113281-44.964843 27.347656-71.75-1.585938-55.300781-47.859375-98.992187-103.167969-97.4140622-26.789062.7656252-51.671875 11.9179692-70.074219 31.4023432-9.292968 9.839844-16.363281 21.210938-20.992187 33.507813-19.859375-6.410156-40.558594-9.664063-61.65625-9.664063-21.109375 0-41.824219 3.261719-61.695313 9.679688-14.332031-37.925781-51.011718-64.96875-93.894531-64.96875-55.324219 0-100.332031 45.007812-100.332031 100.328125 0 42.878906 27.046875 79.554687 64.972656 93.882813-6.421875 19.875-9.679687 40.589843-9.679687 61.695312 0 21.167969 3.277343 41.941406 9.730469 61.859375-37.953126 14.316406-65.023438 51.007813-65.023438 93.90625 0 15.101563 3.273438 29.621094 9.730469 43.152344 1.785156 3.738281 6.261719 5.324219 10 3.539062 3.734375-1.785156 5.320312-6.261719 3.539062-10-5.488281-11.5-8.269531-23.84375-8.269531-36.691406 0-47.046875 38.28125-85.324219 85.332031-85.324219 47.054688 0 85.335938 38.277344 85.335938 85.324219 0 47.050781-38.28125 85.328125-85.335938 85.328125-21.460937 0-41.972656-7.996094-57.753906-22.515625-3.050781-2.804687-7.796875-2.605469-10.597656.441406-2.804688 3.050781-2.609375 7.792969.441406 10.597657 18.558594 17.074218 42.675781 26.476562 67.910156 26.476562 42.945313 0 79.671875-27.125 93.957031-65.136719 19.847657 6.40625 40.542969 9.660157 61.632813 9.660157 21.09375 0 41.792969-3.253907 61.640625-9.65625 14.285156 38.011718 51.011719 65.132812 93.957031 65.132812 55.324219 0 100.332031-45.007812 100.332031-100.328125 0-42.898437-27.070312-79.59375-65.027343-93.90625zm-97.347657-276.023437c15.648438-16.570313 36.816407-26.054688 59.601563-26.707032.828125-.023437 1.648437-.035156 2.476563-.035156 45.929687 0 83.941406 36.683594 85.261718 82.882812.652344 22.78125-7.605468 44.453126-23.253906 61.027344-15.648438 16.570313-36.816406 26.054688-59.601562 26.707032-.828126.023437-1.652344.035156-2.476563.035156-45.929687 0-83.941406-36.683594-85.261719-82.882813-.65625-22.78125 7.605469-44.457031 23.253906-61.027343zm-36.121093 390.71875c-18.480469 6.007812-37.765625 9.0625-57.433594 9.0625-19.660156 0-38.945313-3.054688-57.425781-9.0625 1.417968-6.710938 2.171875-13.664063 2.171875-20.789063 0-55.320313-45.011719-100.324219-100.335938-100.324219-7.167969 0-14.160156.761719-20.90625 2.195313-6.058593-18.546875-9.132812-37.902344-9.132812-57.636719 0-19.671875 3.058593-38.964844 9.078125-57.464844 6.761718 1.445313 13.773437 2.210938 20.960937 2.210938 17.1875 0 34.144531-4.421875 49.046875-12.785156 3.609375-2.027344 4.894532-6.597657 2.867188-10.210938s-6.597656-4.894531-10.210938-2.867188c-12.664062 7.105469-27.085937 10.863282-41.703125 10.863282-47.054687 0-85.332031-38.277344-85.332031-85.328125 0-47.046875 38.28125-85.324219 85.332031-85.324219 47.054688 0 85.335938 38.277344 85.335938 85.328125 0 19.683594-6.863281 38.886719-19.324219 54.078125-2.628906 3.199219-2.160156 7.925781 1.042969 10.554688 3.199219 2.625 7.925781 2.160156 10.554687-1.042969 14.652344-17.863281 22.726563-40.449219 22.726563-63.59375 0-7.183594-.769531-14.195313-2.210938-20.957031 18.496094-6.019532 37.792969-9.078126 57.464844-9.078126 19.667969 0 38.957031 3.054688 57.445313 9.066407-1.636719 7.742187-2.371094 15.730469-2.140626 23.84375 1.558594 54.324219 46.246094 97.457031 100.253907 97.453125.964843 0 1.9375-.011719 2.910156-.042969 6.148437-.175781 12.195313-.90625 18.089844-2.152344 6.015625 18.492188 9.074219 37.785157 9.074219 57.449219 0 19.734375-3.078126 39.089844-9.132813 57.636719-6.746094-1.4375-13.738281-2.195313-20.902344-2.195313-55.324219 0-100.332031 45.003906-100.332031 100.324219 0 7.128906.75 14.082031 2.167969 20.789063zm98.164062 64.539062c-47.054687 0-85.332031-38.277344-85.332031-85.324219 0-47.050781 38.277344-85.328125 85.332031-85.328125 47.054688 0 85.332031 38.277344 85.332031 85.328125 0 47.046875-38.277343 85.324219-85.332031 85.324219zm0 0"></path>
                    <path d="m151.902344 56.054688c-2.585938-1.757813-5.988282-1.730469-8.542969.074218-2.554687 1.800782-5.289063 3.304688-8.164063 4.496094-10.304687-8.0625-25.238281-7.96875-35.46875.925781-5.316406 4.625-8.640624 11.019531-9.414062 17.925781-11.003906-1.636718-20.949219-7.695312-27.472656-16.984374-1.554688-2.210938-4.179688-3.410157-6.863282-3.152344-2.691406.261718-5.03125 1.949218-6.128906 4.417968-.214844.484376-5.261718 12.015626-4.617187 26.128907.492187 10.800781 4.355469 24.722656 18.445312 35.472656-5.074219 1.636719-10.433593 2.394531-15.773437 2.179687-3.476563-.136718-6.582032 2.125-7.519532 5.46875s.542969 6.894532 3.578126 8.582032c11.765624 6.535156 24.371093 9.808594 36.6875 9.808594 11.832031 0 23.394531-3.023438 33.683593-9.074219 12.902344-7.589844 22.277344-19.210938 27.367188-33.402344.160156-.359375.292969-.734375.398437-1.121094 2.617188-7.707031 3.988282-16.148437 3.988282-25.101562 0-.390625-.011719-.785157-.027344-1.175781 4.28125-5.046876 7.335937-11.027344 8.914062-17.492188.734375-3.039062-.484375-6.21875-3.070312-7.976562zm-21.046875 24.304687c.148437.78125.226562 1.589844.226562 2.363281 0 7.351563-1.09375 14.160156-3.175781 20.3125-.113281.28125-.207031.574219-.285156.875-3.894532 10.898438-10.984375 19.652344-20.894532 25.484375-9.070312 5.339844-19.480468 7.613281-30.089843 6.84375 2.429687-1.203125 4.777343-2.570312 7.023437-4.09375 2.25-1.53125 3.5-4.160156 3.257813-6.875-.242188-2.714843-1.9375-5.082031-4.425781-6.1875-14.003907-6.222656-21.492188-16.121093-22.253907-29.414062-.15625-2.722657-.019531-5.335938.273438-7.730469 10.316406 8.621094 23.53125 13.324219 37.324219 12.96875 4.066406-.105469 7.308593-3.429688 7.308593-7.496094v-4.550781c0-.03125 0-.066406 0-.101563-.050781-3.792968 1.558594-7.398437 4.425781-9.886718 5.359376-4.660156 13.507813-4.09375 18.167969 1.265625.9375 1.074219 2.132813 1.835937 3.4375 2.238281-.457031 1.257812-.578125 2.628906-.320312 3.984375zm0 0"></path>
                    <path d="m387.339844 106.242188h10.632812v44.722656c0 4.140625 3.359375 7.5 7.5 7.5 4.144532 0 7.5-3.359375 7.5-7.5v-44.722656h11.582032c4.140624 0 7.5-3.359376 7.5-7.5 0-4.140626-3.359376-7.5-7.5-7.5h-11.582032v-20.984376c0-7.203124 5.863282-13.066406 13.070313-13.066406h9.710937c4.140625 0 7.5-3.359375 7.5-7.5 0-4.144531-3.359375-7.5-7.5-7.5h-9.710937c-15.476563 0-28.070313 12.589844-28.070313 28.066406v20.984376h-10.632812c-4.140625 0-7.5 3.359374-7.5 7.5 0 4.140624 3.359375 7.5 7.5 7.5zm0 0"></path>
                    <path d="m83.816406 450.460938c1.785156 0 3.570313-.460938 5.160156-1.378907l51.050782-29.488281c3.183594-1.835938 5.160156-5.261719 5.160156-8.9375 0-3.671875-1.976562-7.097656-5.160156-8.933594l-51.050782-29.488281c-3.179687-1.839844-7.132812-1.839844-10.316406 0-3.183594 1.835937-5.164062 5.261719-5.164062 8.9375v58.972656c0 3.675781 1.980468 7.101563 5.164062 8.9375 1.589844.921875 3.371094 1.378907 5.15625 1.378907zm4.679688-61.179688 37.015625 21.378906-37.015625 21.378906zm0 0"></path>
                    <path d="m444.609375 358.554688h-65.179687c-11.320313 0-20.53125 9.210937-20.53125 20.535156v65.167968c0 11.324219 9.210937 20.535157 20.53125 20.535157h65.179687c11.320313 0 20.53125-9.210938 20.53125-20.535157v-65.167968c0-11.324219-9.210937-20.535156-20.53125-20.535156zm5.53125 85.703124c0 3.054688-2.480469 5.535157-5.53125 5.535157h-65.179687c-3.050782 0-5.53125-2.480469-5.53125-5.535157v-65.167968c0-3.050782 2.480468-5.535156 5.53125-5.535156h65.179687c3.050781 0 5.53125 2.484374 5.53125 5.535156zm0 0"></path>
                    <path d="m412.019531 389.003906c-12.5 0-22.671875 10.171875-22.671875 22.671875s10.171875 22.667969 22.671875 22.667969 22.671875-10.167969 22.671875-22.667969-10.171875-22.671875-22.671875-22.671875zm0 30.339844c-4.230469 0-7.671875-3.441406-7.671875-7.667969 0-4.230469 3.441406-7.671875 7.671875-7.671875s7.671875 3.441406 7.671875 7.671875c0 4.226563-3.441406 7.667969-7.671875 7.667969zm0 0"></path>
                    <path d="m310.703125 178.09375c-4.144531 0-7.5 3.359375-7.5 7.5v3.363281c-10.570313 6.230469-21.683594 11.609375-33.109375 16.011719-9.148438 3.523438-18.597656 6.453125-28.15625 8.746094-1.46875-1.128906-3.296875-1.8125-5.289062-1.8125h-34.339844c-8.296875 0-15.042969 6.75-15.042969 15.042968v39.386719c0 8.296875 6.746094 15.042969 15.042969 15.042969h6.863281l2.601563 50.007812c.207031 4.003907 3.519531 7.109376 7.484374 7.109376.128907 0 .261719-.003907.394532-.011719 4.136718-.214844 7.316406-3.742188 7.101562-7.878907l-2.5625-49.226562h12.457032c1.988281 0 3.820312-.679688 5.285156-1.808594 6.085937 1.46875 12.140625 3.195313 18.058594 5.160156 3.933593 1.300782 8.175781-.828124 9.480468-4.757812 1.304688-3.933594-.828125-8.179688-4.757812-9.480469-6.355469-2.109375-12.855469-3.964843-19.394532-5.539062v-36.613281c10.242188-2.453126 20.363282-5.597657 30.164063-9.371094 9.476563-3.652344 18.757813-7.929688 27.714844-12.773438v80.914063c-3.296875-1.78125-6.628907-3.480469-9.984375-5.09375-3.734375-1.796875-8.214844-.226563-10.007813 3.507812-1.796875 3.734375-.226562 8.214844 3.507813 10.011719 5.585937 2.6875 11.109375 5.648438 16.484375 8.804688v3.347656c0 4.144531 3.359375 7.5 7.5 7.5s7.5-3.355469 7.5-7.5v-122.089844c.003906-4.140625-3.355469-7.5-7.496094-7.5zm-80.378906 88.277344-28.058594-.039063.042969-39.429687h28.015625zm0 0"></path>
                  </svg>
                </div>
                <h2>Social Media Marketing</h2>
                <p>
                  Immerse your brand in the vibrant world of social media with
                  our tailored marketing strategies. From compelling content
                  creation to strategic campaign management, we navigate the
                  dynamic landscape to enhance your brand's visibility and
                  engagement. Our approach goes beyond likes and shares; we
                  build communities and foster genuine connections, transforming
                  online presence into a powerful catalyst for growth..
                </p>
                <button
                  className={styles.enquiryBtn}
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button>
              </div>
              <div className={styles.ourServicesIndividualServiceSection}>
                <div className={styles.ourServicesSvgSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    width="50px"
                    fill="#fc6404"
                  >
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M451.449,168.599C447.967,162.061,441.204,158,433.797,158h-56.81c-4.743-26.675-28.087-47-56.104-47   c-28.017,0-51.361,20.325-56.104,47h-57.555c4.514-6.908,7.15-15.15,7.15-24c0-24.262-19.738-44-44-44c-24.262,0-44,19.738-44,44   c0,8.85,2.636,17.092,7.15,24H86.598c-7.407,0-14.17,4.061-17.652,10.599c-3.481,6.537-3.077,14.416,1.056,20.562l134.196,199.556   V502c0,3.372,1.699,6.517,4.52,8.364c1.653,1.083,3.562,1.636,5.481,1.636c1.354,0,2.713-0.275,3.992-0.832l92-40.063   c3.648-1.589,6.007-5.189,6.007-9.168v-73.221L450.393,189.16C454.526,183.015,454.931,175.136,451.449,168.599z M320.883,131   c16.937,0,31.241,11.443,35.616,27h-71.231C289.642,142.443,303.947,131,320.883,131z M170.375,110c13.233,0,24,10.767,24,24   c0,13.233-10.767,24-24,24c-13.233,0-24-10.767-24-24C146.375,120.767,157.142,110,170.375,110z M297.899,380.086   c-1.109,1.649-1.702,3.592-1.702,5.58v69.719l-72,31.353v-91.072h36.127c5.523,0,10-4.477,10-10s-4.477-10-10-10h-40.801   L118.88,226h202.003c5.523,0,10-4.477,10-10s-4.477-10-10-10H105.431l-18.829-28h347.194L297.899,380.086z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M294.324,0c-24.262,0-44,19.738-44,44s19.739,44,44,44c24.262,0,44-19.738,44-44S318.586,0,294.324,0z M294.324,68   c-13.233,0-24-10.767-24-24c0-13.233,10.767-24,24-24c13.233,0,24,10.767,24,24S307.557,68,294.324,68z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M401.197,48.333c-5.523,0-10,4.477-10,10v56.834c0,5.524,4.477,10.001,10,10.001s10-4.477,10-10V58.333   C411.197,52.81,406.72,48.333,401.197,48.333z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M408.267,18.43c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07   s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S410.127,20.29,408.267,18.43z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M204.375,12.755c-5.523,0-10,4.477-10,10v41c0,5.523,4.477,10,10,10s10-4.477,10-10v-41   C214.375,17.232,209.898,12.755,204.375,12.755z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M68.197,0c-5.523,0-10,4.477-10,10v65.168c0,5.523,4.477,10,10,10s10-4.477,10-10V10C78.197,4.477,73.72,0,68.197,0z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M75.267,105.6c-1.86-1.87-4.44-2.93-7.07-2.93s-5.21,1.06-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07   c0,2.63,1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07   C78.197,110.03,77.127,107.46,75.267,105.6z"></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path d="M372.417,208.93c-1.86-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.22,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07   s1.06,5.21,2.93,7.07c1.86,1.86,4.43,2.93,7.07,2.93c2.63,0,5.2-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07   S374.277,210.79,372.417,208.93z"></path>{" "}
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <h2>Lead Generation</h2>
                <p>
                  Unlock the full potential of your business with our targeted
                  lead generation services. We employ sophisticated techniques
                  to identify and capture high-quality leads, ensuring that your
                  sales funnel is consistently fueled with promising
                  opportunities. Through meticulous analysis and personalized
                  outreach, we convert prospects into loyal customers, driving
                  sustained business growth and maximizing your return on
                  investment.
                </p>
                <button
                  className={styles.enquiryBtn}
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button>
              </div>
              <div className={styles.ourServicesIndividualServiceSection}>
                <div className={styles.ourServicesSvgSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="50"
                    fill="#fc6404"
                  >
                    <g>
                      <path d="m24 13.023h-2c-.552 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3s-1.346-3-3-3h-2c-.552 0-1-.449-1-1s.448-1 1-1h2c.552 0 1 .449 1 1h2c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.552 0 1 .449 1 1s-.448 1-1 1z"></path>
                      <path d="m32 15.023h3v-2h-3c-.552 0-1-.449-1-1v-1h4v-2h-4v-1c0-.551.448-1 1-1h3v-2h-3c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3z"></path>
                      <path d="m40 15.023h2c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3h-2c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3zm-1-7c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v4c0 .551-.448 1-1 1h-2c-.552 0-1-.449-1-1z"></path>
                      <path d="m63 23h-4v-3c0-2.757-2.243-5-5-5h-5v-10.977c0-1.654-1.346-3-3-3h-28c-1.654 0-3 1.346-3 3v10.977h-5c-2.757 0-5 2.243-5 5v6.082c-2.387 1.386-4 3.965-4 6.918s1.613 5.532 4 6.918v8.082c0 2.757 2.243 5 5 5h12v4h-1c-2.757 0-5 2.243-5 5v1h32v-1c0-2.757-2.243-5-5-5h-1v-4h12c2.757 0 5-2.243 5-5v-7h4zm-46-18.977c0-.551.448-1 1-1h28c.552 0 1 .449 1 1v12c0 .551-.448 1-1 1h-10.302l-5.865 3.888c-.333.224-.833-.046-.833-.448v-3.44h-11c-.552 0-1-.449-1-1zm-10 15.977c0-1.654 1.346-3 3-3h5.177c.408 1.173 1.512 2.023 2.823 2.023h9v1.44c0 1.399 1.138 2.537 2.537 2.537.5 0 .984-.146 1.401-.422l5.363-3.555h9.699c1.31 0 2.415-.85 2.823-2.023h5.177c1.654 0 3 1.346 3 3v3h-8v9h-6v-5h-6v12h-2v-14h-6v14h-2v-10h-6v3h-4.069c-.495-3.94-3.859-7-7.931-7-.692 0-1.359.097-2 .263zm32 19v-10h2v10zm-6 0h-2v-12h2zm-8 0h-2v-8h2zm-22-6c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm42.829 28h-27.658c.413-1.164 1.525-2 2.829-2h22c1.304 0 2.416.836 2.829 2zm-5.829-4h-16v-4h16zm14-6h-44c-1.654 0-3-1.346-3-3v-3h50v3c0 1.654-1.346 3-3 3zm3-8h-50v-2.263c.641.166 1.308.263 2 .263 4.072 0 7.436-3.06 7.931-7h4.069v5h-2v2h26v-2h-2v-5h6v7h8zm4-4h-10v-14h10z"></path>
                      <circle cx="28" cy="48" r="1"></circle>
                      <circle cx="32" cy="48" r="1"></circle>
                      <circle cx="36" cy="48" r="1"></circle>
                      <path d="m13 33c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"></path>
                      <path d="m53 27h6v2h-6z"></path>
                      <path d="m53 31h6v2h-6z"></path>
                      <path d="m53 35h6v2h-6z"></path>
                    </g>
                  </svg>
                </div>
                <h2>SEO</h2>
                <p>
                  Propel your brand to the forefront of online discovery with
                  our expert SEO strategies. We meticulously optimize your
                  digital assets to align with search engine algorithms,
                  ensuring top-ranking visibility. From keyword optimization to
                  technical enhancements, our approach is comprehensive. The
                  result is not just increased traffic but a sustainable and
                  robust online presence that stands the test of evolving search
                  engine dynamics.
                </p>
                <button
                  className={styles.enquiryBtn}
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button>
              </div>
              <div className={styles.ourServicesIndividualServiceSection}>
                <div className={styles.ourServicesSvgSection}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="50px"
                    height="50px"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    fill="#fc6404"
                  >
                    <g>
                      <path
                        d="M451.972 264.081v-6"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M451.972 229.495v-64.32"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="10.7199,28.5865"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M451.972 150.882v-6M60.028 264.081v-6"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M60.028 229.495v-64.32"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeDasharray: "10.7199,28.5865",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="10.7199,28.5865"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M60.028 150.882v-6M431.768 284.285h-6"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M393.812 284.285H102.21"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeDasharray: "11.9836,31.9564",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="11.9836,31.9564"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M86.232 284.285h-6M431.768 124.679h-6"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M393.812 124.679H102.21"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeDasharray: "11.9836,31.9564",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="11.9836,31.9564"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M86.232 124.679h-6"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M161.9 7.5h328.46c7.81 0 14.14 6.33 14.14 14.14v133.015M7.5 314.51V21.64c0-7.81 6.33-14.14 14.14-14.14H126.9M7.5 349.51v51.95c0 7.81 6.33 14.15 14.14 14.15H343.4M504.5 189.658V401.46c0 7.81-6.33 14.15-14.14 14.15h-40.641M7.5 72.15h497M43.866 39.825h0M78.211 39.825h0M112.557 39.825h0M222.743 236.807l25.521-64.65 25.522 64.65M230.314 220.932h36.023M299.505 236.807v-64.53l45.303 64.53v-64.65M414.632 204.482c0 17.813-9.887 31.909-25.572 32.183-5.221.091-18.715.142-18.715.142l-.131-64.65h18.31c17.204 0 26.108 14.511 26.108 32.325zM131.024 187.033c0 8.216-6.66 14.876-14.876 14.876-4.075 0-18.779.066-18.779.066v-29.818h18.779c8.216 0 14.876 6.66 14.876 14.876z"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="M136.829 219.328c0 9.611-7.791 17.402-17.402 17.402-4.766 0-22.059.077-22.059.077v-34.881h22.059c9.611 0 17.402 7.791 17.402 17.402zM170.162 205.951l27.157 30.856M162.366 205.835v30.972M197.319 188.958c0 9.279-8.137 16.802-17.753 16.802-4.769 0-17.201.074-17.201.074l.021-33.678h17.18c9.617.001 17.753 7.523 17.753 16.802zM466.114 144.882h-28.285a6.062 6.062 0 0 1-6.061-6.061v-28.285a6.062 6.062 0 0 1 6.061-6.061h28.285a6.062 6.062 0 0 1 6.061 6.061v28.285a6.06 6.06 0 0 1-6.061 6.061zM74.171 144.882H45.886a6.062 6.062 0 0 1-6.061-6.061v-28.285a6.062 6.062 0 0 1 6.061-6.061h28.285a6.062 6.062 0 0 1 6.061 6.061v28.285a6.06 6.06 0 0 1-6.061 6.061zM466.114 304.488h-28.285a6.062 6.062 0 0 1-6.061-6.061v-28.285a6.062 6.062 0 0 1 6.061-6.061h28.285a6.062 6.062 0 0 1 6.061 6.061v28.285a6.062 6.062 0 0 1-6.061 6.061zM74.171 304.488H45.886a6.062 6.062 0 0 1-6.061-6.061v-28.285a6.062 6.062 0 0 1 6.061-6.061h28.285a6.062 6.062 0 0 1 6.061 6.061v28.285a6.062 6.062 0 0 1-6.061 6.061zM415.277 344.403l-91.848-34.945a10.827 10.827 0 0 0-13.971 13.971l34.945 91.848a14.14 14.14 0 0 0 13.381 9.112l40.98-.473 25.153-25.153.473-40.98a14.144 14.144 0 0 0-9.113-13.38zm-29.069 41.805c-6.312 6.312-16.545 6.312-22.857 0-6.312-6.312-6.312-16.545 0-22.857s16.546-6.312 22.857 0c6.312 6.312 6.312 16.545 0 22.857zM311.922 311.922l51.429 51.429M418.764 446.774l32.011 57.726M504.5 450.775l-57.726-32.011"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                      <path
                        d="m397.335 425.345 28.01-28.01a8.082 8.082 0 0 1 11.429 0l10 10a8.082 8.082 0 0 1 0 11.429l-28.01 28.01a8.082 8.082 0 0 1-11.429 0l-10-10a8.082 8.082 0 0 1 0-11.429z"
                        style={{
                          strokeWidth: 15,
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeMiterlimit: 10,
                        }}
                        fill="none"
                        stroke="#ff6600"
                        strokeWidth="15"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        data-original="#000000"
                        opacity="1"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h2>Branding</h2>
                <p>
                  Craft an indelible brand identity that resonates with your
                  audience through our strategic branding services. We go beyond
                  logos and visuals, delving into the core values that define
                  your business. Our creative team orchestrates a symphony of
                  visual elements and compelling narratives, creating a brand
                  persona that captivates hearts and minds. Elevate your brand
                  from a mere product or service to a distinctive and memorable
                  presence in your industry.
                </p>
                <button
                  className={styles.enquiryBtn}
                  onClick={() => setShowForm(true)}
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ourPortfolioSection} id="portfolio">
          <h5>Our Portfolio</h5>
          <h1>Some Recent Work</h1>
          <div className={styles.portFolioLinkSection}>
            <p
              style={
                selectedCategory == "Social Media Marketing"
                  ? { color: "#fc6404" }
                  : { color: "black" }
              }
              onClick={() => setSelectedCategory("Social Media Marketing")}
            >
              Social Media Marketing
            </p>
            <p
              style={
                selectedCategory == "Web Development"
                  ? { color: "#fc6404" }
                  : { color: "black" }
              }
              onClick={() => {
                setUserClicksOnWebForFirstTime(true);
                setSelectedCategory("Web Development");
              }}
            >
              Web Development
            </p>
            <p
              style={
                selectedCategory == "Packaging Design"
                  ? { color: "#fc6404" }
                  : { color: "black" }
              }
              onClick={() => {
                setUserClicksOnPackagingForFirstTime(true);
                setSelectedCategory("Packaging Design");
              }}
            >
              Packaging Design
            </p>
            <p
              style={
                selectedCategory == "UI/UX Design"
                  ? { color: "#fc6404" }
                  : { color: "black" }
              }
              onClick={() => {
                setUserClicksOnUIForFirstTime(true);
                setSelectedCategory("UI/UX Design");
              }}
            >
              UI/UX Design
            </p>
            <p
              style={
                selectedCategory == "Logo Design"
                  ? { color: "#fc6404" }
                  : { color: "black" }
              }
              onClick={() => {
                setUserClicksOnLogoForFirstTime(true);
                setSelectedCategory("Logo Design");
              }}
            >
              Logo Design
            </p>
          </div>
          {userClicksOnWebForFirstTime ||
          userClicksOnPackagingForFirstTime ||
          userClicksOnUIForFirstTime ||
          userClicksOnLogoForFirstTime ? (
            <img src={loadingGif} className={styles.loadingGif} />
          ) : (
            <div
              className={styles.portfolioResultsSection}
              style={
                selectedCategory == "Logo Design"
                  ? {
                      gridTemplateColumns: `repeat(${gridForLogo},${gridPercentageForLogo}%)`,
                    }
                  : null
              }
            >
              {displayedData.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    style={
                      selectedCategory == "Packaging Design"
                        ? { height: `${heightForPackagingImages}` }
                        : { height: "auto" }
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
        <div
          className={styles.bestAgencySection}
          style={{
            backgroundImage: `linear-gradient(rgba(252, 100, 4, 0.85), rgba(252, 100, 4, 0.85)), url(${nextLevelBackground})`,
          }}
        >
          <h1>Get set ready for Next-Level Marketing with us!</h1>
          <button
            className={styles.enquiryButton}
            onClick={() => setShowForm(true)}
          >
            Enquiry Now
          </button>
        </div>
        <div className={styles.gotQuestionSection} id="contact">
          <h1>Got a Question ? Ask the Creative Monk</h1>
          <div className={styles.gotQuestionGridSection}>
            <div
              className={styles.gotQuestionBackgroundImageSection}
              style={{
                backgroundImage: `linear-gradient(rgba(252, 100, 4, 0.9), rgba(252, 100, 4, 0.9)), url(${nextLevelBackground})`,
              }}
            >
              <div className={styles.gotQuestionInfoSection}>
                <div className={styles.gotQuestionSvgSection}>
                  <a href="mailto:info@creativemonk.in" target="_blank">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fc6404"
                      className={styles.gotQuestionSvg}
                    >
                      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg>
                  </a>
                </div>
                <div className={styles.gotQuestionNestedInfoSection}>
                  <h3>Chat With Us</h3>
                  <p>info@creativemonk.in</p>
                </div>
              </div>
              <div className={styles.gotQuestionInfoSection}>
                <div className={styles.gotQuestionSvgSection}>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 384 512"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fc6404"
                    className={styles.gotQuestionSvg}
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                  </svg>
                </div>
                <div className={styles.gotQuestionNestedInfoSection}>
                  <h3>Visit Us</h3>
                  <p>
                    Office No. 11-12, 9th floor, Sushma Infinium, Zirakpur,
                    Punjab, 140603
                  </p>
                </div>
              </div>
              <div className={styles.gotQuestionInfoSection}>
                <div className={styles.gotQuestionSvgSection}>
                  <a href="tel:9463445566" target="_blank">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#fc6404"
                      className={styles.gotQuestionSvg}
                    >
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </a>
                </div>
                <div className={styles.gotQuestionNestedInfoSection}>
                  <h3>Call Us</h3>
                  <p>+91-9463445566</p>
                </div>
              </div>
            </div>
            <div className={styles.gotQuestionFormSection}>
              <div className={styles.questionInputSection}>
                <h3>
                  Name <span>*</span>
                </h3>
                <input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
              </div>
              <div className={styles.questionInputSection}>
                <h3>
                  Email <span>*</span>
                </h3>
                <input
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div className={styles.questionInputSection}>
                <h3>
                  Phone Number <span>*</span>
                </h3>
                <input
                  placeholder="Your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required={true}
                />
              </div>
              <div className={styles.questionInputSection}>
                <h3>
                  Your Business Name <span>*</span>
                </h3>
                <input
                  placeholder="Your Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>
              {errorMessage ? (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Something Went Wrong , Please try again later.
                </p>
              ) : (
                <div className={styles.questionInputSection}>
                  <h3>
                    Select Services You Want to Enquire Regarding <span>*</span>
                  </h3>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value={"Social Media Marketing"}>
                      Social Media Marketing
                    </option>
                    <option value={"Lead Generation"}>Lead Generation</option>
                    <option value={"SEO"}>SEO</option>
                    <option value={"Branding"}>Branding</option>
                  </select>
                </div>
              )}
              {successMessage ? (
                <p
                  style={{
                    color: "green",
                    textAlign: "center",
                    fontSize: "15px",
                  }}
                >
                  Form Submitted Successfully.
                </p>
              ) : (
                <button className={styles.submitButton} onClick={submitHandler}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.testimonialsSection}>
          <div className={styles.containerTestimonialsSection}>
            <h1>Testimonials</h1>
            <div className={styles.testimonialsGridSection}>
              <Carousel
                responsive={responsive2}
                {...options}
                showThumbs={false}
              >
                {items2.map((item, index) => (
                  <div key={index} className={styles.secondCarouselBlock}>
                    <div className={styles.commentBox}>
                      <p>"{item.comment}"</p>
                    </div>
                    <div className={styles.triangle}>
                      <img src={triangleSvg} />
                    </div>
                    <div className={styles.personImageSection}>
                      <img src={item.person_image} />
                    </div>
                    <p className={styles.person_name}>{item.person_name}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
