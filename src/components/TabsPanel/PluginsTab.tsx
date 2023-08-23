import { Box } from "@chakra-ui/react";
import React from "react";
import { usePlugins } from "../../hooks/usePlugins";
import Plugin from "../Plugins/ListPlugin/Plugin";
import PluginDetails from "../Plugins/ListPlugin/Plugin";
import ShowPlugin from "../Plugins/CreatePlugin";

const PluginsTab: React.FC = () => {
  const { data: plugins } = usePlugins()

  return (
    <>
      <Box display='flex' gap='30px' flexWrap='wrap'>
        {plugins?.map((plugin) => (
          <Box key={plugin.id}
            w={["100%", "537px"]}
          >
            <PluginDetails plugin={plugin} />
          </Box>
        ))}
        <Box
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
        >
          <ShowPlugin />
        </Box>
      </Box>
    </>
  );
};

export default PluginsTab;
