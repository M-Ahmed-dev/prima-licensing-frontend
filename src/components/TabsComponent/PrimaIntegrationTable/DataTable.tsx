import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Td,
  useTheme,
  Checkbox,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";

import data from "../../../data/db.json";

const DataTable: React.FC = () => {
  const theme = useTheme();

  const checkBoxStyle = {
    ".chakra-checkbox__control": {
      border: `3px solid ${theme.colors.secondaryLight}`,
      padding: "10px",
    },
    ".chakra-checkbox__label": {
      marginInlineStart: "2.5em",
    },

    // add backrgound color to the selected checkbox
    ".css-1bbu0oi[aria-checked=true], .css-1bbu0oi[data-checked]": {
      bg: theme.colors.secondary,
    },
  };

  const [pluginsData, setPluginsData] = useState(data.plugins);

  const handleCheckboxChange = (id: number) => {
    setPluginsData((prevData) =>
      prevData.map((item) =>
        item.sr === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <>
      <TableContainer>
        <Table
          variant="unstyled"
          mt="20px"
          fontFamily="Inter"
          fontStyle="normal"
        >
          <Thead
            sx={{
              border: `3px solid ${theme.colors.secondaryLight}`,
            }}
          >
            <Tr
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
                <Checkbox sx={checkBoxStyle} size="lg">
                  Domain / Website
                  <ChevronDownIcon />
                </Checkbox>
              </Th>

              <Th>
                <Box>
                  License Key
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Site Type
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Demo
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Sell Env
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Premium Type
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Subscription
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Created
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                {" "}
                <Box>
                  Expired Date
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                {" "}
                <Box>
                  Status
                  <ChevronDownIcon />
                </Box>
              </Th>
              <Th>
                <Box>
                  Sold/Free
                  <ChevronDownIcon />
                </Box>
              </Th>
            </Tr>
          </Thead>

          <Box padding="5px"></Box>

          <Tbody>
            {pluginsData.map((item, index) => (
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
                    marginBottom: index > 0 ? "90px" : "0", // Adjust the spacing as needed
                  }}
                >
                  <Td>
                    <Checkbox
                      isChecked={item.isChecked}
                      onChange={() => handleCheckboxChange(item.sr)}
                      sx={checkBoxStyle}
                      size="lg"
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
                      color:
                        item.expiryDate === "01.01.2023" ? "#FF0000" : "none",
                    }}
                  >
                    {item.expiryDate}
                  </Td>
                  <Td>{item.status}</Td>
                  <Td>{item.soldFree}</Td>
                </Tr>
                <Box padding="5px"></Box>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
