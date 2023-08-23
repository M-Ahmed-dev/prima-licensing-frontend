import { ChevronDownIcon } from "@chakra-ui/icons";
import { Checkbox, useTheme, Th, Thead, Tr, Box } from "@chakra-ui/react";
import React from "react";
import data from "../../data/db.json";

const DataTableHeading: React.FC = () => {
  const theme = useTheme();

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
      <Thead
        sx={{
          border: `3px solid ${theme.colors.secondaryLight}`,
        }}
      >
        {data.TableHeading.map((item) => (
          <>
            <Tr
              key={item.licenseKey} // Use index as the key, assuming TableHeading items won't change
              sx={{
                th: {
                  fontSize: "18px",
                  color: theme.colors.secondary,
                  padding: "22px",
                  fontFamily: "Inter",
                  fontWeight: "600",
                },
              }}
            >
              <Th>
                <Checkbox sx={checkBoxStyle} size='lg'>
                  Domain / Website
                  <ChevronDownIcon />
                </Checkbox>
              </Th>
              <Th>
                <Box>
                  {item.licenseKey}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.siteType}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.demo}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.sellEnv}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.premiumType}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.subscription}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.createdAt}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.expiryDate}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.status}
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  {item.soldFree}
                  <ChevronDownIcon />
                </Box>
              </Th>
            </Tr>
          </>
        ))}
      </Thead>
      <Box padding='5px'></Box>
    </>
  );
};

export default DataTableHeading;
