import React from "react";
import SettingsOptions from "./SettingOptions";
import SettingsForm from "./SettingsForm";
import SettingsHeading from "./SettingsHeading";

const Settings: React.FC = () => {
  return (
    <>
      <SettingsHeading />
      <SettingsOptions />
      <SettingsForm />
    </>
  );
};

export default Settings;
