import { Box } from "@chakra-ui/react";
import React from "react";
import NavLogo from "../components/NavLogo/NavLogo";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Box minHeight="100vh" padding="30px">
        {/* Header */}
        <Box>
          <NavLogo />
        </Box>

        {/* Main Content */}
        <Box pt="13px" minHeight="100vh">
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
