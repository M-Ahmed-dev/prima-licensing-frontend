import {
  Box,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useTheme,
} from "@chakra-ui/react";
import React, { useState } from "react";

const EmailTags: React.FC = () => {
  const theme = useTheme();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleContactChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (!selectedTags.includes(selectedValue)) {
      setSelectedTags([...selectedTags, selectedValue]);
    }
  };

  const handleTagClose = (tag: string) => {
    const updatedTags = selectedTags.filter(
      (selectedTag) => selectedTag !== tag
    );
    setSelectedTags(updatedTags);
  };

  return (
    <Box width="219px" mt="25px">
      <Text mb="7px" sx={theme.fonts.subHeading}>
        Email reminder of expiration
      </Text>

      <Select
        sx={{
          borderRadius: "none",
          border: "3px solid #39808B",
          color: theme.colors.secondary,
        }}
        placeholder="No tags selected"
        onChange={handleContactChange}
        value=""
      >
        <option value="Maxenius">Maxenius</option>
        <option value="Bolt">Bolt</option>
        <option value="Newbicon">Newbicon</option>
      </Select>
      {selectedTags.length > 0 && (
        <Box display="flex" mt="10px" gap="5px" flexWrap="wrap" width="300px">
          {selectedTags.map((tag) => (
            <Tag
              key={tag}
              size="lg"
              borderRadius="none"
              border={`3px solid ${theme.colors.secondary}`}
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleTagClose(tag)} />
            </Tag>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default EmailTags;
