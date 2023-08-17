import React from "react";
import { Tbody, Tr, Checkbox, useTheme, RadioGroup } from "@chakra-ui/react";

interface TableBodyProps {
  data: string[];
  onSelect: (selected: string) => void;
}

const DropdownBody: React.FC<TableBodyProps> = ({ data, onSelect }) => {
  const theme = useTheme();

  const checkBoxStyle = {
    ".chakra-checkbox__control": {
      border: `2px solid ${theme.colors.secondary}`,
      padding: "10px",
    },

    ".css-18daxcn[data-checked]": {
      backgroundColor: theme.colors.secondary,
    },

    ".css-5jdg10": {
      display: "none",
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.value);
  };

  return (
    <Tbody
      sx={{
        Tr: {
          border: "3px solid #39808B",
        },
      }}
    >
      {data.map((name, index) => (
        <Tr key={index}>
          <RadioGroup padding="7px 10px">
            <Checkbox
              onChange={handleChange}
              marginInlineStart="none"
              sx={checkBoxStyle}
              value={name}
            >
              {name}
            </Checkbox>
          </RadioGroup>
        </Tr>
      ))}
    </Tbody>
  );
};

export default DropdownBody;
