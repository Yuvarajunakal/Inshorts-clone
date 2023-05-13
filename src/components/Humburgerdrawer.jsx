import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from "@mui/icons-material/Menu";
// import { blueGrey } from '@mui/material/colors';
import { createTheme, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Categories from "../data/Category";
import "./humburger.css";
// import { Padding } from '@mui/icons-material';

export default function TemporaryDrawer({ setCategory }) {
  const [state, setState] = React.useState({
    left: false,
  });
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "dark",
        },
      }),
    [prefersDarkMode]
  );

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 200,
        padding: "10px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem sx={{ fontFamily: "sans-serif" }}>Categories</ListItem>
      </List>
      <Divider />
      <List sx={{ padding: "10px", cursor: "pointer" }}>
        {Categories.map((text, index) => (
          <ListItem
            style={{ heigth: "40", borderRadius: "10" }}
            key={text}
            onClick={() => setCategory(text)}
            disablePadding
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              {" "}
              <MenuIcon style={{ color: "black" }} />{" "}
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </ThemeProvider>
    </div>
  );
}
