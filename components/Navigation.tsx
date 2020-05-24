import React from "react";
import Link from "next/link";
import { destroyCookie } from "nookies";
import { AppBar, Toolbar, IconButton, Button, Container } from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import styled from "styled-components";

export default function Navigation() {
  const handleSignOut = () => {
    // destroyCookie("", "token");
    window.location.reload();
  };
  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <div>
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>
          <Link href="/signin">
            <a className="nav-link">Sign In</a>
          </Link>
          <Link href="/signup">
            <a className="nav-link"> Sign Up</a>
          </Link>
          <Button variant="contained" color="primary" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
        <div>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

const MyToolbar = styled(Toolbar)({});
