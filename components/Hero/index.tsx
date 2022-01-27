import Image from "next/image";
import css from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div>
      <div className={css.paraText}>Hey I'm</div>
      <div className={css.heroText}>Rohit Kashyap</div>
      <div className={css.heroContainer}>
        <div className={css.paraText}>
          Hi, I’m Rohit Kashyap. Deepti Verma is my Fiance. We are about to get
          engagged on 23rd of Feb. It will be four years since we started dating
          back in college. Cheers to many more years to come.
        </div>
        <Image
          src={"/images/bro.svg"}
          height={215}
          width={300}
          alt="hero-image"
        />
      </div>
      <button className={css.cta} type="button">
        Let's Talk
      </button>
    </div>
  );
};

export default Hero;
