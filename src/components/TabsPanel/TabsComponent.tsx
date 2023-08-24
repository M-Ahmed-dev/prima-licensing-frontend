import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useTheme,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import PrimaTable from '../PrimaIntegrationTable/PrimaTable';
import bgImage from '../../assets/bgImage.png';
import PrimaTablePanel from './PluginsTab';
import Settings from '../SettingsTab/Settings';

const TabsComponent: React.FC = () => {
  const theme = useTheme();
  const selected = {
    bg: theme.colors.gray,
    color: theme.colors.white,
    height: '100%',
    textTransform: 'uppercase',
  };

  const TabStyle = {
    fontFamily: 'Roboto',
    fontSize: '20px',
    textTransform: 'uppercase',
  };

  const settingsTab = {
    marginLeft: 'auto',
  };

  const panel = {
    bgSize: 'cover',
    bgPosition: 'center',
    bgRepeat: 'no-repeat',
    padding: '33.5px 25px',
  };

  return (
    <Tabs variant="unstyled">
      <TabList>
        <Link to="/">
          <Tab sx={TabStyle} _selected={selected}>
            Plugins
          </Tab>
        </Link>
        <Link to="/prima-integration">
          <Tab sx={TabStyle} _selected={selected}>
            Prima Integration
          </Tab>
        </Link>
        <Link to="/settings" style={settingsTab}>
          <Tab sx={TabStyle} _selected={selected}>
            Settings
          </Tab>
        </Link>
      </TabList>
      <TabPanels border="3px solid #252020">
        <TabPanel bgImage={bgImage} sx={panel}>
          <PrimaTablePanel />
        </TabPanel>

        <TabPanel sx={panel}>
          <PrimaTable />
        </TabPanel>

        <TabPanel bgImage={bgImage} sx={panel}>
          <Settings />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
