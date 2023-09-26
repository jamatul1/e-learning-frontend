import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useAuth } from "../../hooks/useAuth";
import { Link, NavLink, Outlet } from "react-router-dom";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import * as Icon from "react-feather";
import { useDispatch } from "react-redux";
import {
  unsetCredentials,
  unsetEnrolled,
} from "../../redux/slices/users/authSlice";

const NavStyle = ({ isActive }) => ({
  color: isActive ? "#2e70b4" : "#464646",
  textDecoration: "none",
});

function UserMenu() {
  let { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <Dropdown>
      <MenuButton sx={{ border: "none" }} size="sm">
        <Icon.User />
      </MenuButton>

      <Menu size="sm" sx={{ zIndex: 10000, p: 1 }}>
        <MenuItem>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar />
            <Typography fontSize={12} sx={{ mt: 0.2 }}>
              {user.name}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />

        <MenuItem>
          <ListItemDecorator />
          <Link
            to={"/profile"}
            style={{
              textDecoration: "none",
              font: "inherit",
              ":hover": {
                font: "inherit",
              },
            }}
          >
            {" "}
            Profile
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            dispatch(unsetCredentials());
            dispatch(unsetEnrolled());
          }}
        >
          <ListItemDecorator>
            <Icon.LogOut size={16} />
          </ListItemDecorator>
          Sign Out!
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

function Logo() {
  return (
    <Typography
      fontWeight="lg"
      startDecorator={
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            background: (theme) =>
              `linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
            borderRadius: "50%",
            boxShadow: (theme) => theme.shadow.md,
            "--joy-shadowChannel": (theme) =>
              theme.vars.palette.primary.mainChannel,
          }}
        />
      }
    >
      Remotely
    </Typography>
  );
}
function Nav() {
  let { user } = useAuth();
  return (
    <List orientation="horizontal" sx={{ justifyContent: "flex-end" }}>
      <ListItem>
        <NavLink style={NavStyle} to={"/"}>
          Home
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink style={NavStyle} to={"/courses"}>
          Courses
        </NavLink>
      </ListItem>
      {!user && (
        <ListItem>
          <NavLink style={NavStyle} to={"/signin"}>
            Sign In
          </NavLink>
        </ListItem>
      )}
      {!user && (
        <ListItem>
          <NavLink style={NavStyle} to={"/signup"}>
            Sign Up
          </NavLink>
        </ListItem>
      )}

      {user && (
        <ListItem>
          <NavLink style={NavStyle} to={"/" + user.role}>
            Dashboard
          </NavLink>
        </ListItem>
      )}
      {user && (
        <ListItem>
          <UserMenu></UserMenu>
        </ListItem>
      )}
    </List>
  );
}
export default function Header() {
  return (
    <>
      <Box
        component="header"
        className="Header"
        sx={{
          p: 1.5,
          gap: 2,
          bgcolor: "background.surface",
          boxShadow: "md",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          border: "none",
          position: "sticky",
          top: 0,
          zIndex: 1100,
          px: 15,
          mb: 2,
        }}
      >
        <Logo></Logo>
        <Nav></Nav>
      </Box>
      <Outlet />
    </>
  );
}
