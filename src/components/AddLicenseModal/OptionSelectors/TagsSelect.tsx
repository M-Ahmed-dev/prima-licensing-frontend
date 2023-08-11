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

const TagsSelect: React.FC = () => {
  const theme = useTheme();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleContactChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (!selectedTags.includes(selectedValue)) {
      setSelectedTags([...selectedTags, selectedValue]);
    }
  };

  const handleTagClose = (tag: string) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  return (
    <Box width="219px" mt="25px">
      <Text mb="7px" sx={theme.fonts.subHeading}>
        Contact Tags
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
        <option value="Newbicom">Newbicom</option>
        <option value="Tutors">Tutors</option>
        <option value="Maxenius">Maxenius</option>
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

export default TagsSelect;
