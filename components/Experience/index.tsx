import SectionHeader from "../SectionHeader";
import { Tabs, Tab, TabList, TabPanels, TabPanel } from "../Tab";
import css from "./Experience.module.css";

const Experience: React.FC = () => {
  return (
    <div className={css.container}>
      <SectionHeader
        heading="Experience"
        subHeading="Companies, I’ve worked for so far.."
      />
      <div className={css.experienceTab}>
        <Tabs>
          <TabList className={css.tabList}>
            <Tab
              selectedStyles={{
                borderTop: "2px solid var(--color-text-primary)",
                borderRight: "2px solid var(--color-text-primary)",
                borderLeft: "2px solid var(--color-text-primary)",
              }}
              className={css.tab}
            >
              Plum
            </Tab>
            <Tab
              selectedStyles={{
                borderTop: "2px solid var(--color-text-primary)",
                borderRight: "2px solid var(--color-text-primary)",
                borderLeft: "2px solid var(--color-text-primary)",
              }}
              className={css.tab}
            >
              Falabella
            </Tab>
            <Tab
              selectedStyles={{
                borderTop: "2px solid var(--color-text-primary)",
                borderRight: "2px solid var(--color-text-primary)",
                borderLeft: "2px solid var(--color-text-primary)",
              }}
              className={css.tab}
            >
              2gethr
            </Tab>
          </TabList>
          <TabPanels className={css.tabPanel}>
            <TabPanel className={css.panel}>This is tab Plum boi!</TabPanel>
            <TabPanel className={css.panel}>
              This is tab Falabella boi!
            </TabPanel>
            <TabPanel className={css.panel}>This is tab 2gethr boi</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
