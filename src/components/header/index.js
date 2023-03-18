import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "./logo";
import UserMenu from "./userMenu";
import SmallScreenNav from "./smallScreenNav";
import LargeScreenNav from "./LargeScreenNav";
import LoginBtns from "./loginBtns";

function Header() {
  return (
    <AppBar elevation={0} position="fixed">
      <Container maxWidth="xl" sx={{ minWidth: "100vw" }}>
        <Toolbar disableGutters>
          <Logo />
          <SmallScreenNav />
          <LargeScreenNav />
          <LoginBtns />
          {/* <UserMenu /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
