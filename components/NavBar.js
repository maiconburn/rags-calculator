import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import ButtonActive from "../components/ButtonActive";
import ButtonMobileActive from "../components/ButtonMobileActive";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styles from "../styles/components/NavBar.module.scss";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    padding: "20px 30px 0 30px",
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    maxWidth: 200,
  },
}));

export default function NavBar() {
  const router = useRouter();
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ButtonMobileActive
          className={styles.buttonMobileActive}
          color="inherit"
          href="/info"
        >
          <HelpOutlineIcon /> Info
        </ButtonMobileActive>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Button edge="start" color="inherit" href="/">
            <img
              src="img/logo.png"
              alt="Rags.eco Logo"
              className={classes.logo}
            />
          </Button>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ButtonActive
              buttonClass="buttonActive"
              color="inherit"
              href="/info"
            >
              <HelpOutlineIcon /> Info
            </ButtonActive>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
