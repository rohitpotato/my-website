import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import css from "./Hero.module.css";

const Hero: React.FC = () => {
  const { heroImage, title, aboutMe } = useAppContext();
  return (
    <div>
      <div className={css.paraText}>Hey I'm</div>
      <div className={css.heroText}>{title}</div>
      <div className={css.heroContainer}>
        <div className={css.paraText}>{aboutMe}</div>
        <Image src={heroImage} height={215} width={300} alt="hero-image" />
      </div>
      <a href="#contact" className={css.cta} role="button">
        Let's Talk
      </a>
    </div>
  );
};

export default Hero;
