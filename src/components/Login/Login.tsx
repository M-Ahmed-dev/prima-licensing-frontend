import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import React from "react";

import bgImage from "../../assets/bgImage.png";
import AppLogin from "../../assets/AppLogin.png";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configure";

const Login: React.FC = () => {
  const theme = useTheme();

  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };

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
            <Button onClick={() => handleLogin("redirect")}>
              Login with Microsoft
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
