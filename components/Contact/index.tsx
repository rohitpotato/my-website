import Image from "next/image";
import SectionHeader from "../SectionHeader";
import css from "./Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={css.container}>
      <SectionHeader
        heading="Stay Connected"
        subHeading="Let’s work together & I’ll help you by all my best.."
      />
      <div className={css.contactContainer}>
        <div className={css.paraText}>rohit.mmm1996@gmail.com</div>
        <div className={css.paraText}>91 79057 81778</div>
        <div className={css.contactButtons}>
          <a target="_blank" className={css.contactButton}>
            <Image
              height={32}
              width={32}
              alt="contact-icon"
              src={"/icons/github.svg"}
            />
          </a>
          <a target="_blank" className={css.contactButton}>
            <Image
              height={32}
              width={32}
              alt="contact-icon"
              src={"/icons/linkedin.svg"}
            />
          </a>
          <a target="_blank" className={css.contactButton}>
            <Image
              height={32}
              width={32}
              alt="contact-icon"
              src={"/icons/twitter.svg"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
