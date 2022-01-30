import Image from "next/image";
import { useAppContext } from "../../context/AppContext";
import SectionHeader from "../SectionHeader";
import { Tabs, Tab, TabList, TabPanels, TabPanel } from "../Tab";
import css from "./Experience.module.css";

const Experience: React.FC = () => {
  const { activeExperienceTab, experience } = useAppContext();
  return (
    <div id="experience" className={css.container}>
      <SectionHeader
        heading="Experience"
        subHeading="Companies, I’ve worked for so far.."
      />
      <div className={css.experienceTab}>
        <Tabs initialIndex={Number(activeExperienceTab) - 1}>
          <TabList className={css.tabList}>
            {experience.map(({ logo }) => (
              <Tab
                clasName={css.tab}
                selectedStyles={{
                  borderTop: "2px solid var(--color-text-primary)",
                  borderRight: "2px solid var(--color-text-primary)",
                  borderLeft: "2px solid var(--color-text-primary)",
                }}
                key={logo}
              >
                <Image src={logo} height={60} width={115} alt="exp_logo" />
              </Tab>
            ))}
          </TabList>
          <TabPanels className={css.tabPanel}>
            {experience.map(
              ({ logo, company, designation, list, duration }) => (
                <TabPanel key={company} className={css.panel}>
                  <div>
                    <div className={css.logo}>
                      <Image
                        src={logo}
                        alt="company_logo"
                        height={80}
                        width={160}
                      />
                    </div>
                    <div className={css.designation}>{designation}</div>
                    <div className={css.duration}>{duration}</div>
                    <ul className={css.list}>
                      {list.map((l) => (
                        <li key={l}>
                          <span style={{ color: "var(--color-text-primary)" }}>
                            {l}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              )
            )}
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
