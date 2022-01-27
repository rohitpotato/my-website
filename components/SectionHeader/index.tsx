import css from "./SectionHeader.module.css";

interface SectionHeader {
  heading: string;
  subHeading: string;
}

const SectionHeader: React.FC<SectionHeader> = ({ heading, subHeading }) => {
  return (
    <>
      <div className={css.heading}>{heading}</div>
      <div className={css.subHeading}>{subHeading}</div>
    </>
  );
};

export default SectionHeader;
