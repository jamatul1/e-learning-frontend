import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Logo from "./logo";
import UserMenu from "./userMenu";
import SmallScreenNav from "./smallScreenNav";
import LoginBtns from "./loginBtns";
import LargeScreenNav from "./largeScreenNav";

function Header() {
  return (
    <AppBar elevation={0} position="fixed">
      <Container
        maxWidth="xl"
        sx={{ minWidth: "100vw", boxSizing: "border-box" }}
      >
        <Toolbar disableGutters sx={{ display: "flex", px: 7 }}>
          <Logo />
          <SmallScreenNav />
          <LargeScreenNav />
          {/* <LoginBtns /> */}
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
