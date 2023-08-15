import { Box, Text, useTheme } from "@chakra-ui/react";
import React from "react";

import bgImage from "../../assets/bgImage.png";
import AppLogin from "../../assets/AppLogin.png";
import MicrosoftLoginButton from "./MicroSoftLoginButton";

const Login: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          bgSize: "cover",
          bgPosition: "center",
          bgRepeat: "no-repeat",
          padding: "65px",
          height: "100vh",
        }}
        bgImage={bgImage}
      >
        <Box display="flex" justifyContent="center">
          <img src={AppLogin} alt="" />
        </Box>

        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              border: "2px solid black",
              width: "695px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              sx={{
                fontSize: "25px",
                color: theme.colors.secondary,
                fontWeight: "700",
              }}
            >
              Welcome to TuLicense!
            </Text>
            <MicrosoftLoginButton />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
