import React from "react";
import { useMsal } from "@azure/msal-react"; // Import InteractionStatus
import { AuthenticationResult } from "@azure/msal-browser/dist/response/AuthenticationResult";
import { Button } from "@chakra-ui/react";

import Microsoft from "../../assets/Microsoft.png";

const MicrosoftLoginButton: React.FC = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = async () => {
    if (!accounts.length) {
      const loginResponse = await instance.loginPopup();
      handleLoginResponse(loginResponse);
    }
  };

  const handleLoginResponse = (response: AuthenticationResult) => {
    if (response && response.account) {
      const { localAccountId } = response.account;
      const { accessToken } = response;
      console.log("localAccountId", localAccountId);
      console.log("accessToken", accessToken);
    }
  };

  return (
    <>
      <Button
        mt="50px"
        sx={{
          border: "1px solid grey",
          minHeight: "91px",
          minWidth: "560px",
          width: "100%",
          display: "flex",
          textTransform: "capitalize",
          letterSpacing: "1.5px",
          gap: "20px",
          fontFamily: "Inter",
          color: "#393637",
          backgroundColor: "#fff",
          fontWeight: "500px",
          fontSize: "15px",
        }}
        onClick={handleLogin}
      >
        <img
          src={Microsoft}
          alt="logo"
          style={{
            width: "30px",
          }}
        />
        Continue With Microsoft Account
      </Button>
    </>
  );
};

export default MicrosoftLoginButton;
