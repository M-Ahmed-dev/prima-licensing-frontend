import {
  Tab,
  TabList,
  useTheme,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import SettingsOptions from "./SettingOptions";
import SettingsForm from "./SettingsForm";
import SettingsHeading from "./SettingsHeading";

const Settings: React.FC = () => {
  const theme = useTheme();

  const selected = {
    bg: theme.colors.gray,
    color: theme.colors.white,
    height: "100%",
    textTransform: "uppercase",
  };

  const TabStyle = {
    fontFamily: "Roboto",
    fontSize: "20px",
    textTransform: "uppercase",
  };

  return (
    <>
      <Tabs variant="enclosed">
        <TabList>
          <Tab sx={TabStyle} _selected={selected}>
            Email Reminders
          </Tab>
          <Tab sx={TabStyle} _selected={selected}>
            Contacts
          </Tab>
          <Tab sx={TabStyle} _selected={selected}>
            Translations
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SettingsHeading />
            <SettingsOptions />
            <SettingsForm />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Settings;
