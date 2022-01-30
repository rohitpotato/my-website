import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import SectionHeader from "../SectionHeader";
import css from "./Contact.module.css";

const contactMap = {
  github: "/icons/github.svg",
  linkedin: "icons/linkedin.svg",
  twitter: "/icons/twitter.svg",
};

const Contact: React.FC = () => {
  const { contact } = useAppContext();
  const contactTypes = Object.keys(contact);
  return (
    <div id="contact" className={css.container}>
      <SectionHeader
        heading="Stay Connected"
        subHeading="Let’s work together & I’ll help you by all my best.."
      />
      <div className={css.contactContainer}>
        <a href={`mailto:${contact.email}`} className={css.paraText}>
          {contact.email}
        </a>
        <a href={`tel:${contact.phone}`} className={css.paraText}>
          91 79057 81778
        </a>
        <div className={css.contactButtons}>
          {contactTypes.map((key = "") => {
            return contactMap[key] ? (
              <a
                key={key}
                target="_blank"
                href={contact[key]}
                className={css.contactButton}
                rel="noreferrer"
              >
                <Image
                  height={32}
                  width={32}
                  alt="contact-icon"
                  src={`/icons/${contactMap[key]}.svg`}
                />
              </a>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
