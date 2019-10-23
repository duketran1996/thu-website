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
import { isTablet, isMobileOnly, browserName } from "react-device-detect";
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
    //Unconmment for toolbar test
    //background: `linear-gradient(to right, #FFFFFF 50%, rgb(0,0,0) 50%)`,
    width: "100%",
    zIndex: "100",
    position: "absolute"
  },

  grow: {
    flexGrow: 1
  },

  app_mobile: {
    height: "80px",
    background: "transparent",
    boxShadow: "none"
  },

  app_tablet_desktop: {
    height: "128px",
    background: "transparent",
    boxShadow: "none"
  },

  tool_mobile: {
    width: "100%",
    margin: "auto"
  },

  tool_tablet: {
    width: "90%",
    margin: "auto"
  },

  tool_desktop: {
    width: "75%",
    margin: "auto"
  },

  title_container_mobile: {
    marginLeft: "10px",
    height: "160px",
    width: "180px",
    display: "flex"
  },

  title_container_tablet_desktop: {
    height: "200px",
    width: "320px",
    display: "flex",
    cursor: "pointer"
  },

  button_container_none: { display: "none" },

  button_container_display: { display: "flex" },

  section_mobile_none: { display: "none" },

  section_mobile_display: { display: "flex" },

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

  const compatible = isMobileOnly
    ? {
        classTool: classes.tool_mobile,
        classApp: classes.app_mobile,
        classTitleContainer: classes.title_container_mobile,
        classSectionMobile: classes.section_mobile_display,
        classButtonContainer: classes.button_container_none
      }
    : isTablet
    ? {
        classTool: classes.tool_tablet,
        classApp: classes.app_tablet_desktop,
        classTitleContainer: classes.title_container_tablet_desktop,
        classSectionMobile: classes.section_mobile_none,
        classButtonContainer: classes.button_container_display
      }
    : // Fixed for ipad pro 10.5 compatibility
    window.outerWidth === 1194 && browserName === "Safari"
    ? {
        classTool: classes.tool_tablet,
        classApp: classes.app_tablet_desktop,
        classTitleContainer: classes.title_container_tablet_desktop,
        classSectionMobile: classes.section_mobile_none,
        classButtonContainer: classes.button_container_display
      }
    : // Fixed for ipad pro 9.7 and ipad air compatibility
    (window.outerWidth === 1024 || window.outerWidth === 1112) &&
      browserName === "Safari"
    ? {
        classTool: classes.tool_tablet,
        classApp: classes.app_tablet_desktop,
        classTitleContainer: classes.title_container_tablet_desktop,
        classSectionMobile: classes.section_mobile_none,
        classButtonContainer: classes.button_container_display
      }
    : {
        classTool: classes.tool_desktop,
        classApp: classes.app_tablet_desktop,
        classTitleContainer: classes.title_container_tablet_desktop,
        classSectionMobile: classes.section_mobile_none,
        classButtonContainer: classes.button_container_display
      };

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
      <AppBar className={compatible.classApp} position="static">
        <Toolbar className={compatible.classTool}>
          <div
            id="thusign"
            style={fillSign}
            className={compatible.classTitleContainer}
            onClick={() => handleClickPage(0)}
          />
          <div className={classes.grow} />
          <div className={compatible.classButtonContainer}>
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
          <div className={compatible.classSectionMobile}>
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
