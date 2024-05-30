import { useContext, useState } from "react";
import BodyLabel from "../../components/common/body-label";
import styles from "./contact-screen.module.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleDown,
  faArrowCircleRight,
  faComment,
  faEnvelope,
  faInbox,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import ScreenSizeContext from "../../components/common/screen-size";

function ContactsScreen() {
  const heading = "Let's chat";
  const subHeading = "Tell me about yourself and your projects";
  const mail = "Mail me at";
  const email = "chandak.r@northeastern.edu";

  const heading2 = "Send me a message";
  const { isDesktop } = useContext(ScreenSizeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
  console.log(e.target)
  };

  console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // EmailJS service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // EmailJS template ID
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID // EmailJS user ID
    ).then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles["contact-container"]}>
      <div className={styles["first-column"]}>
        <BodyLabel className="h2">{heading}</BodyLabel> &nbsp; &nbsp;
        <FontAwesomeIcon icon={faComment} className={styles["icon-style2"]} /><br />
        <BodyLabel className="h2">
          {subHeading}{" "}
          <FontAwesomeIcon
            icon={faLightbulb}
            className={styles["icon-style2"]}
          />
        </BodyLabel>
        <div className={styles["mail-container"]}>
          <FontAwesomeIcon icon={faEnvelope} className={styles["icon-style"]} />
          <div className={styles["mail-sub-container"]}>
            <BodyLabel className="h5">{mail}</BodyLabel>
            <BodyLabel className="h5">{email}</BodyLabel>
          </div>
        </div>
        <BodyLabel className="h2">or fill out this form</BodyLabel> &nbsp;
        <FontAwesomeIcon
          icon={isDesktop ? faArrowCircleRight : faArrowCircleDown}
          className={styles["icon-style2"]}
        />
      </div>
      <div className={styles["second-column"]}>
        <BodyLabel className="h2">{heading2}</BodyLabel> &nbsp; &nbsp;{" "}
        <FontAwesomeIcon icon={faInbox} className={styles["icon-style2"]} />
        <form onSubmit={handleSubmit} className={styles["contact-form"]}>
          <>
            <BodyLabel className="h4">Name:</BodyLabel>
            <BodyLabel className="description-text">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </BodyLabel>
          </>
          <>
            <BodyLabel className="h4">Email:</BodyLabel>
            <BodyLabel className="description-text">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@xyz.com"
                required
              />
            </BodyLabel>
          </>
          <>
            <BodyLabel className="h4">Message:</BodyLabel>
            <BodyLabel className="description-text">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Include feedback, questions, or comments here."
                required
              />
            </BodyLabel>
          </>
          <button type="submit" className={styles["button-style"]}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactsScreen;
