import { Box } from "@chakra-ui/react";
import React from "react";

import bgImage from "../../assets/bgImage.png";
import LoginBtn from "./LoginBtn";

const Login: React.FC = () => {
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
