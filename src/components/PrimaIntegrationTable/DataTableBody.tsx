import { Box, Checkbox, useTheme, Td, Tbody, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import data from "../../data/db.json";

const DataTableBody: React.FC = () => {
  const theme = useTheme();

  const [pluginsData, setPluginsData] = useState(data.plugins);

  const handleCheckboxChange = (id: number) => {
    setPluginsData((prevData) =>
      prevData.map((item) =>
        item.sr === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const checkBoxStyle = {
    ".chakra-checkbox__control": {
      border: `3px solid ${theme.colors.secondaryLight}`,
      padding: "10px",
    },
    ".chakra-checkbox__label": {
      marginInlineStart: "2.5em",
    },

    ".css-1bbu0oi[aria-checked=true], .css-1bbu0oi[data-checked]": {
      bg: theme.colors.secondary,
    },
  };

  return (
    <>
      <Tbody>
        {pluginsData.map((item) => (
          <>
            <Tr
              key={item.sr}
              border={
                item.expiryDate === "01.01.2023"
                  ? "3px solid #CD2D2D"
                  : "3px solid #5BA4AF"
              }
              backgroundColor={item.isChecked ? "#E4F0F1" : ""}
              sx={{
                td: {
                  fontSize: "18px",
                  fontFamily: "Inter",
                  fontWeight: "400",
                },
              }}
            >
              <Td>
                <Checkbox
                  isChecked={item.isChecked}
                  onChange={() => handleCheckboxChange(item.sr)}
                  variant='outlined'
                  sx={checkBoxStyle}
                  size='lg'
                >
                  {item.domainWebsite}
                </Checkbox>
              </Td>
              <Td>{item.licenseKey}</Td>
              <Td>{item.siteType}</Td>
              <Td>{item.demo}</Td>
              <Td>{item.sellEnv}</Td>
              <Td>{item.premiumType}</Td>
              <Td>{item.subscription}</Td>
              <Td>{item.createdAt}</Td>
              <Td
                sx={{
                  color: item.expiryDate === "01.01.2023" ? "#FF0000" : "none",
                }}
              >
                {item.expiryDate}
              </Td>
              <Td>{item.status}</Td>
              <Td>{item.soldFree}</Td>
            </Tr>
            <Box padding='5px'></Box>
          </>
        ))}
      </Tbody>
    </>
  );
};

export default DataTableBody;
