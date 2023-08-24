import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  Textarea,
  useTheme,
} from '@chakra-ui/react';
import React, { useReducer, useState } from 'react';
import { PluginPayload } from '../../../types/plugins';
import { useAddPlugin } from '../../../hooks/usePlugins';
import FileUpload from '../../FileUpload';

interface Props {
  handleSecondBoxClick: () => void;
}

const AddPluginForm: React.FC<Props> = ({ handleSecondBoxClick }) => {
  const theme = useTheme();
  const { mutate: createNewPlugin } = useAddPlugin();
  const [validateForm, setValidateForm] = useState(false);
  const [pluginPayload, setPluginPayload] = useReducer(
    (state: PluginPayload, newState: Partial<PluginPayload>) => ({
      ...state,
      ...newState,
    }),
    {
      plugin_name: '',
      plugin_slug: '',
      latest_version: '',
      plugin_description: '',
      is_active: true,
      file: null,
    }
  );

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPluginPayload({ [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setPluginPayload({
      plugin_name: '',
      plugin_slug: '',
      latest_version: '',
      plugin_description: '',
      is_active: true,
    });
  };

  const isValidPluginPayload = () => {
    return (
      pluginPayload.plugin_name &&
      pluginPayload.plugin_slug &&
      pluginPayload.latest_version &&
      pluginPayload.plugin_description &&
      pluginPayload.file !== null
    );
  };
  const addNewPluginFunc = async () => {
    if (!isValidPluginPayload()) {
      setValidateForm(true);
      return false;
    }

    const formData = new FormData();

    for (const key in pluginPayload) {
      if (Object.prototype.hasOwnProperty.call(pluginPayload, key)) {
        // Use a type assertion here
        formData.append(key, (pluginPayload as any)[key]);
      }
    }
    await createNewPlugin(formData);

    // reset the form values
    resetForm();
    setValidateForm(false)
  };

  const discardChanges = () => {
    handleSecondBoxClick();
    resetForm();
    setValidateForm(false);
  };

  return (
    <>
      <FormControl>
        <Box>
          <Text sx={theme.fonts.subHeading}>Plugin name</Text>
          <Input
            name="plugin_name"
            value={pluginPayload.plugin_name}
            onChange={changeHandler}
            variant="flushed"
            placeholder="Add name"
            color={theme.colors.secondary}
            isInvalid={validateForm && pluginPayload.plugin_name?.length == 0}
            errorBorderColor={theme.colors.red}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>
        <Box mt="10px">
          <Text sx={theme.fonts.subHeading}>Plugin Slug</Text>
          <Input
            name="plugin_slug"
            value={pluginPayload.plugin_slug}
            onChange={changeHandler}
            isInvalid={validateForm && pluginPayload.plugin_slug?.length == 0}
            errorBorderColor={theme.colors.red}
            variant="flushed"
            placeholder="Add Slug"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>

        <Box mt="10px">
          <Text sx={theme.fonts.subHeading}>Latest Version</Text>
          <Input
            name="latest_version"
            value={pluginPayload.latest_version}
            onChange={changeHandler}
            variant="flushed"
            isInvalid={
              validateForm && pluginPayload.latest_version?.length == 0
            }
            errorBorderColor={theme.colors.red}
            placeholder="Add version number"
            color={theme.colors.secondary}
            fontWeight="500"
            borderBottom="3px solid"
            paddingLeft="16px"
          />
        </Box>

        <Box mt="30px">
          <Text sx={theme.fonts.subHeading}>Version Description</Text>
          <Textarea
            name="plugin_description"
            value={pluginPayload.plugin_description}
            onChange={changeHandler}
            isInvalid={
              validateForm && pluginPayload.plugin_description?.length == 0
            }
            errorBorderColor={theme.colors.red}
            placeholder="Add description of the number"
            sx={{
              border: '3px solid #39808B',
              borderRadius: 'none',
              color: '#39808B',
              height: '254px',
              marginTop: '15px',
            }}
          />
        </Box>
      </FormControl>

      <Box mt="30px">
        <FileUpload
          handleFileSelection={(selectedFile: File | null) =>
            setPluginPayload({ file: selectedFile })
          }
        >
          <Button
            sx={
              validateForm && pluginPayload.file === null
                ? theme.buttons.error
                : theme.buttons.secondary
            }
            height="none"
          >
            Browse Files
          </Button>
        </FileUpload>
        <Button
          mt="11px"
          sx={theme.buttons.primary}
          height="none"
          onClick={addNewPluginFunc}
        >
          Update
        </Button>
        <Button
          onClick={discardChanges}
          mt="11px"
          sx={theme.buttons.delete}
          height="none"
        >
          Discard
        </Button>
      </Box>
    </>
  );
};

export default AddPluginForm;
