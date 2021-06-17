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
  appbar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    maxWidth: 100,
  },
}));

export default function NavBar() {
  const classes = useStyles();

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
          <div>
            <ButtonActive buttonClass="buttonActive" color="inherit" href="/">
              Restart
            </ButtonActive>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
