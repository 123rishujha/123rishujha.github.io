import { useState } from "react";
import "./Contact.css";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import emailjs from "@emailjs/browser";

// template_15kscgj
// service_itsm86h
// Ok8QyGG4lkD3iW5EB

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let info = { name, email, message };
    // console.log(info);

    emailjs
      .send(
        "service_itsm86h",
        "template_15kscgj",
        {
          from_name: info.name,
          to_name: "Rishu jha",
          from_email: info.email,
          to_email: "jharishu796@gmail.com",
          message: info.message,
        },
        "Ok8QyGG4lkD3iW5EB"
      )
      .then(() => {
        alert("Successfully sent");
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        alert("Something went wrong");
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="contact_section section">
      <div className="contact_container">
        <h1 style={{ textDecoration: "underline" }}>Contact</h1>
        <div className="contact_wraper">
          <div className="contact_cards">
            <div>
              <BiPhoneCall style={{ color: "purple" }} />
              <p id="contact-phone">+919310146764</p>
            </div>
            <div>
              <AiOutlineMail style={{ color: "purple" }} />
              <a
                id="contact-email"
                href="mailto:jharishu796@gmail.com"
                target="_blank"
                style={{ textDecoration: "none" }}
                rel="noreferrer"
              >
                Send Email
              </a>
            </div>
            <div>
              <AiFillLinkedin style={{ color: "purple" }} />
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/rishu-jha/"
                target="_blank"
                rel="noreferrer"
              >
                {/* LinkedIn */}
                rishu-jha
              </a>
            </div>
            <div>
              <BsGithub style={{ color: "purple" }} />
              <a
                id="contact-github"
                href="https://github.com/123rishujha"
                target="_blank"
                rel="noreferrer"
              >
                {/* GitHub */}
                123rishujha
              </a>
            </div>
          </div>
          <div className="contact_form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  required={true}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="email"
                  required={true}
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                required={true}
                name="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input
                className="submitBtn"
                type="submit"
                disabled={loading}
                value={loading ? "Sending..." : "Send"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
