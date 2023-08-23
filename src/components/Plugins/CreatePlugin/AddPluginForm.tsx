import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Textarea,
  useTheme,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { PluginPayload } from "../../../types/plugins";
import { useAddPlugin } from "../../../hooks/usePlugins";

interface Props {
  handleSecondBoxClick: () => void;
}

const AddPluginForm: React.FC<Props> = ({ handleSecondBoxClick }) => {
  const theme = useTheme();
  const { mutate: createNewPlugin } = useAddPlugin()
  const [pluginPayload, setPluginPayload] = useReducer(
    (state: PluginPayload, newState: Partial<PluginPayload>) => ({
      ...state,
      ...newState,
    }),
    {
      plugin_name: "",
      plugin_slug: "",
      latest_version: "",
      plugin_description: "",
      is_active: false
    },
  );

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPluginPayload({ [e.target.name]: e.target.value });
  }

  const resetForm = () => {
    setPluginPayload({
      plugin_name: "",
      plugin_slug: "",
      latest_version: "",
      plugin_description: "",
      is_active: false
    })
  }
  const addNewPluginFunc = async () => {
    await createNewPlugin(pluginPayload)

    // reset the form values
    resetForm()
  }

  const discardChanges = () => {
    handleSecondBoxClick()
    resetForm()
  }

  return (
    <>
      <FormControl>
        <Box>
          <Text sx={theme.fonts.subHeading}>Plugin name</Text>
          <Input
            name='plugin_name'
            value={pluginPayload.plugin_name}
            onChange={changeHandler}
            variant='flushed'
            placeholder='Add name'
            color={theme.colors.secondary}
            fontWeight='500'
            borderBottom='3px solid'
            paddingLeft='16px'
          />
        </Box>
        <Box mt='10px'>
          <Text sx={theme.fonts.subHeading}>Plugin Slug</Text>
          <Input
            name='plugin_slug'
            value={pluginPayload.plugin_slug}
            onChange={changeHandler}
            variant='flushed'
            placeholder='Add Slug'
            color={theme.colors.secondary}
            fontWeight='500'
            borderBottom='3px solid'
            paddingLeft='16px'
          />
        </Box>

        <Box mt='10px'>
          <Text sx={theme.fonts.subHeading}>Latest Version</Text>
          <Input
            name='latest_version'
            value={pluginPayload.latest_version}
            onChange={changeHandler}
            variant='flushed'
            placeholder='Add version number'
            color={theme.colors.secondary}
            fontWeight='500'
            borderBottom='3px solid'
            paddingLeft='16px'
          />
        </Box>

        <Box mt='30px'>
          <Text sx={theme.fonts.subHeading}>Version Description</Text>
          <Textarea
            name='plugin_description'
            value={pluginPayload.plugin_description}
            onChange={changeHandler}
            placeholder='Add description of the number'
            sx={{
              border: "4px solid #39808B",
              borderRadius: "none",
              color: "#39808B",
              height: "254px",
              marginTop: "15px",
            }}
          />
        </Box>
      </FormControl>

      <Box mt='30px'>
        <Button sx={theme.buttons.secondary} height='none'>
          Browse Files
        </Button>
        <Button mt='11px' sx={theme.buttons.primary} height='none' onClick={addNewPluginFunc}>
          Update
        </Button>
        <Button
          onClick={discardChanges}
          mt='11px'
          sx={theme.buttons.delete}
          height='none'
        >
          Discard
        </Button>
      </Box>
    </>
  );
};

export default AddPluginForm;
