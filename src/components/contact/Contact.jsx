import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

 

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4e19gck",
        "template_94e6oah",
        formRef.current,
        "user_sHUzfBHDsbw7Ko1bNB4eL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +917017684236
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              gauravshokanda2@gamil.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Noida UttarPardesh ,India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;