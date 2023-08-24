import { Box } from '@chakra-ui/react';
import React from 'react';

import ShowPlugin from '../Plugins/CreatePlugin';
import { usePlugins } from '../../hooks/usePlugins';
import PluginDetails from '../Plugins/ListPlugin/Plugin';
import { Plugin } from '../../types/plugins';

const PluginsTab: React.FC = () => {
  const { data: plugins } = usePlugins();

  return (
    <>
      <Box display="flex" gap="30px" flexWrap="wrap">
        {plugins?.map((plugin: Plugin) => (
          <Box key={plugin.id} w={['100%', '537px']}>
            <PluginDetails plugin={plugin} />
          </Box>
        ))}
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
          }}
        >
          <ShowPlugin />
        </Box>
      </Box>
    </>
  );
};

export default PluginsTab;
