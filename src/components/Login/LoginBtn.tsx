import React from "react";
import AppLogin from "../../assets/AppLogin.png";
import Microsoft from "../../assets/Microsoft.svg";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../configure";
import { Box, Button, Text, useTheme } from "@chakra-ui/react";

const LoginBtn: React.FC = () => {
  const theme = useTheme();
  const { instance } = useMsal();

  const handleLogin = async() => {
   await instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e.message);
    });
  };

  return (
    <>
      <Box display='flex' justifyContent='center'>
        <img src={AppLogin} alt='' />
      </Box>

      <Box display='flex' justifyContent='center'>
        <Box
          mt='79px'
          sx={{
            border: `3px solid ${theme.colors.darkGray}`,
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
          <Button
            mt='50px'
            sx={{
              borderRadius: "5px",
              border: `2px solid #cacfd6`,
              width: "560px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              height: "91px",
              fontSize: "20px",
              fontFamily: "Inter",
              color: theme.colors.gray,
              fontWeight: "400",
              background: "#FFFFFF",
            }}
            onClick={handleLogin}
          >
            <img src={Microsoft} alt='MicroSoft Login' />
            Continue with Microsoft Account
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default LoginBtn;
