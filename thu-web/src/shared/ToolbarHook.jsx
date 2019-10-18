import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ToolbarButton from "../components/ToolbarButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Vivus from "vivus";
import ThuSign from "../svg/thusign.svg";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
    },
    html: {
      fontSize: "120.25%"
    }
  },

  root: {
    width: "100%",
    zIndex: "100",
    position: "absolute"
  },

  grow: {
    flexGrow: 1
  },

  app: {
    height: "128px",
    background: "transparent",
    boxShadow: "none",
    [theme.breakpoints.only("sm")]: {
      height: "80px"
    },
    [theme.breakpoints.only("xs")]: {
      height: "80px"
    }
  },

  tool: {
    [theme.breakpoints.up("lg")]: {
      width: "75%",
      margin: "auto"
    },
    [theme.breakpoints.only("md")]: {
      width: "90%",
      margin: "auto"
    },
    [theme.breakpoints.only("sm")]: {
      width: "100%",
      margin: "auto"
    },
    [theme.breakpoints.only("xs")]: {
      width: "98%",
      margin: "auto",
      //Iphone 5
      ["@media (height:320px)"]: { width: "90%" }
    }
  },

  titleContainer: {
    [theme.breakpoints.up("md")]: {
      height: "200px",
      width: "320px",
      display: "flex"
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "10px",
      height: "160px",
      width: "180px",
      display: "flex"
    },
    [theme.breakpoints.only("xs")]: {
      height: "120px",
      width: "120px",
      display: "flex",
      //Iphone 5
      ["@media (height:568px)"]: { width: "100px" }
    }
  },

  buttonContainer: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      ["@media (min-height:300px) and (max-height:420px)"]: { display: "none" }
    }
  },

  sectionMobile: {
    display: "none",
    [theme.breakpoints.only("sm")]: {
      ["@media (min-height:300px) and (max-height:420px)"]: { display: "flex" }
    },
    [theme.breakpoints.only("xs")]: {
      display: "flex"
    }
  },

  menuItemTittle: {
    margin: 0,
    fontSize: "17px"
  }
}));

export default function ToolbarHook(props) {
  const classes = useStyles();
  const [fill, setFill] = useState(0);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

  useEffect(() => {
    new Vivus("thusign", { duration: 150, file: ThuSign }, function finish() {
      setFill(1);
    });
  }, []);

  function handleClickPage(pageNum) {
    props.onCurrentPage(pageNum);
    setMobileMenuAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMenuAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMenuAnchorEl(null);
  }

  const fillSign = {
    fillOpacity: fill,
    transition: "fill-opacity 0.2s"
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMenuAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(mobileMenuAnchorEl)}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => handleClickPage(1)}>
        <p className={classes.menuItemTittle}>About</p>
      </MenuItem>
      <MenuItem onClick={() => handleClickPage(2)}>
        <p className={classes.menuItemTittle}>Experience</p>
      </MenuItem>
      <MenuItem onClick={() => handleClickPage(3)}>
        <p className={classes.menuItemTittle}>Contact</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.app} position="static">
        <Toolbar className={classes.tool}>
          <div
            id="thusign"
            style={fillSign}
            className={classes.titleContainer}
            onClick={() => handleClickPage(0)}
          />
          <div className={classes.grow} />
          <div className={classes.buttonContainer}>
            <ToolbarButton
              title="About"
              timeout={1000}
              onClick={() => handleClickPage(1)}
            />
            <ToolbarButton
              title="Experience"
              timeout={1500}
              onClick={() => handleClickPage(2)}
            />
            <ToolbarButton
              title="Contact"
              timeout={2000}
              onClick={() => handleClickPage(3)}
            />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
