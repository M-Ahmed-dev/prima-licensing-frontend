import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Navigate } from "react-router-dom";

import bgImage from "../../assets/bgImage.png";
import LoginBtn from "./LoginBtn";

const Login: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { inProgress } = useMsal()

  if (isAuthenticated && inProgress === 'none') {
    return <Navigate to="/" />;
  }

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
        <LoginBtn />
      </Box>
    </>
  );
};

export default Login;
