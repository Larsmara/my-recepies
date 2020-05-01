import React from "react";
import { useLocation } from "react-router-dom";
// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// Components
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  offset: theme.mixins.toolbar,
}));

const Layout = ({ title, children, authenticated }) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <nav>
        <Navbar authenticated={authenticated} />
      </nav>
      <main>
        <div className={classes.offset} />
        <Container className={classes.content}>{children}</Container>
      </main>
    </>
  );
};

export default Layout;
