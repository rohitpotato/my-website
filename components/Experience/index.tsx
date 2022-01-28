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
        <Tabs initialIndex={2}>
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
            <TabPanel className={css.panel}>
              <span style={{ color: "var(--color-text-primary)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                earum fugiat officiis ratione nisi facilis, voluptas in illum
                nam ipsam similique totam enim dolorum illo sed obcaecati.
                Pariatur, temporibus voluptate.
              </span>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
